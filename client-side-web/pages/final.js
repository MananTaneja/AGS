import React, { useEffect } from 'react';
import { firebaseCloudMessaging } from '../utils/webPush';
import firebase from "firebase/app";
function Final() {
useEffect(() => {
setToken();
async function setToken() {
try {
const token1 = await firebaseCloudMessaging.init();
const token = localStorage.getItem("TOKEN");
console.log(token)
if (token) {
getMessage();
}
} catch (error) {
console.log(error);
}
}
function getMessage() {
    console.log("message")
const messaging = firebase.messaging();
messaging.onMessage((message) => console.log('foreground ', message));
}
}, []);
return <div>NOTIFICATION SENT</div>;
}
export default Final;