// This is `services/fireinit.js`
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
//
// this commented code needs to add vuefire in package.json
// import VueFire from 'vuefire'
// Vue.use(VueFire)
// import VueFirestore from 'vue-firestore'
// Vue.use(VueFirestore)
//
// var config = {
//   apiKey: "AIzaSyAzdoAjlM9YlQ-gl8VRayCxtJbnrl9qDsw",
//   authDomain: "nuxt-firebase-auth.firebaseapp.com",
//   databaseURL: "https://nuxt-firebase-auth.firebaseio.com",
//   projectId: "nuxt-firebase-auth",
//   storageBucket: "nuxt-firebase-auth.appspot.com",
//   messagingSenderId: "316484287956"
// };

const config = Object.assign({}, {
  apiKey: 'AIzaSyCheDxLsEmz1GJjey1GKMAe8GRNiJMIIic',
  authDomain: 'rental-port.firebaseapp.com',
  databaseURL: 'https://rental-port.firebaseio.com',
  projectId: 'rental-port',
  storageBucket: 'rental-port.appspot.com',
  messagingSenderId: '1078012644936',
  cacheSizeBytes: 0
});

!firebase.apps.length ? firebase.initializeApp(config) : ''
// export const GoogleProvider = new firebase.auth.GoogleAuthProvider
// export const FacebookProvider = new firebase.auth.FacebookAuthProvider
// export const EmailProvider = new firebase.auth.EmailAuthProvider
// export const auth = firebase.auth()

export const DB = firebase.database()
export const fireDb = firebase.firestore()
export const usersCollection = fireDb.collection('users')
export const usersDB = DB.ref('users')
export default firebase