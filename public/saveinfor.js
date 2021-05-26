const admin = require("firebase-admin");
const serviceAccount = require("./test-line-bot-e06b0-firebase-adminsdk-ytkpy-a4ba4deeaa.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });
//import { collection } from "../db";
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
    await collection("Information").add({
      Name: 453,
      addr: 435,
      phone: 11,
      paymethod: 22,
    });
    res.send("Save Success");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default { saveInfor };
