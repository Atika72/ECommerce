const express = require("express")
const router = express.Router()
const ProductsController = require("../controllers/ProductsController")

router.post('/productList',ProductsController.CreateProduct);
router.get('/showProduct',ProductsController.ShowProduct);
router.get('/priceRange',ProductsController.priceRange);
router.get('/productDetails/:id',ProductsController.showDetails);

module.exports = router