import express from "express";
import Enquiry from "../models/Enquiry.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, async (req, res, next) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
    next(err);
  }
});

export default router;
