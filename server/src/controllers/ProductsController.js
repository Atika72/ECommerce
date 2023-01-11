const ProductsModel = require('../models/ProductsModel');
const mongoose = require("mongoose")

//CREATE PRODUCT
const CreateProduct = async (req,res)=>{
    try {
        let productbody = req.body;
        ProductsModel.create(productbody,(err,data)=>{
            if(err){
                res.status(400).json(err.toString())
            }
            else{
                res.status(200).json(data)
            }
        })

    } catch (err) {
        res.status(400).json(err.toString())
    }
}

//SHOW ALL DATA FROM DB
const ShowProduct = async(req,res)=>{
    const showAllProduct = await ProductsModel.find({})
    if(showAllProduct.length>0){
        res.status(200).json(showAllProduct)
    }
    else{
        res.status(400).json("No Product Found!")
    }
}



//SHOW LOW TO HIGH PRICE PRODUCT 
const priceRange = async (req,res)=>{
    let lowToHighData = req.query.price-1;
    const productPrice = await ProductsModel.aggregate([
        {
            $match:
              { $expr:
                { $gt: [ { $getField: "price" }, lowToHighData ] }
              }
            },
            {$sort:{price:1}}
    ])
    if(productPrice.length>0){
        res.status(200).json(productPrice)
    }
    else{
        res.status(400).json("No Product Found!")
    }
}

//SHOW DETAILS OF A PRODUCT
const showDetails = async (req,res)=>{
    let pDetails = req.params.id
    await ProductsModel.aggregate([
        {$match:
            
                {"_id":mongoose.Types.ObjectId(pDetails)}
        },
    ],
        (err,data)=>{
            if(err){
                res.status(400).json(err.toString())
            }
            else{
                res.status(200).json(data)
            }
        }
    )
}



module.exports = {CreateProduct,ShowProduct,priceRange,showDetails}