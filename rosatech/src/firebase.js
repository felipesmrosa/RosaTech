// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importe o Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6fwbOKuhGbHf0yH2lD9t1qx75zZsUXi8",
  authDomain: "rosatechh.firebaseapp.com",
  projectId: "rosatechh",
  storageBucket: "rosatechh.appspot.com",
  messagingSenderId: "745077042230",
  appId: "1:745077042230:web:f03127a4290f3be50cfc97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Inicialize e exporte a instância do Firestore
