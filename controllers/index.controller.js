import { getIndex } from '../services/index.service.js'

const showIndexController= (req, res) => {
  const index = getIndex();
  res.render('index', { index: index });
}

export { showIndexController }