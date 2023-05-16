const UsersModel = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const login = async (req, res) => {
  try {
    const auth = await UsersModel.findOne({ name: req.body.name });
    if (!auth) {
      return res.status(400).json({ status: "error", msg: "not authorised" });
    }

    const result = await bcrypt.compare(req.body.password, auth.hash);
    if (!result) {
      //   return res.status(401).json({ status: "error", msg: "login failed" });
      return res
        .status(401)
        .json({ status: "error", msg: "email or password error" });
    }

    const _id = auth._id;

    const payload = {
      name: auth.name,
    };

    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "20m",
      jwtid: uuidv4(),
    });

    const refresh = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: "30d",
      jwtid: uuidv4(),
    });

    res.json({ access, refresh, _id });
    console.log(_id);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ status: "error", msg: "login failed" });
  }
};

module.exports = {
  login,
};
