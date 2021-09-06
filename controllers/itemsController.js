const Item = require('../models/Item');
const Section = require('../models/Section');

const getItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    console.log(itemId);
    const item = await getItemHelper(itemId);
    if (!item) res.status(404).json({msg: `No item with id: ${itemId}`})
    else res.status(200).json({item})
  } catch (err) {
    res.status(404).json({msg: err});
  }
}

const getItemHelper = async itemId => {
  const item = await Item.findOne({_id: itemId});
  return item;
}

const getAllItemsOfSection = async (req, res) => {
  try {
    const { sectionId } = req.query;
    const section = await Section.findOne({_id: sectionId});
    if (!section) return res.status(404).json({msg: `No section with id: ${sectionId}`})
    const { items } = section;
    Promise.all(items.map(async itemId => {
      return await getItemHelper(itemId);
      // if (!item) return res.status(404).json({msg: `No item with id: ${itemId}`})
    })).then(arr => {
      res.status(200).json({ items: arr });
    }).catch(err => {
      throw new Error("error getting item");
    })
  } catch (err) {
    res.status(404).json({msg: err});
  }
}

const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    console.log(item);
    res.status(201).json({item});
  } catch (err) {
    res.status(400).json({msg: err});
  }
}

module.exports = { 
  getItem,
  getAllItemsOfSection,
  createItem
};