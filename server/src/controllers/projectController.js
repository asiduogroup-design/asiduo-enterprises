import Project from "../models/Project.js";

export const listProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    return res.json(projects);
  } catch (err) {
    return next(err);
  }
};

export const createProject = async (req, res, next) => {
  try {
    const { title, client, location, value, tags } = req.body;
    if (!title || !client || !location || !value) {
      return res.status(400).json({ message: "Missing required fields." });
    }
    const project = await Project.create({ title, client, location, value, tags: tags || [] });
    return res.status(201).json(project);
  } catch (err) {
    return next(err);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Project.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: "Project not found." });
    }
    return res.json(updated);
  } catch (err) {
    return next(err);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Project not found." });
    }
    return res.json({ message: "Deleted." });
  } catch (err) {
    return next(err);
  }
};
