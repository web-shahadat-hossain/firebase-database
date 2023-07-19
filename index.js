var express = require("express");
var cors = require("cors");
var app = express();
const firebase = require("firebase/compat/app");
require("firebase/compat/firestore");

app.use(express.json());
const port = 5000;
app.use(cors());

const firebaseConfig = {
  apiKey: "AIzaSyDbp7clxXeXgO-7TToTbqZKDh-xnXCw6Dw",
  authDomain: "mydoctorafrica.firebaseapp.com",
  databaseURL: "https://mydoctorafrica-default-rtdb.firebaseio.com",
  projectId: "mydoctorafrica",
  storageBucket: "mydoctorafrica.appspot.com",
  messagingSenderId: "370511265220",
  appId: "1:370511265220:web:ff63143e8f0fcc278fb891",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("users");

app.get("/", async (req, res) => {
  const snapshot = await User.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
