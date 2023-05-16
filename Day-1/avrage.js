const express = require('express');
function avrage(a,b) {
    return (Number(a)+Number(b))/2
}

const app = express();
app.use(express.json())
app.post('/:a/:b',(req,res)=>{
   res.send(avrage(req.params['a'],req.params['b']).toString());
})
app.post('/',(req,res)=>{
    res.send(avrage(req.body.a,req.body.b).toString());
 })
    app.listen(3000,()=>{
        console.log("lisen 3000");
    })