const Item = require('../models/Item');

const getItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const item = await Item.findOne({_id: itemId});
    if (!item) return res.status(404).json({msg: `No item with id: ${itemId}`})
    res.status(200).json({item})
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
  createItem
};