const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");

// Middleware to parse JSON
app.use(express.json());

// Use the user routes
app.use("/api", userRoutes);

// Basic route for testing the server
app.get("/", (req, res) => {
  res.send("API Documentation Project");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
