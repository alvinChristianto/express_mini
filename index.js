const express = require("express");
const { PrismaClient } = require("@prisma/client");
const homeRouter = require("./home.js");

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

app.use("/home", homeRouter);

// homepage
app.get("/", (req, res) => {
  res.send("Hello world");
});

//get all users
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get user data with ids
app.get("/users/:id", async (req, res) => {
  try {
    const users = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/users", async (req, res) => {
  try {
    console.log(req.body); 
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    console.log(req.body)
    const user = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: req.body.name,
        email: req.body.email
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




app.get(
  "/gfg",
  (req, res, next) => {
    console.log("hello");
    next();
  },
  (req, res) => {
    res.send(
      `<div>
          <h2>Welcome to GeeksforGeeks</h2>
          <h5>Tutorial on Middleware</h5>
      </div>`
    );
  }
);

app.listen(port, () => {
  console.log(`example program listenign to ${port}`);
});
