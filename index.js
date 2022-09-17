const express = require('express');
const  mongoose = require('mongoose');

const port = 3000;

const app = express();

mongoose.connect('mongodb://localhost:27017/thogakade').then(()=>{
    app.listen(port,()=>{
        console.log(`Thogakade service up and running on port number ${port}`);
    })
}).catch(error=>{

})



