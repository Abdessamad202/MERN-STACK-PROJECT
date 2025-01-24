const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation');
const register = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).json({ message: 'Email already exists' });

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    await user.save();
    const token = jwt.sign({ _id: user._id }, "your_secret_key");
    res.header('auth-token', token).json({ token,userId: user._id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ message: 'Email is not found' });

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).json({ message: 'Invalid password' });

  const token = jwt.sign({ _id: user._id }, "your_secret_key");
  res.header('auth-token', token).json({ token,userId: user._id });
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login, getAllUsers };