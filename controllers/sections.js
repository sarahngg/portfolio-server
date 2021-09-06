const Section = require('../models/Section');

const getAllSections = async (req, res) => {
  try {
    const sections = await Section.find({});
    res.status(200).json({sections})
  } catch (err) {
    res.status(404).json({msg: err});
  }
}

const getSection = async (req, res) => {
  try {
    const { sectionId } = req.params;
    const section = await Section.findOne({_id: sectionId});
    if (!section) return res.status(404).json({msg: `No section with id: ${sectionId}`})
    res.status(200).json({section})
  } catch (err) {
    res.status(404).json({msg: err});
  }
}

const createSection = async (req, res) => {
  try {
    const section = await Section.create(req.body);
    console.log(section);
    res.status(201).json({section});
  } catch (err) {
    res.status(400).json({msg: err});
  }
  
}

module.exports = { 
  getAllSections,
  getSection,
  createSection
};