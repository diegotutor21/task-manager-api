const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const protect = async (req, res, next) => {
  try {
    // 1. Verificar que venga el token en los headers
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No autorizado, token faltante" });
    }

    // 2. Extraer el token (viene como "Bearer eltoken123...")
    const token = authHeader.split(" ")[1];

    // 3. Verificar que el token sea válido
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Buscar el usuario en la base de datos y adjuntarlo al request
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    // 5. Pasar al siguiente paso (el controlador)
    next();
  } catch (error) {
    res.status(401).json({ message: "Token inválido o expirado" });
  }
};

module.exports = { protect };
