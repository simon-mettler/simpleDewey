import { IndexService } from '../services/IndexService.js'

const controller_index_show = (req, res) => {
  const index = IndexService.get();
  res.render('index', { index: index });
}

export { controller_index_show };