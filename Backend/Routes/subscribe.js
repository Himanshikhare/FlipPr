const express = require("express");
const Subscriber = require("../models/Subscriber");
const router = express.Router();

// Save Subscription
router.post("/", async (req, res) => {
  try {
    const subscriber = new Subscriber(req.body);
    await subscriber.save();
    res.status(201).send(subscriber);
  } catch (error) {
    res.status(500).send("Error saving subscription");
  }
});

// Get All Subscribers
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(500).send("Error fetching subscribers");
  }
});

module.exports = router;
