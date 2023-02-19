import db from '../db.js';
import _ from 'lodash';

export const IndexService = {

  get: function () {
    db.read();
    const data = db.data.index;

    function getPath(path) {
      path = path || '';
      return function (item) {
          if(path === '') {
            item.path = path + item.id;
          } else {
            item.path = path + '.' + item.id;
          }
          if (item.children) {
              item.children.forEach(getPath(item.path));
          }
      }
    }

    data.forEach(getPath());
    console.log(JSON.stringify(data, null, 4));


    return data;
  }

 };