import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

import lodash from 'lodash';

// Extend Low class with a new 'chain' field.
class LowWithLodash extends Low {
  lodash = lodash.chain(this).get('data')
}

const __dirname = dirname(fileURLToPath(import.meta.url));

// Database location/name
const file = path.join(__dirname, 'db.json');

// Configure lowdb to write to json file.
const adapter = new JSONFile(file);
const db = new LowWithLodash(adapter);

await db.read();

export default db;