const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('products', productSchema)