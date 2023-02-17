import db from '../db.js';

import { Item, addItem }from '../services/service_item.js';

//const item = new Item('00', 'Root', 'desc', []);

const item_add = (req, res) => {
  if(req.method === 'POST') {
    addItem(req.body);
  }
  res.render('item_add');
}


export default item_add;