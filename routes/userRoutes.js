const express = require("express");
const router = express.Router();

// In-memory user data (for demonstration)
let users = [];

// Create a new user
router.post("/users", (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).json({ message: "Username and email are required" });
  }
  const newUser = { id: users.length + 1, username, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Get all users
router.get("/users", (req, res) => {
  res.json(users);
});

// Get a user by ID
router.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// Update a user by ID
router.put("/users/:id", (req, res) => {
  const { username, email } = req.body;
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1)
    return res.status(404).json({ message: "User not found" });

  users[userIndex] = { id: parseInt(req.params.id), username, email };
  res.json(users[userIndex]);
});

// Delete a user by ID
router.delete("/users/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1)
    return res.status(404).json({ message: "User not found" });

  users.splice(userIndex, 1);
  res.status(204).end();
});

module.exports = router;
