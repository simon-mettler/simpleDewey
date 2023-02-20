import db from '../db.js';
import { v4 as uuid } from 'uuid';

function Item(id, name, desc, children) {
  this.id = id;
  this.name = name;
  this.desc = desc;
  this.children = children;
}

export const ItemService = {

  add: function(item) {

    // Get parent and remove from item.
    const parent = item.parent;
    delete item.parent;

    // Set uuid and empty children array.
    item.uuid = uuid();
    item.children = [];

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

    function setPath(path) {
      path = path || '';
      return function (item) {
          if(path === '') {
            item.path = path + item.id;
          } else {
            item.path = path + '.' + item.id;
          }
          if (item.children) {
            item.children.forEach(setPath(item.path));
          }
      }
    }

    index.forEach(setPath());




    db.write();



  },

  get: function () {
    console.log('getitem');
  }

}

