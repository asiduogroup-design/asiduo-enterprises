import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  createProject,
  deleteProject,
  listProjects,
  updateProject,
} from "../controllers/projectController.js";

const router = express.Router();

router.get("/", listProjects);
router.post("/", auth, createProject);
router.put("/:id", auth, updateProject);
router.delete("/:id", auth, deleteProject);

export default router;
