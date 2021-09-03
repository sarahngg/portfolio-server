const express = require('express');
const app = express();
const { users } = require('./database');
const port = 5000;

/** Logger Middleware 
 * - Express will supply req, res, next into middleware
 * - next() -  passes on to the next middleware
 * - either send its response or next()
*/
const logger = (req, res, next) => {
  const { method, url } = req;
  console.log(method, url, new Date().getFullYear());
  next();
}

app.get('/', logger, (req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.json();
})

app.get('/api/users/:userId', logger, (req, res) => {
  const { userId } = req.params;
  const userData = users.find((user) => user.id === userId);
  return userData ? res.json(userData) : res.status(404).send('Cannot find user');
})

app.get('/api/users/:userId/sections', logger, (req, res) => {
  const { userId } = req.params;
  const sections = users.find((user) => user.id === userId).sections;
  return sections ? res.json(sections) : res.status(404).send('Cannot find sections');
})

app.get('/api/users/:userId', logger, (req, res) => {
  const { userId } = req.params;
  const { sectionId } = req.query;
  const section = users.find(user => user.id === userId)
  .sections.find(section => section.id === sectionId);
  return section ? res.json(section) : res.status(404).send('Cannot find section');
})

/** covers all methods at all paths */
app.all('*', logger, (req, res) => {
  console.log(`${req.method} ${req.url}`);
  return res.status(404).send('<h1>Page not found :(</h1>');
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})

