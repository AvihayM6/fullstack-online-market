const express = require('express')
const mongoose = require('mongoose')
const Cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const { getProducts, createProduct, deleteProduct } = require('./controllers/productController')

//App configuration
const app = express()
const port = process.env.PORT || 8000
const connectionURL = process.env.MONGO_URI

//convert everithing to JSON
app.use(express.json())
app.use(Cors())

//DB config
mongoose.connect(connectionURL).then(() => {
    app.listen(port, () => { console.log(`Listening to port ${port}`) })
}).catch((err) => {
    console.log(err)
})

app.get('/products', getProducts)
app.post('/products', createProduct)
app.delete('/products/:id', deleteProduct)
// app.delete('/users', deleteAllUsers)