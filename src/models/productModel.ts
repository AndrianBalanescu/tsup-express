import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a name'],
    unique: true
  },
  price: {
    type: Number,
    required: [true, 'A product must have a price']
  }
});

const Product = mongoose.model('Product', productSchema);

export default Product;