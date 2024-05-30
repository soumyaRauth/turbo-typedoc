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
 * 2. Import and call the `mongooseConnection` function in your project's entry file (e.g., `server.js`):
 *    ```javascript
 *    import mongooseConnection from '@monorepo/mongo-connection';
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
import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'your-db-name';

const mongooseConnection = async () => {
  try {
    console.log("LOGGING HELLO >>>>>>>>>>>>>>>> FROM PACKAGE >>>>>>>>>>>>>>>>..");
    console.log(`${MONGO_URL}:${MONGO_PORT}/${MONGO_DB_NAME}`);
    await mongoose.connect(`${MONGO_URL}:${MONGO_PORT}/${MONGO_DB_NAME}`, {
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..');
  } catch (err) {
    console.error('MongoDB connection error >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>:', err);
  }
};

export default mongooseConnection;