require('dotenv').config({path: './config.env'});
const mongoose = require('mongoose');
const fs = require('fs');
const Tour = require('../../models/tourModel');
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB,{
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then( con =>{
  //console.log(con.connections);
  console.log('DB connection successful');
});

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

const importData = async () =>{
    try{
        await Tour.create(tours);
        console.log('succesfully created');
        process.exit();
    }catch(err){
        console.log('Error', err);
    }
}

const deleteData = async () =>{
    try{
        const tours =  await Tour.deleteMany();
        console.log('succesfully Deleted');
        process.exit();
    }catch(err){
        console.log('Error', err);
    }
}

if(process.argv[2]=== '--import'){
    importData();
}else if(process.argv[2] === '--delete'){
    deleteData();
}