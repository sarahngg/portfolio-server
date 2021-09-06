const User = require('../models/User');

const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({id: userId});
    if (!user) return res.status(404).json({msg: `No user with id: ${userId}`})
    res.status(200).json({user})
  } catch (err) {
    res.status(404).json({msg: err});
  }
}

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log(user);
    res.status(201).json({user});
  } catch (err) {
    res.status(400).json({msg: err});
  }
}

module.exports = { 
  getUser,
  createUser
};