const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./Routes/users");
const authRoute = require("./Routes/auth");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/server/users", userRoute);
app.use("/server/auth", authRoute);

// app.get("/", (req, res) => {
//     res.send("Welcome to homepage");
// })

// app.get("/users", (req, res) => {
//     res.send("Welcome to users page");
// })

app.listen(5000, () => {
  console.log("backend server is running on port 5000");
});
