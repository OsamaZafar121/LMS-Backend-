const { models } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let token = [];
const generateToken = (data) => {
  return jwt.sign(data, config.jwtSecret, { expiresIn: 60 });
};
module.exports = {
  verifyToken: (res, req, next) => {
    const token = req.headers("authorization");
    token = token && token.splice("")[1];
    if (!token) {
      return res.sendStatus(403);
    } else {
      if (!token.include(token)) {
        return res.status(500).send({ message: "Invalid Token" });
      }
      jwt.verify(token, confiq.jwtserver, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
        next();
        // else {
        //   req.user = user;
        //   return res.sendStatus(200);
        // }
      });
    }
  },
  login: async (res, req) => {
    const { email, password } = req.body;
    const user = await models.user.find({ where: { email: email } });
    user = user.dataValues;
    console.log(user);
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = generateToken({ id: user.id });
      return res.json({ token: token });
    } else {
      return res.send("Wrong Credentials");
    }
  },
};
