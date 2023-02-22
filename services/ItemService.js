import db from '../db.js';
import { v4 as uuid } from 'uuid';


export const ItemService = {

  add: function(item, parent) {

    // Set uuid and empty children array.
    item.uuid = uuid();
    item.children = [];

    // Get index
    db.read();
    let index = db.data.index;

    if (parent === 'root') {
      index.push(item);
    }
    
    const addItem = (index, parent) => {
      for (const i in index) {
        if (index[i].uuid === parent) {
          index[i].children.push(item);
          break;
        }
        if(index[i].children.length > 0) {
          addItem(index[i].children, parent)
        }
      }
    }

    addItem(index, parent);

    db.write();

  },


  get: function () {
    console.log('getitem');
  }

}

