// swaggerConfig.js
const swaggerJsdoc = require("swagger-jsdoc");

// Define options for the Swagger docs
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API",
      version: "1.0.0",
      description: "API documentation for the User API",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to the API files
};

// Create the Swagger specification
const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
