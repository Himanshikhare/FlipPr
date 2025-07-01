const mongoose = require("mongoose");

const SubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true, // Ensures no duplicate email addresses
    trim: true, // Removes unnecessary whitespace
    lowercase: true, // Converts email to lowercase
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email regex validation
      "Please enter a valid email address",
    ],
  },
  subscribedAt: {
    type: Date,
    default: Date.now, // Automatically sets the date of subscription
  },
});

module.exports = mongoose.model("Subscriber", SubscriberSchema);
