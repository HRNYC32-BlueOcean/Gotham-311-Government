/* eslint-disable no-undef */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
(function () {
  // console.log('hi from script');
  // console.log('cookies:', document.cookie);

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyA84RtAvOI77UkgBJ7xG6C7Q0-WWL9AGg0',
    authDomain: 'employee-portal-fec36.firebaseapp.com',
    databaseURL: 'https://employee-portal-fec36.firebaseio.com',
    projectId: 'employee-portal-fec36',
    storageBucket: 'employee-portal-fec36.appspot.com',
    messagingSenderId: '658777065260',
    appId: '1:658777065260:web:975b82fe242c23508c8e89',
  };

  firebase.initializeApp(firebaseConfig);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

  const apiURL = 'https://nameless-mountain-18450.herokuapp.com/';
  const createUserMutation = function (firstName, lastName, email) {
    return `mutation {
        createUser( 
          first_name: "${firstName}"
          last_name: "${lastName}"
          email: "${email}"
          phone: "''"
        ){
          id
        }
      }`;
  };

  const uiConfig = {
    callbacks: {
      // This method runs upon a successful login
      signInSuccessWithAuthResult: function (authResult) {
        let idToken = null;
        const userInfo = authResult.additionalUserInfo.profile;
        const newUser = authResult.additionalUserInfo.isNewUser;
        console.log(userInfo, newUser);
        firebase
          .auth()
          .currentUser.getIdToken(true)
          .then((id) => {
            idToken = id;
            return axios.post('/cookie', { idToken });
          })
          .then((cookie) => {
            if (newUser) {
              console.log('new user!');

              const queryString = createUserMutation(
                userInfo.given_name,
                userInfo.family_name,
                userInfo.email
              );
              console.log(queryString);
              return axios.post(apiURL, {
                query: queryString,
              });
            }
          })
          .then((response) => {
            if (response) {
              const userId = response.data.data.createUser.id;
              console.log('userId', userId);
            }
            location.href = '/';
            console.log('routed');
          })
          .catch(function (error) {
            console.log('LOGIN FLOW ERROR', error);
          });
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle. (developer handles on false)
        return false;
      },
      uiShown: function () {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    // signInSuccessUrl: '/routes/redirect',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  }; //end ui config

  //start auth
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('#firebaseui-auth-container', uiConfig);

  // firebase.auth().onAuthStateChanged(function (user) {
  //   console.log('AUTH STATE CHANGE');
  // });
})();
