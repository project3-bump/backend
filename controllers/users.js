const UsersModel = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const schedule = require("node-schedule");

const seedUsers = async (req, res) => {
	try {
		await UsersModel.deleteMany();

		const password = "1234567890poiuytrewq";
		const hash = await bcrypt.hash(password, 12);

		console.log(hash);

		await UsersModel.create([
			{
				uuid: 10,
				name: "Andrew",
				hash: hash,
				title: "Design Lead",
				profilePicture: "andrew.png",
				isManager: true,
				moodData: [
					{ date: new Date("2023-01-01"), mood: 5 },
					{ date: new Date("2023-01-02"), mood: 4 },
					{ date: new Date("2023-01-03"), mood: 3 },
					{ date: new Date("2023-01-04"), mood: 2 },
					{ date: new Date("2023-01-05"), mood: 1 },
				],
				directReports: [11, 12, 13, 14, 15, 16],
			},
			{
				uuid: 11,
				name: "Karen",
				hash: hash,
				title: "UX Designer",
				profilePicture: "karen.png",
				isManager: false,
				moodData: [
					{ date: new Date("2023-01-01"), mood: 1 },
					{ date: new Date("2023-01-02"), mood: 1 },
					{ date: new Date("2023-01-03"), mood: 1 },
					{ date: new Date("2023-01-04"), mood: 1 },
					{ date: new Date("2023-01-05"), mood: 1 },
				],
			},
			{
				uuid: 12,
				name: "Joel",
				hash: hash,
				title: "UX Designer",
				profilePicture: "joel.png",
				isManager: false,
				moodData: [
					{ date: new Date("2023-01-01"), mood: 3 },
					{ date: new Date("2023-01-02"), mood: 4 },
					{ date: new Date("2023-01-03"), mood: 3 },
					{ date: new Date("2023-01-04"), mood: 4 },
					{ date: new Date("2023-01-05"), mood: 2 },
				],
			},
			{
				uuid: 13,
				name: "Laura",
				hash: hash,
				title: "UI Designer",
				profilePicture: "laura.png",
				isManager: false,
				moodData: [
					{ date: new Date("2023-01-01"), mood: 5 },
					{ date: new Date("2023-01-02"), mood: 4 },
					{ date: new Date("2023-01-03"), mood: 5 },
					{ date: new Date("2023-01-04"), mood: 4 },
					{ date: new Date("2023-01-05"), mood: 5 },
				],
			},
			{
				uuid: 14,
				name: "Isaac",
				hash: hash,
				title: "Intern",
				profilePicture: "isaac.png",
				moodData: [
					{ date: new Date("2023-01-01"), mood: 2 },
					{ date: new Date("2023-01-02"), mood: 3 },
					{ date: new Date("2023-01-03"), mood: 4 },
					{ date: new Date("2023-01-04"), mood: 5 },
					{ date: new Date("2023-01-05"), mood: 1 },
				],
			},
			{
				uuid: 15,
				name: "Nicole",
				hash: hash,
				title: "Junior UX Developer",
				profilePicture: "nicole.png",
				moodData: [
					{ date: new Date("2023-01-01"), mood: 5 },
					{ date: new Date("2023-01-02"), mood: 4 },
					{ date: new Date("2023-01-03"), mood: 3 },
					{ date: new Date("2023-01-04"), mood: 3 },
					{ date: new Date("2023-01-05"), mood: 3 },
				],
			},
			{
				uuid: 16,
				name: "Alex",
				hash: hash,
				title: "Junior UI Developer",
				profilePicture: "alex.png",
				moodData: [
					{ date: new Date("2023-01-01"), mood: 2 },
					{ date: new Date("2023-01-02"), mood: 2 },
					{ date: new Date("2023-01-03"), mood: 3 },
					{ date: new Date("2023-01-04"), mood: 3 },
					{ date: new Date("2023-01-05"), mood: 4 },
				],
			},
		]);
		res.json({ status: "ok", msg: "seeding successful" });
	} catch (error) {
		console.error(error.message);
		res.status(400).json({ status: "error", msg: "seeding error" });
	}
};

const getUsers = async (req, res) => {
	try {
		const allUsers = await UsersModel.find();
		res.json(allUsers);
	} catch (error) {
		console.error(error.message);
		res.json({ status: "errror", msg: "cannot get users" });
	}
};

const postUsers = async (req, res) => {
	try {
		const oneUser = await UsersModel.findById(req.params.id);
		res.json(oneUser);
	} catch (error) {
		console.error(error.message);
		res.json({ status: "error", msg: "error getting user" });
	}
};

const patchUsers = async (req, res) => {
	try {
		// Get date in YYYY-MM-DD format
		const currentDate = new Date().toISOString().slice(0, 10);

		// Get user by id
		const user = await UsersModel.findById(req.params.id);

		// Check if the current date is different from the previous date stored in the user's moodData array
		const previousDate = user.moodData[user.moodData.length - 1].date;
		if (currentDate !== previousDate) {
			// Update the user's moodData immediately
			await UsersModel.findByIdAndUpdate(req.params.id, {
				$push: { moodData: { date: currentDate, mood: req.body.mood } },
			});
			console.log("Registered user mood");
		} else {
			console.log("Replacing user mood");

			// Replace the previous mood with the new mood for the current date
			const moodDataIndex = user.moodData.length - 1;
			user.moodData[moodDataIndex].mood = parseInt(req.body.mood);
			await UsersModel.findByIdAndUpdate(req.params.id, {
				$set: { moodData: user.moodData },
			});
			console.log(user);
		}

		// Schedule the update at 12am everyday
		schedule.scheduleJob(req.params.id, "0 0 * * *", async () => {
			// Get the updated user document from the database
			const updatedUser = await UsersModel.findById(req.params.id);

			// Check if the current date is different from the previous date stored in the user's moodData array
			const previousDate =
				updatedUser.moodData[updatedUser.moodData.length - 1].date;

			if (currentDate !== previousDate) {
				await UsersModel.findByIdAndUpdate(req.params.id, {
					$push: { moodData: { date: currentDate, mood: req.body.mood } },
				});
				console.log("Scheduled user mood update");
			} else {
				console.log("MOOD ALREADY REGISTERED FOR THAT DATE!");
			}
		});

		console.log("Selected mood change");
		res.json({ status: "ok", msg: "user updated" });
	} catch (error) {
		console.error(error.message);
		res.json({ status: "error", msg: "error updating user" });
	}
};

const postUserUUIDByID = async (req, res) => {
	try {
		const oneUser = await UsersModel.findById(req.params.id);
		res.json(oneUser.uuid);
	} catch (error) {
		console.error(error.message);
		res.json({ status: "error", msg: "error getting user" });
	}
};

const postUserPulses = async (req, res) => {
	try {
		const oneUser = await UsersModel.findById(req.params.id);

		// Gets the last 3 elements and reverses it
		const pulse = oneUser.moodData.slice(-3).reverse();

		res.json(pulse);
	} catch (error) {
		console.error(error.message);
		res.json({ status: "error", msg: "error getting user" });
	}
};

const getMoodsOfDirectReport = async (req, res) => {
	try {
		console.log(1);
		const allUsers = await UsersModel.find();

		const directReports = allUsers
			.filter((user) => user.isManager === false)
			.filter((directReport) => {
				let consecutiveMoods = 0;

				// Iterate over the moodData array
				for (const moodData of directReport.moodData) {
					if (moodData.mood < 2) {
						consecutiveMoods++;

						if (consecutiveMoods === 5) {
							return true;
						}
					} else {
						consecutiveMoods = 0;
					}
				}
				return false;
			});

		res.json(directReports);
	} catch (error) {
		console.error(error.message);
		res.json({ status: "error", msg: "cannot get users" });
	}
};

const getOneUserMoodData = async (req, res) => {
	try {
		const oneUser = await UsersModel.find(req.body.id);
		res.json(oneUser.moodsData);
	} catch (error) {
		console.errpr(error.message);
		res.json({ status: "errror", msg: "cannot get one user" });
	}
};

module.exports = {
	seedUsers,
	getUsers,
	postUsers,
	patchUsers,
	postUserUUIDByID,
	postUserPulses,
	getMoodsOfDirectReport,
	getOneUserMoodData,
};
