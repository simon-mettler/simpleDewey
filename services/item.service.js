import db from '../db.js';
import { getIndex } from './index.service.js';
import { v4 as uuid } from 'uuid';

const addItem = (newItem, parentUuid) => {

  // Set uuid and empty children array.
  newItem.uuid = uuid();
  newItem.children = [];

  // Add item to index root if parent = root,
  if (parentUuid === 'root') {

    getIndex().push(item);

  } else {

    // Iterate over items until parent is found.
    const addItemToIndex = (item) => {
      if (item.uuid === parentUuid) {
        item.children.push(newItem);
        return true;
      } else {
        item.children.some(addItemToIndex);
      }
    }
    getIndex().some(addItemToIndex);

  }

  db.write();

}

const deleteItem = (uuid) => {
  console.log('delete item');
}

const getItem = (uuid) => {
  console.log('get item');
}

export { addItem, deleteItem, getItem }