const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./Data/data");
const connectDb = require("./config/db");

connectDb();
const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on PORT ${PORT}`.yellow.bold));
