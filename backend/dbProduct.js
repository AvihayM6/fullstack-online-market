const mongoose = require('mongoose')

const todoSchema = mongoose.Schema(
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

module.exports = mongoose.model('todos', todoSchema)