const express = require('express');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();
const app = express();
const port = 3000

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.get('/', (req, res) => {
  res.send('Hello world');
})

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({message: error.message});
    
  }
})

app.get('/users/:id', async (req, res) => {
  try {
    const users = await prisma.user.findUnique({
      where: {
        id : Number(req.params.id),
      },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({message: error.message});
    
  }
})

app.listen(port, () => {
  console.log(`example program listenign to ${port}`)
})