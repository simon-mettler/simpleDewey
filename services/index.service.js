import db from '../db.js';
import _ from 'lodash';


const getIndex = () => {
  db.read();
  let index = db.data.index;
  return index;
}
  

const getIndexList = () => {
  db.read();
  let index = db.data.index;
  let list = [];


  const getLists = (index) => {
    for (const i in index) {
      list.push({
        uuid: index[i].uuid,
        path: index[i].path,
        name: index[i].name
      });
      if(index[i].children.length > 0) {
        getLists(index[i].children)
      }
    }
  }
  getLists(index);

  return list;
}


const generateNotation = () => {
  db.read();
  let index = db.data.index;

  function genPath(path = '', depth = 0) {
    return function (item) {
      item.depth = depth;
        if(path === '') {
          item.path = item.id;
        } else {
          if(depth < 2) {
            item.path = item.id;
          } else {
            item.path = path + '.' + item.id;
          }
        }
        if (item.children) {
          item.children.forEach(genPath(item.path, depth+1));
        }
    }
  }
  index.forEach(genPath());

  db.write();

}

export { getIndex, getIndexList, generateNotation }