const UsersModel = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

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
    const updatedUser = {};
    if ("moodData" in req.body) updatedUser.moodData = req.body.moodData;
    await UsersModel.findByIdAndUpdate(req.params.id, updatedUser);
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

module.exports = {
  seedUsers,
  getUsers,
  postUsers,
  patchUsers,
  postUserUUIDByID,
};
