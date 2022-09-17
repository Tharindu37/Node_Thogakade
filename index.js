const express = require('express');
const  mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT;

const CustomerRoute = require('./route/CustomerRoute');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/thogakade').then(()=>{
    app.listen(port,()=>{
        console.log(`Thogakade service up and running on port number ${port}`);
    })
}).catch(error=>{

})

app.use('/api/v1/customer',CustomerRoute);

