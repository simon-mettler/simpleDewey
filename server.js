import express from 'express';

import { join, dirname } from 'node:path';
import path from 'path';
import { fileURLToPath } from 'node:url';

import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';


import { overview, overview2 } from './controllers/overview.js';


const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json')

const adapter = new JSONFile(file)
const db = new Low(adapter)

await db.read()
db.data ||= { settings: [], index: []}  

await db.write()

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
const port = 3000

app.get('/', (req, res) => {
  res.render('index');
})

app.use('/overview', overview);
app.use('/overview2', overview2);

app.listen(port, console.log(`Server listening on port ${port}`))