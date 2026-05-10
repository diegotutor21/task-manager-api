const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

router.use(protect);

// Rutas anidadas bajo un proyecto
router.get("/project/:projectId", getTasks);
router.post("/project/:projectId", createTask);

// Rutas por tarea individual
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
