const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser')
const { users } = require('./database');
const connectDB = require('./db/connect');
require('dotenv').config();

const { 
  getAllSections,
  getSection,
  createSection
} = require('./controllers/sections');

const port = 5000;

/** must put middleware before the methods */
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.json();
})

app.get('/api/users/:userId', (req, res) => {
  const { userId } = req.params;
  const userData = users.find((user) => user.id === userId);
  return userData ? res.json(userData) : res.status(404).send('Cannot find user');
})

app.get('/api/sections/', getAllSections)
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