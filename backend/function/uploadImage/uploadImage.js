const express = require("express");
const app = express();

app.get("/upload/image", (req, res) => {
  //  res.status(200).json({ message: "hello world" });
  res.status(204);
});

app.listen("8000", () => {
  console.log("Application started");
});
