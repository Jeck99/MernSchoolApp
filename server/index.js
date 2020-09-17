const express = require('express');
const bodyParser=require('body-parser')
const cors = require('cors')
const db = require('./db/index')
const studentRoute = require('./routes/student-route')
db.on('error', console.error.
bind(console, 'MongoDB connection error:'))

const app = express()
const port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.use('/api', studentRoute)

app.listen(port,()=>console.log("server runnig on port: ", port))