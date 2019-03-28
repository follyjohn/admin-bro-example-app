const mongoose = require('mongoose')

const { Schema } = mongoose

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: Date,
  owner: String,
  nested: {
    field: String,
  },
})

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category
