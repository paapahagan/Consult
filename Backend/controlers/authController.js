import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password validation regex: Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const authController = {
  // Register User
  register: async (req, res) => {
    try {
      const { firstName, lastName, email, password, ConfirmPassword } =
        req.body;
      // Validate input fields
      if (!firstName || !lastName || !email || !password || !ConfirmPassword) {
        return res
          .status(400)
          .json({ msg: "Please fill in all required fields" });
      }
      if (!emailRegex.test(email)) {
        return res
          .status(400)
          .json({ msg: "Please enter a valid email address" });
      }
      if (!passwordRegex.test(password)) {
        return res.status(400).json({
          msg: "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character",
        });
      }
      if (password.length < 8) {
        return res
          .status(400)
          .json({ msg: "Password must be at least 8 characters long" });
      }
      if (password !== ConfirmPassword) {
        return res.status(400).json({ msg: "Passwords do not match" });
      }
      // Check if user already exists
      const existUser = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
      });
      if (existUser) {
        return res.status(400).json({ msg: "User already exists" });
      }
      //i'll explain this hashing with bcryptjs
      // Hash password

      const saltRounds = 10;
      const hashedPassword = await bcryptjs.hash(password, saltRounds);

      // Create new user
      const newUser = await prisma.user.create({
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email.toLowerCase(),
          password: hashedPassword,
        },
      });

      // Generate JWT token
      const token = jwt.sign(
        { id: newUser.id, email: newUser.email },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
      return res.status(201).json({
        success: true,
        message: "User registered successfully",
        token,
        user: {
          id: newUser.id,
          email: newUser.email,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
        },
      });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ success: false, msg: "Server error" });
    }
  }, // <-- Add this closing brace and comma to end the register method

  // Login function (enhanced)
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Validate input
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Email and password are required",
        });
      }

      // Find user by email (case insensitive)
      const user = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
      });

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      // Verify password
      const validPassword = await bcryptjs.compare(password, user.password);

      if (!validPassword) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      res.json({
        success: true,
        message: "Login successful",
        token,
        user: {
          id: user.id,
          email: user.email,
          // firstName: user.firstName,
          // lastName: user.lastName,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },
};
