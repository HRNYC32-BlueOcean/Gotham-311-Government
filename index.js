require('dotenv').config();
const EXPRESS = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const ROUTER = EXPRESS.Router();
const PATH = require('path');

const PORT = process.env.PORT || 3005;
const distPath = PATH.join(__dirname, 'dist/');
const APP = EXPRESS();

// APP.use(EXPRESS.static(PATH.join(__dirname, 'dist')));
APP.use(bodyParser.json({ limit: '50mb' }));
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(cookieParser());

// firebase admin
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-admin-employee-config.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://blue-ocean-11c09.firebaseio.com',
});

//------------------------------
// middleware to check cookie, put in separate file later
function checkCookieMiddleware(req, res, next) {
  console.log('in cookie middleware ');
  const sessionCookie = req.cookies.__session || '';
  admin
    .auth()
    .verifySessionCookie(sessionCookie, true)
    .then((decodedClaims) => {
      req.decodedClaims = decodedClaims;
      next();
    })
    .catch((error) => {
      console.log('NO COOKIE ERROR, REDIRECT');
      // Session cookie is unavailable or invalid. Force user to login.
      res.redirect('/login');
    });
}
//------------------------------

// serve app, minus bundle.js
APP.get('/', checkCookieMiddleware, (req, res) => {
  res.sendFile(`${distPath}/index.html`);
});

// set user cookie if token has been sent in firebase
APP.post('/cookie', (req, res) => {
  const idToken = req.body.idToken;

  const expiresIn = 60 * 60 * 24 * 5 * 500;
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedUser) => {
      return admin.auth().createSessionCookie(idToken, { expiresIn });
    })
    .then((sessionCookie) => {
      // Set cookie policy for session cookie and set in response.
      const options = { maxAge: expiresIn, httpOnly: true, secure: false };
      res.cookie('__session', sessionCookie, options);
      res.end(JSON.stringify({ status: 'success' }));
    })
    .catch((error) => {
      console.log(error);
      res.status(401).send('UNAUTHORIZED REQUEST!');
    });
});

APP.post('/logout', (req, res) => {
  console.log('in logout');
  const sessionCookie = req.cookies.__session || '';
  res.clearCookie('__session');
  admin
    .auth()
    .verifySessionCookie(sessionCookie)
    .then((decodedClaims) => {
      console.log('DECODE CLAIMS:', decodedClaims);

      return admin.auth().revokeRefreshTokens(decodedClaims.sub);
    })
    .then(() => {
      console.log('cleared cookie access in firebase');
      res.redirect('/'); //THIS ISN'T WORKING (no idea why), ROUTE CLIENT SIDE
    })
    .catch((error) => {
      console.log('LOGOUT ERROR', error);
      res.redirect('/');
    });
});

APP.get('/issues', (req, res) => {
  res.redirect('/');
});

APP.get('/users', (req, res) => {
  res.redirect('/');
});

APP.get('/login', (req, res) => {
  if (req.cookies.__session) {
    console.log('has cookie, redirecting to homepage');
    res.redirect('/');
  }
  res.sendFile(`${distPath}/login.html`);
});

// wildcard: just serve files
APP.get('*', (req, res) => {
  res.sendFile(distPath + req.params['0'].split('/')[1]);
});

APP.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
