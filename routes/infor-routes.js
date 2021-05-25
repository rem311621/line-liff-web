const express = require("express");
const { saveInfor } = require("../public/saveinfor").default;
const router = express.Router();

router.post("/information", saveInfor);

module.exports={
    routes:router
}