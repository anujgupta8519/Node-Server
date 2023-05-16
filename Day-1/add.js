const express = require('express');
function add(a,b) {
    return Number(a)+Number(b)
}

const app = express();
app.use(express.json())
app.post('/:a/:b',(req,res)=>{
   res.send(add(req.params['a'],req.params['b']).toString());
})
app.post('/',(req,res)=>{
    res.send(add(req.body.a,req.body.b).toString());
 })
    app.listen(3000,()=>{
        console.log("lisen 3000");
    })