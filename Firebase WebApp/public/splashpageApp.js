document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
 console.log(app);

  // Firebase Firestore
  const db = firebase.firestore();

  const myPost = db.collection('post').doc('firstpost');

  const outputHeader =document.querySelector("#lblQuote");




    myPost.onSnapshot(doc => {

      const data = doc.data();

      outputHeader.innerText = data.title
      console.log('Loaded data from onSnapshot');
      //document.getElementById("myHeader").textContent = data.title;
      //document.write( data.title + `<br>`)
      //document.write( data.createdAt )
      //console.log('loaded: ', data);

    })



});



function display() {

}

function logOutLogin() {

  firebase.auth().signOut().then(function() {
  console.log('Logged Out');
  window.location.href='index.html';

}, function(error) {

})
}
