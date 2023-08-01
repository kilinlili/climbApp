const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use("/", (req, res, next) => {
  console.log("set header");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log("set header ok");
  next();
});

const upload = require("./uploadImage/uploadImage.js");

app.use("/user", upload);

app.listen("8000", "127.0.0.1", () => {
  console.log("Application started");
});
