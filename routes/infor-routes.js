const express = require("express");
const { saveInfor } = require("../public/saveinfor");
const router = express.Router();

router.post("/information", saveInfor);

module.exports={
    routes:router
}