const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name:{
      type: String,
      required: [true, 'Name should be mention'],
      unique: true
    },
    rating:{
      type: Number,
      default: 4.5
    },
    price:Number
  });
  
  const Tour = mongoose.model('Tour',tourSchema);

  module.exports = Tour;