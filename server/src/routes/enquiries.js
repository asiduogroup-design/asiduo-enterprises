import express from "express";
import auth from "../middleware/authMiddleware.js";
import { listEnquiries } from "../controllers/enquiryController.js";

const router = express.Router();

router.get("/", auth, listEnquiries);

export default router;
