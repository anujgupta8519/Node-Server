const express = require('express');
let { Product } = require('../model/Product');
const router = express.Router();
router.use(express.json())

router.post('/add',(req,res)=>{
    Product.push(req.body)
    res.send("done")
})

router.get('/',(req,res)=>{
    res.json(Product);
})
router.delete('/:productId',(req,res)=>{
    Product= Product.filter(item =>{
        item.productId !== req.params.productId;
    }
    )
    res.send("done")
    
});
router.put('/:productId',(req,res)=>{
  const item =Product.find(item =>{
         return item.productId === req.params.productId;
    })
    Product = Product.filter(item =>{
        item.productId !== req.params.productId;
    })
    Product.push(req.body)
    res.send("done")
})
module.exports=router;
