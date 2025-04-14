const express = require('express');
const Product = require("../models/Products");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();
// get all products (Admin Only);

router.get("/", protect, admin, async (req,res)=>{
    try{
        const products = await Product.find({});
        console.log(products);
        res.json(products);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
})

router.post("/addproduct", protect, admin, async (req,res)=>{
    try{
        const {} = req.body;
        
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
})

module.exports = router