const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')


// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser())
const connectDB = require('./config/db');

// Load Config
dotenv.config({path: './config/config.env'})

connectDB();

// Routes

//Admin
app.use('/admin', require('./routes/adminRoute'));

//Employee
app.use('/employee',require('./routes/employeeRoute'));

//Employer
app.use('/employer',require('./routes/employerRoute'));

//Resume
app.use('/resume',require('./routes/resumeRoute'));

//Job
app.use('/job',require('./routes/jobRoute'));

app.listen(2002);



