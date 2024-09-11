# API Documentation

## Overview

This API provides endpoints to manage users. You can create, read, update, and delete user records.

## Base URL

The base URL for all endpoints is: `http://localhost:3000/api`

## Endpoints

### Create User

- **Endpoint**: `POST /api/users`
- **Description**: Create a new user.
- **Response**:
  - **Status Code**: `201 Created`
  - **Body**:
    ```json
    {
      "id": "integer",
      "username": "string",
      "email": "string"
    }
    ```
- **Error Responses**:
  - **Status Code**: `400 Bad Request`
  - **Body**:
    ```json
    {
      "message": "Username and email are required"
    }
    ```

### Get All Users

- **Endpoint**: `GET /api/users`
- **Description**: Retrieve a list of all users.
- **Response**:
  - **Status Code**: `200 OK`
  - **Body**:
    ```json
    [
      {
        "id": "integer",
        "username": "string",
        "email": "string"
      }
    ]
    ```

### Get User by ID

- **Endpoint**: `GET /api/users/:id`
- **Description**: Retrieve a user by their ID.
- **Response**:
  - **Status Code**: `200 OK`
  - **Body**:
    ```json
    {
      "id": "integer",
      "username": "string",
      "email": "string"
    }
    ```
- **Error Responses**:
  - **Status Code**: `404 Not Found`
  - **Body**:
    ```json
    {
      "message": "User not found"
    }
    ```

### Update User by ID

- **Endpoint**: `PUT /api/users/:id`
- **Description**: Update a user by their ID.
- **Request Body**:
  ```json
  {
    "username": "string",
    "email": "string"
  }
  ```
- **Response**:
  - **Status Code**: `200 OK`
  - **Body**:
    ```json
    {
      "id": "integer",
      "username": "string",
      "email": "string"
    }
    ```
- **Error Responses**:
  - **Status Code**: `404 Not Found`
  - **Body**:
    ```json
    {
      "message": "User not found"
    }
    ```

### Delete User by ID

- **Endpoint**: `DELETE  /api/users/:id`
- **Description**: Delete a user by their ID.
- **Response**:
  - **Status Code**: `204 No Content`
  - **Body**:
    ```json
    {
      "id": "integer",
      "username": "string",
      "email": "string"
    }
    ```
- **Error Responses**:
  - **Status Code**: `404 Not Found`
  - **Body**:
    ```json
    {
      "message": "User not found"
    }
    ```

## Example Requests

### Create User Example

```bash
  curl -X POST http://localhost:3000/api/users \
      -H "Content-Type: application/json" \
      -d '{"username": "newuser", "email": "newuser@example.com"}'
```

### Get All Users Example

```bash
  curl -X GET http://localhost:3000/api/users
```

## Error Handling

- 400 Bad Request: Typically occurs due to missing or invalid input data.
- 404 Not Found: The requested resource could not be found.
- 500 Internal Server Error: An unexpected error occurred on the server.

## Setup and Installation

1. Clone the Repository

```bash
  git clone https://github.com/yuvrajpal/api-documentation-project.git
  cd api-documentation-project
```

2. Install Dependencies

```bash
  npm install
```

3. Create a .env File

```env
  PORT=3000
```

4. Start the Application

```bash
  npm start
```
