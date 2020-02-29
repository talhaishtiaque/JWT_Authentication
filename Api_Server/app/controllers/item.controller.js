const db = require("../models");
const Item = db.item;

exports.getItems = (req, res) => {

  Item.findAll()
  .then(items => {
      res.status(200).send(items);
  });
};
