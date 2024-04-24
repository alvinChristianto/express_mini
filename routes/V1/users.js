var express = require('express');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

var hash = require('pbkdf2-password')()
var path = require('path');
var session = require('express-session');

var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get user data with ids
router.get("/:id", async function(req, res, next) {
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

router.post("/", async function(req, res, next)  {
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

router.put("/:id", async function(req, res, next) {
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

router.delete("/:id", async function(req, res, next) {
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



module.exports = router;
