import express from "express";
import mongoose from "mongoose";

const app = express();

const port = process.env.PORT || 5000;
// console.log(port);

mongoose
  .connect("mongodb://root:password@mongo:27017/?authSource=admin")
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.status(200).send("server is working!");
});

app.listen(port, () => {
  console.log(`server is running at port : ${port}`);
});
