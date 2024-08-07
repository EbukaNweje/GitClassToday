const express = require("express");

const app = express();

app.use(express.json());

const Port = process.env.PORT || 5050
app.listen(Port,()=>{
    console.log(`server is listening to PORT: ${Port}.`)
});
