const mongoose = require('mongoose');

/** fields not the schema would be ignored */
const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'item name is required'],
    trim: true,
  },
  description: {
    type: String,
    default: '',
    trim: true,
  },
  role: String,
  technologies: [{}],
  image: String,
  date: String,
  blurb: String,
  links: {}
})

module.exports = mongoose.model('Item', ItemSchema)