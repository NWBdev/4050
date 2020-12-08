document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
 console.log(app);

  // Firebase Firestore
  const db = firebase.firestore();

  const myPost = db.collection('post').doc('firstpost');


/*
    myPost.onSnapshot(doc => {

      const data = doc.data();
      document.write( data.title + `<br>`)
      //document.write( data.createdAt )
      //console.log('loaded: ', data);

    })
*/


});


function googleLogin() {
const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)

          .then(result => {
            const user = result.user;
            document.write(`Hello ${user.displayName}`);
            window.location.href='splashpage.html';

          })
}
