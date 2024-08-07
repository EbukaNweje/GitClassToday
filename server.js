const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const Port = process.env.PORT || 5050
app.listen(Port,()=>{
    console.log(`server is listening to PORT: ${Port}.`)
});





const Uri = process.env.DATABASE_URI;

mongoose.connect(Uri)
.then(()=>{
    console.log(`Database connected successfully.`)
})
.catch((error)=>{
    console.log(`Error connecting to database.`, error)
}); 