const db = require("../db");
const Infor = require("../models/inforModel").default;

const saveInfor = async (req, res, next) => {
  try {
    const name = document.getElementById("name").value;
    const addr = document.getElementById("addr").value;
    const phone = document.getElementById("phone").value;
    const pay = document.getElementById("pay").value;
    const data = req.body;
    await db
      .collection("Information")
      .add({ Name: name, addr: addr, phone: phone, paymethod: pay });
    res.send("Save Success");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { saveInfor };
