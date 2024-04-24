var express = require('express');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const reservations = await prisma.reservation.findMany();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




module.exports = router;
