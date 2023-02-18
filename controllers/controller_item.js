import { ItemService } from '../services/ItemService.js';

//const item = new Item('00', 'Root', 'desc', []);

const controller_item_add = (req, res) => {
  if(req.method === 'POST') {
    ItemService.add(req.body);
  }
  res.render('item_add');
}


export { controller_item_add };