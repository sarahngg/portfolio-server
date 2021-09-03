const { users } = require('../database');

const getSections = (req, res) => {
  const { userId } = req.params;
  const sections = users.find((user) => user.id === userId).sections;
  return sections ? res.json(sections) : res.status(404).send('Cannot find sections');
}

const getSection = (req, res) => {
  const { userId } = req.params;
  const { sectionId } = req.query;
  const section = users.find(user => user.id === userId)
  .sections.find(section => section.id === sectionId);
  return section ? res.json(section) : res.status(404).send('Cannot find section');
}

module.exports = { 
  getSections,
  getSection
};