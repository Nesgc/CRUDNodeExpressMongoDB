const express = require('express')
const mongoose = require('mongoose')
const app = express()



app.get('/', (req, res)=>{
    res.send("hello from node apis");
});

mongoose.connect("mongodb+srv://nesgc:1fPBCHuA1MEPsZAt@backenddb.ex3qwzv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backenddb")
.then(()=>{
    console.log("Connected to database");
    app.listen(3000, () =>{
        console.log('server running on port 3000');
    });
})
.catch(()=>{
    console.log("Conn failed");
});
