import { initializeApp } from 'firebase/app'
import {
    getAuth
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBTdJ_v4V7D9iCiyiVLiqf_18pY_EJYl4o",
    authDomain: "lsauth-fee02.firebaseapp.com",
    projectId: "lsauth-fee02",
    storageBucket: "lsauth-fee02.appspot.com",
    messagingSenderId: "882277066568",
    appId: "1:882277066568:web:82486d751ca9803509f57d",
    measurementId: "G-R9PGBW7YVG"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
