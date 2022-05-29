const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./Routes/users");
const authRoute = require("./Routes/auth");
const postRoute = require("./Routes/posts");
const conversationRoute = require("./Routes/conversation");
const textMessageRoute = require("./Routes/textMessage");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

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

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });
app.post("/server/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded successfully");
  } catch (err) {
    console.log(err);
  }
});

app.use("/server/users", userRoute);
app.use("/server/auth", authRoute);
app.use("/server/posts", postRoute);
app.use("/server/conversations", conversationRoute);
app.use("/server/textMessages", textMessageRoute);


app.listen(5000, () => {
  console.log("backend server is running on port 5000");
});
