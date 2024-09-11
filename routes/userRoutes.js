const express = require("express");
const router = express.Router();

// In-memory user data (for demonstration)
let users = [];

// Create a new user
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: 'john_doe'
 *               email:
 *                 type: string
 *                 example: 'john.doe@example.com'
 *     responses:
 *       201:
 *         description: User created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 username:
 *                   type: string
 *                   example: 'john_doe'
 *                 email:
 *                   type: string
 *                   example: 'john.doe@example.com'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Username and email are required'
 */
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
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of all users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   username:
 *                     type: string
 *                     example: 'john_doe'
 *                   email:
 *                     type: string
 *                     example: 'john.doe@example.com'
 */
router.get("/users", (req, res) => {
  res.json(users);
});

// Get a user by ID
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a user by their ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 username:
 *                   type: string
 *                   example: 'john_doe'
 *                 email:
 *                   type: string
 *                   example: 'john.doe@example.com'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'User not found'
 */
router.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// Update a user by ID
/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user by their ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: 'john_doe'
 *               email:
 *                 type: string
 *                 example: 'john.doe@example.com'
 *     responses:
 *       200:
 *         description: User updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 username:
 *                   type: string
 *                   example: 'john_doe'
 *                 email:
 *                   type: string
 *                   example: 'john.doe@example.com'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'User not found'
 */
router.put("/users/:id", (req, res) => {
  const { username, email } = req.body;
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1)
    return res.status(404).json({ message: "User not found" });

  users[userIndex] = { id: parseInt(req.params.id), username, email };
  res.json(users[userIndex]);
});

// Delete a user by ID
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by their ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: User deleted
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'User not found'
 */
router.delete("/users/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1)
    return res.status(404).json({ message: "User not found" });

  users.splice(userIndex, 1);
  res.status(204).end();
});

module.exports = router;
