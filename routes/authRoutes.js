import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }), 
  (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Authentication failed" });
    }
    
    const token = jwt.sign(
      { 
        id: req.user._id, 
        email: req.user.email, 
        image: req.user.image 
      }, 
      process.env.JWT_SECRET, 
      { expiresIn: "1h" } 
    );

    res.redirect(`http://localhost:3001?token=${token}`);
  }
);

export default router;
