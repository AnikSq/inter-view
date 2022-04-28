const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const router = require("./routers");
const app = express();

mongoose.connect(
  "mongodb+srv://Anik:s04E9xUi04shZFsL@cluster0.yfdkm.mongodb.net/test?authSource=admin&replicaSet=atlas-7sfhv0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
  () => {
    console.log("Mongo Connected");
  }
);

app.use(bodyParser());

app.use("/user", router);

app.listen(3000, () => {
  console.log("listening");
});
