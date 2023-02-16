import db from '../db.js';

import Item from '../models/model_item.js';

//const item = new Item('00', 'Root', 'desc', []);

const item_add = (req, res) => {
  //console.log(db.data)
  console.log(req.body);
  res.render('item_add', {data: db.data});
}

export default item_add;