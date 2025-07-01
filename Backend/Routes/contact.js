const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

// Save Contact Form
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (error) {
    res.status(500).send("Error saving contact");
  }
});

// Get All Contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).send(contacts);
  } catch (error) {
    res.status(500).send("Error fetching contacts");
  }
});

module.exports = router;
