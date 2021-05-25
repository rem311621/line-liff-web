import { initializeApp, credential as _credential, firestore } from "firebase-admin";
import serviceAccount from "../test-line-bot-e06b0-firebase-adminsdk-ytkpy-a4ba4deeaa.json";
initializeApp({
  credential: _credential.cert(serviceAccount),
});
const db = firestore();
//import db  from("../db");
import Infor from "../models/inforModel";

function test() {
  console.log("test");
}
const saveInfor = async (req, res, next) => {
  try {
    const name = document.getElementById("name").value;
    const addr = document.getElementById("addr").value;
    const phone = document.getElementById("phone").value;
    const pay = document.getElementById("pay").value;
    const data = req.body;
    await db
      .collection("Information")
      .add({ Name: 453, addr: 435, phone: 11, paymethod: 22 });
    res.send("Save Success");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default { saveInfor };
