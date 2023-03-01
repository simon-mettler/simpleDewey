import { addItem } from '../services/item.service.js';
import { generateMeta, getIndexList } from '../services/index.service.js';


const addItemController = (req, res) => {

  const htmlSelectList = getIndexList();

  if(req.method === 'POST') {
    let item = req.body;

    // Get parent and remove from item.
    const parent = item.parent;
    delete item.parent;

    // Add items and regenerate index meta.
    addItem(item, parent);
    generateMeta();

    res.render('item_add', { htmlSelectList: htmlSelectList });

  } else {

    const parent = req.query.parent;
    res.render('item_add', { parent: parent, htmlSelectList: htmlSelectList });

  }
}

const deleteItemController = (req, res) => {
  const item = req.body;
  console.log(item);
  res.redirect('/');
}


export { addItemController, deleteItemController }