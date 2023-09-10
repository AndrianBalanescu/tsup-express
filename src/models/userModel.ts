import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'A user must have an email']
  },
  password: {
    type: String,
    required: [true, 'A user must have a password']
  }
});

const User = mongoose.model('User', userSchema);

export default User;