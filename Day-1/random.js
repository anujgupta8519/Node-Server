const express = require('express');

const app = express();
let number =()=>{
     return Math.floor(Math.random()*6)+1 ;
}

app.get('/',(req,res)=>{
//    res.send(random.int((min=1),(max=6)));
   res.send(number().toString())
})
app.listen(3000,()=>{
    console.log("lisen 3000");
})