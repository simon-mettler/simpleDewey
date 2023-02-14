import express from 'express';

import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Database connection
import db from './db.js';

// Routes 
//import item_add from './route/item.js';
import { itemRoute } from './routes/routes_item.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000


// Express setup
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));


// Set default data if database is empty.
db.data ||= { settings: [], index: {}};
await db.write();

// Routes
app.get('/', (req, res) => {
  res.render('index', { name: "simon" });
})
app.use('/add', itemRoute);


// Start server
app.listen(port, console.log(`Server listening on port ${port}`))