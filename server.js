require('dotenv').config({path: './config.env'});
const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB,{
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then( con =>{
  //console.log(con.connections);
  console.log('DB connection successful');
});

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

const tour = new Tour({
  name: "Singature best places",
  price: 450
})

tour.save().then(doc => console.log(doc)).catch(err => console.log('Error:', err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
