const bcrypt = require("bcryptjs");
const userSchema = require("../schemas/userSchema");
const User = require("../models/userModel");
const errorHandler = require('../utils/errorHandler');

async function user(fastify) {
  fastify.post("/signin", userSchema, async (req, res) => {
    const { username, password } = req.body;
    const signinUser = await User.findOne({ username });

    if (signinUser) {
      const passwordResult = bcrypt.compareSync(password, signinUser.password);

      if (passwordResult) {
        const token = fastify.jwt.sign(
          { username, userId: signinUser.id },
          { expiresIn: 86400 }
        );
        res.status(200).send({
          _id: signinUser.id,
          username: signinUser.username,
          token: `Bearer ${token}`,
        });
      } else {
        res.status(401).send({ message: "incorrect username or password" });
      }

    } else {
      res.status(404).send({ message: "user with this name not found" });
    }
  });

  fastify.post("/register", userSchema, async (req, res) => {
    const { username, password } = req.body;
    const candidate = await User.findOne({ username });
    if (candidate) {
      res.status(409).send({ message: "This username already used" });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const user = new User({
        username,
        password: bcrypt.hashSync(password, salt),
      });
      try {
        const newUser = await user.save();
        const token = fastify.jwt.sign({ username, userId: newUser.id }, { expiresIn: 86400 });
        res.status(201).send({
          _id: newUser.id,
          username: newUser.username,
          token: `Bearer ${token}`
        });
      } catch (error) {
        errorHandler(res, error)
      }
    }
  });
}

module.exports = user;
