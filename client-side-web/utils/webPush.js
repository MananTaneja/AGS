import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";
const firebaseCloudMessaging = {
//checking whether token is available in indexed DB
tokenInlocalforage: async () => {
return localforage.getItem("fcm_token");
},
//initializing firebase app
init: async function () {
if (!firebase.apps.length) {
firebase.initializeApp({
  
  apiKey: "AIzaSyCpiYaJpDtu2jaaz9cVTKJquRsR56dn0Rs",
  authDomain: "ags-restaurant.firebaseapp.com",
  databaseURL: "https://ags-restaurant.firebaseio.com",
  projectId: "ags-restaurant",
  storageBucket: "ags-restaurant.appspot.com",
  messagingSenderId: "264031413181",
  appId: "1:264031413181:web:fb6ebef972caccb2d5e8d4",
  measurementId: "G-34108P1KNR"
        
});
try {
const messaging = firebase.messaging();
const tokenInLocalForage = await this.tokenInlocalforage();
//if FCM token is already there just return the token
if (tokenInLocalForage !== null) {
  console.log(tokenInLocalForage )
return tokenInLocalForage;
}
//requesting notification permission from browser
const status = await Notification.requestPermission();
console.log(status)
if ( status === "granted") {
  
//getting token from FCM
const fcm_token = await messaging.getToken();
if (fcm_token) {
//setting FCM token in indexed db using localforage
localforage.setItem("fcm_token", fcm_token);
console.log("fcm token", fcm_token);
//return the FCM token after saving it
return fcm_token;
}
}
} catch (error) {
console.error(error);
return null;
}
}
},
};
export { firebaseCloudMessaging };
// import 'firebase/messaging'
// import firebase from 'firebase/app'
// import localforage from 'localforage'

// const firebaseCloudMessaging = {
//   tokenInlocalforage: async () => {
//     return localforage.getItem('fcm_token')
//   },

//   init: async function () {
//     firebase.initializeApp({
//       apiKey: "AIzaSyCpiYaJpDtu2jaaz9cVTKJquRsR56dn0Rs",
//       authDomain: "ags-restaurant.firebaseapp.com",
//       databaseURL: "https://ags-restaurant.firebaseio.com",
//       projectId: "ags-restaurant",
//       storageBucket: "ags-restaurant.appspot.com",
//       messagingSenderId: "264031413181",
//       appId: "1:264031413181:web:fb6ebef972caccb2d5e8d4",
//       measurementId: "G-34108P1KNR"
//     })

//     try {
//       if ((await this.tokenInlocalforage()) !== null) {
//         console.log(await this.tokenInlocalforage())
//         return await this.tokenInlocalforage()
//       }

//       const messaging = firebase.messaging()
//       await messaging.requestPermission()
//       const token = await messaging.getToken()

//       localforage.setItem('fcm_token', token)
//       console.log('fcm_token', token)
//       return token;
     
//     } catch (error) {
//       console.error(error)
//     }
//   },
// }

// export { firebaseCloudMessaging }
