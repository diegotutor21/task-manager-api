const express = require("express");
const app = express();

// Middlewares globales
app.use(express.json()); // Para leer JSON en las peticiones

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ message: "¡API de Task Manager funcionando! 🚀" });
});

// Rutas (las iremos agregando)
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/projects", require("./routes/project.routes"));
app.use("/api/tasks", require("./routes/task.routes"));

module.exports = app;
