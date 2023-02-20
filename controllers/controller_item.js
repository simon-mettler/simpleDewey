import { ItemService } from '../services/ItemService.js';
import { IndexService } from '../services/IndexService.js';


const controller_item_add = (req, res) => {

  const htmlSelectList = IndexService.getList();

  if(req.method === 'POST') {
    console.log(req.body);
    ItemService.add(req.body);
    res.render('item_add', { htmlSelectList: htmlSelectList });
  } else {
    const parent = req.query.parent;
    res.render('item_add', { parent: parent, htmlSelectList: htmlSelectList });
  }
}


export { controller_item_add };