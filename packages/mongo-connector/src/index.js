/**
 * @fileoverview This module provides a function to establish a connection to a MongoDB database.
 * @requires mongoose
 * @author Your Name <your.email@example.com>
 *
 * @setup
 * 1. Install the package in your project:
 *    ```bash
 *    npm install @monorepo/mongo-connection
 *    ```
 *
 * 2. Import and call the `mongooseConnection` function in your project's entry file (e.g., `server.js` inside loader):
 *    ```javascript
 *    import { Connection } from "@sdrauth/mongo-connector";;
 *
 *    mongooseConnection();
 *    ```
 *
 * 3. Configure the MongoDB connection by setting the following environment variables (optional):
 *    - `MONGO_URL`: The MongoDB connection URL (default: `mongodb://localhost:27017`)
 *    - `MONGO_PORT`: The MongoDB port (default: `27017`)
 *    - `MONGO_DB_NAME`: The name of the MongoDB database (default: `'your-db-name'`)
 *
 *    Example:
 *    ```bash
 *    MONGO_URL=mongodb://your-mongodb-host:27017 \
 *    MONGO_PORT=27017 \
 *    MONGO_DB_NAME=my-custom-db-name \
 *    node server.js
 *    ```
 *
 * If the environment variables are not set, the default values will be used.
 */
const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017";
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || "test-mongo-db";

const Connection = async () => {
  try {
    await mongoose.connect(`${MONGO_URL}:${MONGO_PORT}/${MONGO_DB_NAME}`, {
      useUnifiedTopology: true,
    });
    console.log("\x1b[42m%s\x1b[0m", "MONGO CONNECTED SUCCESSFULLY!");
    console.log(`${MONGO_URL}:${MONGO_PORT}/${MONGO_DB_NAME}`);
  } catch (err) {
    console.log(
      "\x1b[41m%s\x1b[0m",
      "FAILED TO ESTABLISH MONGO CONNECTION!",
      err
    );
  }
};

module.exports = { Connection };
