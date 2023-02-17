import db from '../db.js';
import { v4 as uuid } from 'uuid';

function Item(id, name, desc, children) {
  this.id = id;
  this.name = name;
  this.desc = desc;
  this.children = children;
}

function addItem(item) {

  // Get parent and remove from item.
  const parent = item.parent;
  delete item.parent;

  // Set uuid and empty children key.
  item.uuid = uuid();
  item.children = [];

  db.read();
  console.log('service1')
  console.log(db.data);
  if (parent === 'root') {
    db.data.index.push(item);
    console.log('service2')
    console.log(db.data);
  }
  db.write();
  console.log('service3')
  console.log(db.data);
}

function getItem(id) {
  console.log('getitem');
}

export { Item, addItem, getItem };