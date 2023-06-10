const fs = require("fs");
//import Joi from "joi"
const multer = require("multer");
const express = require("express");
const { resolveSoa } = require("dns");
const app = express();

const RAW_IMAGE_PATH = "storage/raw";

app.use(express.static(__dirname));
app.get("/api/test", (req, res) => {
  console.log("OK");
  const obj = {
    test: "ok",
  };
  res.status(200).json(obj);
});

app.get("/upload/image", (req, res) => {
  //const {imageName} = req.body.name
  console.log("get image");
  console.log(`../${RAW_IMAGE_PATH}/test.jpg`);
  const image = fs.readFile(`../${RAW_IMAGE_PATH}/test.jpg`);
  res.render(image);
});

app.listen("8000", () => {
  console.log("Application started");
});
