import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter product name'],
  },
  quantity: {
    type: Number,
    required: [true, 'Please enter product quantity'],
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'Please enter product price'],
    default: 0,
  },
  size: {
    type: String,
    required: [true, 'Please enter product size'],
  },
  image: {
    type: String,
    required: [true, 'Please enter product image url'],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model('Product', productSchema, 'products');
export default Product;
