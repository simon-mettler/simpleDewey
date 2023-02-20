import db from '../db.js';
import _ from 'lodash';

export const IndexService = {

  get: () => {
    db.read();
    let index = db.data.index;
    return index;
  },
    

  getList: () => {
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


 };