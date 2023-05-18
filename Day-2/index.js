const express = require('express');
const prdoct = require('./router/prdoct');
const app = express();
app.use(express.json())
app.use('/product',prdoct)

app.listen(3200,()=>{
    console.log("port started");
})