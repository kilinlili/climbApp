const express = require("express");
const joi = require("../../utils/joi");
const base64Tojpg = require("../../utils/image/base64ToJpeg");
const util = require("util");
const router = express.Router();
const fs = require("fs");
const { check, validationResult } = require("express-validator");

const writeFile = util.promisify(fs.writeFile);

const uploadImageRequest = joi.object().keys({
  image: joi.string().required(),
  name: joi.string().required(),
});

router.post(
  "/uploadImage",
  [
    check("image").isAlphanumeric().not().isEmpty(),
    check("name").isAlphanumeric().not().isEmpty(),
  ],
  (req, res) => {
    console.log("connect backend");
    const { image, name } = req.body;
    console.log(image, name);
    return base64Tojpg(image)
      .then((image) => writeFile(`../storage/bucket/${name}.jpg`, image))
      .then(() => res.status(200).json({ message: "OK" }));
    //return res.send("hello post");
  }
);

router.get("/gettest", (req, res) => {
  console.log("get");
  return res.send("hello world");
});

module.exports = router;
