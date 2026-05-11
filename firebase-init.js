// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, push, onValue, update, remove, query, orderByChild } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// ВАША КОНФИГУРАЦИЯ
const firebaseConfig = {
    apiKey: "AIzaSyB7E66a8MIPzTwgSi3805U0c0-cngIJjxkgg",
    authDomain: "build2-4bd2f.firebaseapp.com",
    projectId: "build2-4bd2f",
    storageBucket: "build2-4bd2f.firebasestorage.app",
    messagingSenderId: "377749786261",
    appId: "1:377749786261:web:e716a264edf9f21646d59c",
    measurementId: "G-Q3QWCTWJ9C"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Делаем функции доступными глобально
window.db = database;
window.dbRef = ref;
window.dbSet = set;
window.dbGet = get;
window.dbPush = push;
window.dbOnValue = onValue;
window.dbUpdate = update;
window.dbRemove = remove;
window.dbQuery = query;
window.dbOrderByChild = orderByChild;

console.log("✅ Firebase подключен!");