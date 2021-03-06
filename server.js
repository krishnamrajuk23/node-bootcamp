require('dotenv').config({path: './config.env'});
const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
//const DB = process.env.DATABASE_LOCAL;
mongoose.connect(DB,{
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then( con =>{
  //console.log(con.connections);
  console.log('DB connection successful');
}).catch(err =>{
  console.log('Connection Failed', err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
