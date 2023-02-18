import db from '../db.js';
import { v4 as uuid } from 'uuid';

function Item(id, name, desc, children) {
  this.id = id;
  this.name = name;
  this.desc = desc;
  this.children = children;
}

export const ItemService = {

  add: function () {

    // Get parent and remove from item.
    const parent = item.parent;
    delete item.parent;

    // Set uuid and empty children key.
    item.uuid = uuid();
    item.children = [];

    db.read();

    if (parent === 'root') {
      db.data.index.push(item);
    }

    db.write();
  },

  get: function () {
    console.log('getitem');
  }

}

