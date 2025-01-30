import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import connectDB from "../src/config/database.js";

const app = express();
app.use(express.json());

connectDB(); //database Connection

// Storage for profile pictures
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "./uploads");
  },
  filename: (_, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String, default: "default.jpg" },
  address: String,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
  try {
    const { username, email, password, address } = req.body;
    const user = new User({ username, email, password, address });
    await user.save();
    res.status(201).send("User registered");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error("Invalid credentials");
    }
    const token = jwt.sign({ userId: user._id }, "secret", { expiresIn: "1h" });
    res.send({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/profile", async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "secret");
    const user = await User.findById(decoded.userId);
    res.send(user);
  } catch (error) {
    res.status(401).send(`Please authenticate: ${error.message}`);
  }
});

app.post(
  "/profile/upload",
  upload.single("profilePicture"),
  async (req, res) => {
    try {
      const token = req.header("Authorization").replace("Bearer ", "");
      const decoded = jwt.verify(token, "secret");
      const user = await User.findById(decoded.userId);
      user.profilePicture = req.file.filename;
      await user.save();
      res.send("Profile picture updated");
    } catch (error) {
      res.status(401).send(`Please authenticate:${error.message}`);
    }
  }
);

app.listen(4008, () => {
  console.log("Server is running on port 4008");
});
