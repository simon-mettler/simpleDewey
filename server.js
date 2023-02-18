import express from 'express';

import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

// Database connection
import db from './db.js';

// Set default data if database is empty.
db.read();
db.data ||= { settings: [], index: []};
db.write();

// Routes 
import { itemRoutes } from './routes/routes_item.js';
import { indexRoutes } from './routes/routes_index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000


// Express setup
const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));



// Routes
app.use('/', indexRoutes);
app.use('/add', itemRoutes);


// Start server
app.listen(port, console.log(`Server listening on port ${port}`))