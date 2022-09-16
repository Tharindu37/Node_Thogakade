const express = require('express');
const  mongoose = require('mongoose');

const port = 3000;

const app = express();

app.listen(port,()=>{
    console.log(`Thogakade service up and running on port number ${port}`);
})

app.get("/test", (req, resp)=>{
    resp.send({'status':'Success!'})
})