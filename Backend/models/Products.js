const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        trim:true,
    },
    description:{
        type:String,
        required: true,
    },
    category:{
        type:String,
        required: true,
        trim:true,
    },
    url:{
        type: String,
        require:true
    },
    price: {
        type:Number,
        required: true,
    },
   quantity:{
    type:Number,
    required: true,
    default:0
   }

},
{ timestamps: true }
);

module.exports = mongoose.model("Product",productSchema);
