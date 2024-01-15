import mongoose from 'mongoose';
const { Schema } = mongoose;

const pulse = new Schema({
  id: Number,
  userId: Number,
  name: String,
  color: String,
}, {_id: false});