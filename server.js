import express from "express";
import mongoose from "mongoose";
import config from "./configurations/config.js";

const app = express();

const port = process.env.PORT || 5000;
// console.log(port);

const connectWithRetry = () => {
  mongoose
    .connect(
      `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_IP}:${config.MONGO_PORT}/?authSource=admin`
    )
    .then(() => console.log("connected to DB"))
    .catch((err) => {
      console.log(err);
      setTimeout(connectWithRetry, 5000);
    });
};
// if for some reason db doesn't connect then it'll keep trying to connect
connectWithRetry();

app.get("/", (req, res) => {
  res.status(200).send("server is working!!!!");
});

app.listen(port, () => {
  console.log(`server is running at port : ${port}`);
});
