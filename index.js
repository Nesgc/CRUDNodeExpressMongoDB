const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.listen(3000, () =>{
    console.log('server running');
});

app.get('/', (req, res)=>{
    res.send("hello from node apis");
});

mongoose.connect("mongodb+srv://nesgc:<password>@backenddb.ex3qwzv.mongodb.net/?retryWrites=true&w=majority&appName=Backenddb")