import express from 'express';

import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json')

const adapter = new JSONFile(file)
const db = new Low(adapter)

await db.read()
db.data ||= { settings: [], index: []}  

await db.write()

const app = express();
const port = 3000


app.listen(port, console.log(`Server listening on port ${port}`))