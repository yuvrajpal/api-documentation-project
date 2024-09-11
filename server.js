const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swaggerConfig");

const userRoutes = require("./routes/userRoutes");

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
