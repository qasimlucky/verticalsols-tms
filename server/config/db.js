const mongoose = require('mongoose');
const express = require('express');
const app = express()
if (process.env.NODE_ENV !== 'production') require('dotenv').config();


const connectDB = async () => {
  try {
    await mongoose.connect(
        process.env.MONGOLAB_URL,
      { useNewUrlParser: true }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.log('MongoDB is not Connected...');
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
