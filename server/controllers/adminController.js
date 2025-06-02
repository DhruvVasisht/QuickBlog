import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) { 
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};  
