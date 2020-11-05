require('dotenv').config()
const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const PATH = require('path');
const PORT = process.env.PORT || 3005;

const APP = EXPRESS();

APP.use(EXPRESS.static(PATH.join(__dirname, 'dist')));
const distPath = PATH.join(__dirname, 'dist');

ROUTER.get('/', (req, res) => {
  res.status(200).send('index')
});

APP.get('/issues', (req, res) => {
  res.redirect('/');
});

APP.get('/users', (req, res) => {
  res.redirect('/');
});

APP.get('/login', (req, res) => {
  res.sendFile(distPath + '/login.html');
});

APP.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});