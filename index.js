const fs = require('fs');

const express = require('express');
const app = express();

//middle ware code
app.use(express.json());
app.use((req,res,next) =>{
    console.log("Hello middleware is called");
    next();
})
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
  });
//middle ware code  

app.get("/", (req,res)=>{
    res.send({message:"Hello world request at ", time:  req.requestTime});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});