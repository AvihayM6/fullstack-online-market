const mongoose = require('mongoose')
const Products = require('../dbProduct')

//Get product list
const getProducts = async (req,res) => {
  try {
    const allProducts = await Products.find({}).sort({createdAt: -1})
    res.status(200).send(allProducts)
  }
  catch (err) {
    res.status(400).send(err.message)
  }
}

//Add product to the list
const createProduct = async (req,res) => {
  const dbProduct = req.body
  try {
    const newProduct = await Products.create({
      _id: new mongoose.Types.ObjectId(), // Generate a unique ObjectId for _id
      productName: dbProduct.productName,
      category: dbProduct.category,
    })
    res.status(201).send(newProduct)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
}

//delete one product from the list
const deleteProduct = async (req,res) => {
  const id = req.body._id
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`The id: ${id} was not found`)
  }
  try {
    const deleteProduct = await Products.findOneAndDelete({_id: id})
    res.status(201).send(deleteProduct)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = {getProducts, createProduct, deleteProduct}