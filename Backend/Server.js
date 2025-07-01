const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const sharp = require("sharp");
const mongoose = require("mongoose");
require("dotenv").config();

// Models
const Project = require("./models/Project");
const Client = require("./models/Client");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads")); // Serve static files

// Multer Setup for File Uploads
const upload = multer({ dest: "uploads/" });

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes

// Add Project
app.post("/api/projects", upload.single("image"), async (req, res) => {
  const { name, description } = req.body;
  const image = req.file;

  if (!name || !description || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const croppedImagePath = `uploads/cropped-${image.filename}`;
    await sharp(image.path).resize(450, 350).toFile(croppedImagePath);

    const project = new Project({
      name,
      description,
      image: croppedImagePath,
    });
    await project.save();

    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: "Error adding project", error: err.message });
  }
});

// Update Project
app.put("/api/projects/:id", upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const image = req.file;

  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.name = name || project.name;
    project.description = description || project.description;

    if (image) {
      const croppedImagePath = `uploads/cropped-${image.filename}`;
      await sharp(image.path).resize(450, 350).toFile(croppedImagePath);
      project.image = croppedImagePath;
    }

    await project.save();
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ message: "Error updating project", error: err.message });
  }
});

// Delete Project
app.delete("/api/projects/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting project", error: err.message });
  }
});

// Add Client
app.post("/api/clients", upload.single("image"), async (req, res) => {
  const { name, designation, description } = req.body;
  const image = req.file;

  if (!name || !designation || !description || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const client = new Client({
      name,
      designation,
      description,
      image: image.path,
    });
    await client.save();

    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ message: "Error adding client", error: err.message });
  }
});

// Update Client
app.put("/api/clients/:id", upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const { name, designation, description } = req.body;
  const image = req.file;

  try {
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    client.name = name || client.name;
    client.designation = designation || client.designation;
    client.description = description || client.description;

    if (image) {
      client.image = image.path;
    }

    await client.save();
    res.status(200).json(client);
  } catch (err) {
    res.status(500).json({ message: "Error updating client", error: err.message });
  }
});

// Delete Client
app.delete("/api/clients/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const client = await Client.findByIdAndDelete(id);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json({ message: "Client deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting client", error: err.message });
  }
});

// Get Contacts (Mock Data for Now)
app.get("/api/contacts", (req, res) => {
  res.status(200).json([
    { id: 1, name: "John Doe", email: "john@example.com", mobile: "1234567890", city: "New York" },
  ]);
});

// Get Subscribers (Mock Data for Now)
app.get("/api/subscribers", (req, res) => {
  res.status(200).json([
    { id: 1, email: "subscriber1@example.com" },
    { id: 2, email: "subscriber2@example.com" },
  ]);
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
