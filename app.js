const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const connectDB = require('./db/connect');
require('dotenv').config();

const { 
  getAllSections,
  getSection,
  createSection,
} = require('./controllers/sectionsController');

const { 
  getUser,
  createUser,
} = require('./controllers/usersController');

const { 
  getItem,
  getAllItemsOfSection,
  createItem,
} = require('./controllers/itemsController');

const port = 5000;

/** must put middleware before the methods */
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.json();
})

app.post('/api/items/', createItem)
app.get('/api/items/', getAllItemsOfSection)
app.get('/api/items/:itemId', getItem)

app.get('/api/users/:userId', getUser)
app.post('/api/users/', createUser)

// app.get('/api/sections/', getAllSections)
app.get('/api/sections/:sectionId', getSection)
app.post('/api/sections/', createSection)


/** covers all methods at all paths */
app.all('*', (req, res) => {
  console.log(`${req.method} ${req.url}`);
  return res.status(404).send('<h1>Page not found :(</h1>');
})

/** only spin up server if db connects */
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    })
  } catch (err) {
    console.log(err);
  }
}

start();