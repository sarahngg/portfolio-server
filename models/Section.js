const mongoose = require('mongoose');

/** fields not the schema would be ignored */
const SectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'section name is required'],
    trim: true,
    maxLength: [20, 'section name cannot be more than 20 characters'],
  },
  description: {
    type: String,
    default: '',
    trim: true,
    maxLength: [40, 'description cannot be more than 40 characters'],
  },
})

module.exports = mongoose.model('Section', SectionSchema)