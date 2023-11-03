// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIpuhFzIQMkUQqlggfm7HOIpKWQUsQlJE",
  authDomain: "crown-clothing-db-e83b9.firebaseapp.com",
  projectId: "crown-clothing-db-e83b9",
  storageBucket: "crown-clothing-db-e83b9.appspot.com",
  messagingSenderId: "757795020357",
  appId: "1:757795020357:web:3a5627fbfa307d9cb64d2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()
googleProvider.getCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()

export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db)
  
  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done');
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocumentFromAuth = async(userAuth, additionalInfo) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  //If user data does not exist
  //Create / set the document with the data from userAuth in my collection
  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      })
    } catch (error) {
      console.log(`error creating the user ${error.message}`);
    }
  }
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return
  const test = await signInWithEmailAndPassword(auth, email, password)
  return test
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)