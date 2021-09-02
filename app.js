const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.status(200).send('<h1>Home</h1><div>Using Express</div>');
})

app.get('/contact', (req, res) => {
  console.log(`${req.method} ${req.url}`);
  /** can also rely on express to set status */
  res.send('<h1>Contact</h1><div>Using Express</div>');
})

/** covers all methods at all paths */
app.all('*', (req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.status(404).send('<h1>Page not found :(</h1>');
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})

