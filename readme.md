# Node.js Fundamentals 🚀

This repository contains practical examples of how to work with streams, routes, and a simple database in Node.js. The goal is to provide a solid foundation for understanding the fundamental concepts of Node.js.

![Node.js](https://img.shields.io/badge/Node.js-16.x-brightgreen) ![License](https://img.shields.io/badge/license-ISC-blue) ![Contributions](https://img.shields.io/badge/contributions-welcome-orange)

## Project Structure 📂

```
01_fundamentos_nodejs/
│
├── src/
│   ├── database.js          # Implementation of a simple database
│   ├── db.json              # JSON file that stores the database data
│   ├── middlewares/
│   │   └── json.js          # Middleware for parsing JSON
│   ├── routes.js            # API route definitions
│   ├── server.js            # HTTP server
│   └── utils/
│       ├── build-route-path.js  # Function to build routes
│       └── extract-query-params.js # Function to extract query parameters
│
├── streams/
│   ├── buffer.js            # Example of using Buffer
│   ├── fake-upload-to-http-stream.js # Example of uploading a stream to an HTTP server
│   ├── fundamentals.js       # Stream example: reading, transforming, and writing
│   └── stream-http-server.js  # HTTP server that handles streams
│
├── package.json              # Project configuration
└── README.md                 # This file
```

## Installation ⚙️

To install the project dependencies, run:

```bash
npm install
```

## Running the Project ▶️

To start the server, use the following command:

```bash
npm run dev
```

The server will be available at [http://localhost:3333](http://localhost:3333).

## Features ✨

### API Routes 🌐

- `GET /users`: Returns all users or filters by name or email.
- `POST /users`: Adds a new user.
- `DELETE /users/:id`: Removes a user by ID.
- `PUT /users/:id`: Updates a user's data by ID.

### Streams 🔄

The project contains examples of stream manipulation:

- **OneToHundredStream**: A stream that generates numbers from 1 to 100.
- **InverseNumberStream**: A stream that transforms numbers into their inverses.
- **MultiplyByTenStream**: A stream that multiplies numbers by 10 and prints them to the console.

### Middleware 🛠️

- `json.js`: Middleware responsible for parsing the request body as JSON, making it easier to handle the received data.

## Usage Example 🎯

To test the stream upload functionality, run the `fake-upload-to-http-stream.js` file, which sends a stream of numbers to the server.

## Contribution 🤝

Feel free to contribute with improvements or fixes. To do so, fork the repository and submit a pull request.

## License 📜

This project is licensed under the ISC License. See the LICENSE file for more details.
