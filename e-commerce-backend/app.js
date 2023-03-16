console.log("============= iShop E-Commerce Backend ===========");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 8080;
const MONGO_CONNECTION_STRING =
  "mongodb+srv://Sodgerel:JfA7fHMQlxhrap5m@test.jed1udq.mongodb.net/ishop";

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(console.log("Database successfully connected"))
    .catch((error) => console.log(error));
  console.log(`iShop running on http://localhost:${PORT}`);
});
