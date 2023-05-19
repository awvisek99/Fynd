/* eslint-disable no-undef */

/* eslint-disable no-const-assign */


// import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
const mongodb = require("mongodb");
import path from 'path';
// import history from 'connect-history-api-fallback';
const url="mongodb://127.0.0.1:27017";
// const client = new mongodb.MongoClient(url);

// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');
import bodyparser from 'body-parser';




const app = express();
app.use(bodyparser.json());

app.use('/images', express.static(path.join(__dirname, '../assets')));


app.use(express.json());


// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/vue-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

// Registration endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // alert('User already exists');
      return res.status(409).json({ error: 'User already exists' });

    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Registration failed' });
  }
});


// Login endpoint
app.post('/api/', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // TODO: Generate and send JWT token for authentication

    return res.status(200).json({ message: 'Login successful thank you ' });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Login failed' });
  }
});



app.get('/api/products', async (req, res) => {
  const client = await MongoClient.connect(
    'mongodb://0.0.0.0:27017',
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
  const db = client.db('vue-db');
  const products = await db.collection('products').find({}).toArray();
  res.status(200).json(products);
  client.close();
});

app.get('/api/users/:userId/cart', async (req, res) => {
  const { userId } = req.params;
  const client = await MongoClient.connect(
    'mongodb://0.0.0.0:27017',
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
  const db = client.db('vue-db');
  const user = await db.collection('users').findOne({ id: userId });
  if (!user) return res.status(404).json('Could not find user!');
  const products = await db.collection('products').find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map(id =>
    products.find(product => product.id === id));
  res.status(200).json(cartItems);
  client.close();
});

app.get('/api/products/:productId', async (req, res) => {
  const { productId } = req.params;
  const client = await MongoClient.connect(
    'mongodb://0.0.0.0:27017',
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
  const db = client.db('vue-db');
  const product = await db.collection('products').findOne({ id: productId });
  if (product) {
      res.status(200).json(product);
  } else {
      res.status(404).json('Could not find the product!');
  }
  client.close();
});

app.post('/api/users/:userId/cart', async (req, res) => {
  const { userId } = req.params;
  const { productId } = req.body;
  const client = await MongoClient.connect(
    'mongodb://0.0.0.0:27017',
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
  const db = client.db('vue-db');
  await db.collection('users').updateOne({ id: userId }, {
    $addToSet: { cartItems: productId },
  });
  const user = await db.collection('users').findOne({ id: userId });
  const products = await db.collection('products').find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map(id =>
    products.find(product => product.id === id));
  res.status(200).json(cartItems);
  client.close();
});

app.delete('/api/users/:userId/cart/:productId', async (req, res) => {
  const { userId, productId } = req.params;
  const client = await MongoClient.connect(
    'mongodb://0.0.0.0:27017',
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
  const db = client.db('vue-db');

  await db.collection('users').updateOne({ id: userId }, {
    $pull: { cartItems: productId },
  });
  const user = await db.collection('users').findOne({ id: userId });
  const products = await db.collection('products').find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map(id =>
    products.find(product => product.id === id));

  res.status(200).json(cartItems);
  client.close();
});


app.listen(8000, () => {
    console.log('Server is listening on port 8000');
})