const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    productName:{
        type: String
    },
    productDesc:{
        type: String
    },
    price:{
        type: Number
    },
    quantity:{
        type: Number
    }
})

const ProductsModel = mongoose.model('product',ProductsSchema)
module.exports = ProductsModel;
