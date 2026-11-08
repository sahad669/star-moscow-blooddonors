import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Fields are required" });
    }
    const exists = await userModel.findOne({email});
    if (exists) {
      return res.status(400).json({ message: "Email alredy existed" });
    }

    const hashpass = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      name,
      email,
      password: hashpass,
    });
    const token = jwt.sign(
      { _id: newUser._id, name: newUser.name, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d"},
    );
    res.status(201).json({ message: "Registered successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email?.trim() || !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter your email and password.",
      });
    }

    // Find user using normalized email
    const user = await userModel.findOne({
      email: email.trim().toLowerCase(),
    });

    // Email does not exist
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email address not found. Please check your email or register.",
      });
    }

    // Check password
    const verified = await bcrypt.compare(password, user.password);

    if (!verified) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password. Please try again.",
      });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      success: true,
      message: "Welcome back! Login successful.",
      token,
      user: {
        userId: user._id,
        role: user.role,
        email: user.email,
        name: user.name,
      },
    });

  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};
