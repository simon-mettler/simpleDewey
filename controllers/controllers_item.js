import db from '../db.js';

const item_add = (req, res) => {
  console.log(db.data)
  res.render('item_add', {data: db.data});
}

export default item_add;