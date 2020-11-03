const EXPRESS = require('express');
const PATH = require('path');
const PORT = process.env.PORT || 3005;

const APP = EXPRESS();

APP.use(EXPRESS.static(PATH.join(__dirname, './dist')));

APP.get('/', (req, res) => {
  res.status(200).send('index');
});

APP.get('/issues', (req, res) => {
  res.redirect('/');
});

APP.get('/users', (req, res) => {
  res.redirect('/');
});

APP.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
