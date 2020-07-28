/* global importScripts, firebase */
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js')
if (!firebase.apps.length){
firebase.initializeApp({
  apiKey: "AIzaSyCpiYaJpDtu2jaaz9cVTKJquRsR56dn0Rs",
  authDomain: "ags-restaurant.firebaseapp.com",
  databaseURL: "https://ags-restaurant.firebaseio.com",
  projectId: "ags-restaurant",
  storageBucket: "ags-restaurant.appspot.com",
  messagingSenderId: "264031413181",
  appId: "1:264031413181:web:fb6ebef972caccb2d5e8d4",
  measurementId: "G-34108P1KNR"
})

firebase.messaging()
firebase.messaging().setBackgroundMessageHandler((payload) => console.log("payload", payload));
}

