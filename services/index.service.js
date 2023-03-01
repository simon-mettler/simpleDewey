import db from '../db.js';
import _ from 'lodash';


const getIndex = () => {
  db.read();
  return db.data.index;
}
  

const getIndexList = () => {
  let list = [];

  const getList = (item) => {
    list.push({
      uuid: item.uuid,
      path: item.path,
      name: item.name
    });
    item.children.forEach(getList);
  }
      
  getIndex().forEach(getList);
  return list;
}


const generateMeta = () => {

  const meta = (depth, path) => (item) => {

    if(path === '' || depth < 2) {
      item.paht=item.id;
    } else {
      item.path = path + '.' + item.id;
    }

    item.depth = depth;
    item.children.forEach(meta(depth+1, item.path));
  }

  getIndex().forEach(meta(0, ''))
  db.write();
}

export { getIndex, getIndexList, generateMeta}