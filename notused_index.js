const express = require("express");
const { PrismaClient } = require("@prisma/client");
const homeRouter = require("./notused_home.js");

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});


app.listen(port, () => {
  console.log(`example program listenign to ${port}`);
});
