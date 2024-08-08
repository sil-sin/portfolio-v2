// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBdY8tZGgkGU5Cx1IQsBSw0EdQh5u0Do1s',
  authDomain: 'portfolio-sil.firebaseapp.com',
  projectId: 'portfolio-sil',
  storageBucket: 'portfolio-sil.appspot.com',
  messagingSenderId: '222161174455',
  appId: '1:222161174455:web:17bc1f846cc831e9d73232',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
