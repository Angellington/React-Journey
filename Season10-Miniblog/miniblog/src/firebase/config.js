import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvBsKdYaFQAojQqWgLjs10KFg_ncAp4cY",
  authDomain: "miniblog-angel.firebaseapp.com",
  projectId: "miniblog-angel",
  storageBucket: "miniblog-angel.firebasestorage.app",
  messagingSenderId: "814232594080",
  appId: "1:814232594080:web:b41b74c4d29c3d04498bc5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };