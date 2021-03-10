const mongoose = require('mongoose');

const { Schema } = mongoose;

const SubscriptionSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
      unique: true,
      trim: true,
      lowercase: true,
      required: true
    }
  },
  {
    timestamps: true
  }
);

SubscriptionSchema.index({ email: 'text' }, { weights: { email: 2 } });

module.exports = mongoose.model('Subscription', SubscriptionSchema);
