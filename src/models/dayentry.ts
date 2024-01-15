import mongoose from 'mongoose';
const { Schema } = mongoose;

const dayEntry = new Schema({
  id: Number,
  userId: Number,
  name: String,
  pulses: [Number],
}, {_id: false});

