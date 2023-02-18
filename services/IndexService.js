import db from '../db.js';
import _ from 'lodash';

export const IndexService = {

  get: function () {
    db.read();
    const data = db.chain.get('index').value();

    /*
    const datalow = _.find(data, _.flow(
      _.property('children'),
      _.partialRight(_.some, {name: 'w1'})
    ));
    */
    console.log();
    return data;
  }

 };