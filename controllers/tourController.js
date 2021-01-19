const fs = require('fs');
const Tour = require('./../models/tourModel');

exports.aliasTopTours = (req, res) =>{
  req.query.limit = 5;
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,ratingsAverage,price,summary,diffculty';
  next();
}

exports.getAllTours = async(req, res) => {
  try{
    const query = {...req.query};
    console.log(query);

    //2) sorting
    if(req.query.sort){
      const sort = req.query.sort.split(',').join(' ');
      query = query.sort(sort);
    }else{
      query = query.sort('-createdAt');
    }

    //3) fields limitation
    if(req.query.fields){
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    }

    //4) pagination
    if(req.query.page){
      const numberPage = await Tour.countDocuments();
      const page = req.query.page * 1 || 1;
      const limit = req.query.limit * 1 || 10;
      const skip = (page - 1)* limit;
      // page numbers is greater then existing document in db then throw error
      if(skip > numberPage) throw new Error("Page does not exist"); 
     
      query = query.skip(skip).limit(limit);
    }

    //Execution query
    const tour = await Tour.find(query);
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
