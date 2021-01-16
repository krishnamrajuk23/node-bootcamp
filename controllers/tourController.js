const fs = require('fs');
const Tour = require('./../models/tourModel');

exports.getAllTours = async(req, res) => {
  try{
    const quary = {...req.quary};
    console.log(quary);
    
    const tour = await Tour.find();
    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: tour.length,
      data: {
        tour
      }
    });
  }catch(err){
    res.status(404).json({
      status: 'File not found'
    });
  }
};

exports.getTour = async (req, res) => {
  try{
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  }catch(err){
    res.status(404).json({
      status: 'File not found'
    });
  }
};

exports.createTour = async (req, res) => {
  // const newTour = new Tour({});
  // newTour.save();
  try{
    const newTour = await Tour.create(req.body);
    res.status(200).json({
      status:'success',
      data:{
        tour: newTour
      }
    })
  }catch(err){
    res.status(400).json({
      status: 'failed',
      message: err
    })
  }
};

exports.updateTour = async(req, res) => {
  try{
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  }catch(err){
    res.status(404).json({
      status: 'File not found'
    });
  }
};

exports.deleteTour = async(req, res) => {
  try{
    const tour = await Tour.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      message: "successfully delete"
    });
  }catch(err){
    res.status(404).json({
      status: 'File not found with the id'
    });
  }
};
