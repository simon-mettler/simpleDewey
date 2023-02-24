import db from '../db.js';
import { v4 as uuid } from 'uuid';

const addItem = (item, parent) => {

  // Set uuid and empty children array.
  item.uuid = uuid();
  item.children = [];

  // Get index
  db.read();
  let index = db.data.index;

  if (parent === 'root') {
    index.push(item);
  }
  
  const rec = (index, parent) => {
    for (const i in index) {
      if (index[i].uuid === parent) {
        index[i].children.push(item);
        break;
      }
      if(index[i].children.length > 0) {
        rec(index[i].children, parent)
      }
    }
  }

  rec(index, parent);

  db.write();

}

const deleteItem = (uuid) => {
  const iterate = () => {

  }
}

const getItem = (uuid) => {
    console.log('getitem');
  }

export { addItem, deleteItem, getItem }