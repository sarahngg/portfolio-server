const Item = require('../models/Item');

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

const getItems = async (req, res) => {
  try {
    const { itemIds } = req.query;
    Promise.all(itemIds.map(async itemId => {
      return await getItemHelper(itemId);
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
  getItems,
  createItem
};