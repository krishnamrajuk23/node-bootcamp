const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({

    name:{
      type: String,
      required: [true, 'Name should be mention'],
      unique: true,
      trim: true
    },
    durations: {
        type: String
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have maxGroupSize']
    },
    description:{
        type: String,
        trim: true,
    },
    difficulty: {
        type: String,
        required: [true, 'A tour must have difficulty']
    },
    ratingsAverage:{
        type: Number,
        default: 4.5
    },
    ratingsQuantity:{
        type: Number,
        default: 4.5
    },
    price:Number,
    summary: {
        type: String,
        trim: true
    },
    imageCover:{
        type: String,
        required: [true, 'A tour must have imagecover']
    },
     images: [String],
     createdAt:{
         type: Date,
         default: Date.now()
     },
     startsDate: [Date]
  });
  
  const Tour = mongoose.model('Tour',tourSchema);

  module.exports = Tour;