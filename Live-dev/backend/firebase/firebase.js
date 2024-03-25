// Import the functions you need from the SDKs you need
import firebase from  'firebase/compat/app'
import {getFirestore} from '@firebase/firestore'
import {getStorage} from '@firebase/storage'
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const app =firebase.initializeApp ({
//  apiKey: deleted for security,
  authDomain: "live-2024.firebaseapp.com",
  projectId: "live-2024",
  storageBucket: "live-2024.appspot.com",
//  messagingSenderId: deleted for security,
 // appId: deleted for security,
})
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app);

export default app
  
  

