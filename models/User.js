const mongoose = require('mongoose');

/** fields not the schema would be ignored */
const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'id is required'],
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'name is required'],
    trim: true,
  },
  tagline: String,
  siteTitle: String,
  sections: [mongoose.ObjectId],
  items: [mongoose.ObjectId]
})

module.exports = mongoose.model('User', UserSchema)