const mongoose = require('mongoose')
const Products = require('../dbProduct')

//Get todos list
const getProducts = async (req,res) => {
  try {
    const allProducts = await Products.find({}).sort({createdAt: -1})
    res.status(200).send(allProducts)
  }
  catch (err) {
    res.status(400).send(err.message)
  }
}

//Add todo to the list
const createProduct = async (req,res) => {
  const dbProduct = req.body
  try {
    const newProduct = await Products.create({
      _id: new mongoose.Types.ObjectId(), // Generate a unique ObjectId for _id
      productName: dbProduct.productName,
      category: dbProduct.category,
      /* TODO: need to look if I'll need it */
      /* myId: dbProduct.myId, // Provide the value for the myId field */
    })
    res.status(201).send(newProduct)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
}

//delete one todo from the list
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

/* //delete all todos list
const deleteAllTodos = async (req,res) => {
  try {
    const deleteAllTodos = await Todos.deleteMany({})
    res.status(200).send(deleteAllTodos)
  }
  catch (err) {
    res.status(400).send(err.message)
  }
} */



module.exports = {getProducts, createProduct, deleteProduct}