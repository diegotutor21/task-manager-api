# 📋 Task Manager API

API REST para gestión de proyectos y tareas con autenticación JWT. Permite a los usuarios registrarse, iniciar sesión, crear proyectos y gestionar tareas con prioridades, estados y fechas de vencimiento.

---

## 🚀 Tecnologías

- **Node.js** — Entorno de ejecución
- **Express** — Framework web
- **MongoDB** — Base de datos NoSQL
- **Mongoose** — ODM para MongoDB
- **JWT** — Autenticación con tokens
- **bcryptjs** — Encriptación de contraseñas

---

## ⚙️ Instalación local

1. Cloná el repositorio

```bash
git clone https://github.com/TU_USUARIO/task-manager-api
cd task-manager-api
```

2. Instalá las dependencias

```bash
npm install
```

3. Creá el archivo `.env` en la raíz del proyecto

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=supersecretkey123
```

4. Iniciá el servidor en modo desarrollo

```bash
npm run dev
```

El servidor va a correr en `http://localhost:3000`

---

## 🔐 Autenticación

La API usa **JWT (JSON Web Tokens)**. Para acceder a las rutas protegidas debés incluir el token en el header de cada petición:

```
Authorization: Bearer TU_TOKEN
```

El token se obtiene al registrarse o iniciar sesión y tiene una duración de **7 días**.

---

## 📡 Endpoints

### 🔑 Auth

| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| POST | `/api/auth/register` | Registrar usuario | ❌ |
| POST | `/api/auth/login` | Iniciar sesión | ❌ |

### 📁 Proyectos

| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| GET | `/api/projects` | Obtener todos los proyectos | ✅ |
| GET | `/api/projects/:id` | Obtener un proyecto por ID | ✅ |
| POST | `/api/projects` | Crear un proyecto | ✅ |
| PUT | `/api/projects/:id` | Actualizar un proyecto | ✅ |
| DELETE | `/api/projects/:id` | Eliminar un proyecto | ✅ |

### ✅ Tareas

| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| GET | `/api/tasks/project/:projectId` | Obtener tareas de un proyecto | ✅ |
| GET | `/api/tasks/:id` | Obtener una tarea por ID | ✅ |
| POST | `/api/tasks/project/:projectId` | Crear una tarea | ✅ |
| PUT | `/api/tasks/:id` | Actualizar una tarea | ✅ |
| DELETE | `/api/tasks/:id` | Eliminar una tarea | ✅ |

---

## 📦 Ejemplos de uso

### Registro de usuario

```json
POST /api/auth/register

{
  "name": "Diego",
  "email": "diego@example.com",
  "password": "123456"
}
```

Respuesta:

```json
{
  "message": "Usuario registrado correctamente",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64f1a2b3c4d5e6f7a8b9c0d1",
    "name": "Diego",
    "email": "diego@example.com"
  }
}
```

---

### Login

```json
POST /api/auth/login

{
  "email": "diego@example.com",
  "password": "123456"
}
```

Respuesta:

```json
{
  "message": "Login exitoso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64f1a2b3c4d5e6f7a8b9c0d1",
    "name": "Diego",
    "email": "diego@example.com"
  }
}
```

---

### Crear proyecto

```json
POST /api/projects

{
  "name": "Mi proyecto",
  "description": "Descripción del proyecto"
}
```

Respuesta:

```json
{
  "_id": "64f1a2b3c4d5e6f7a8b9c0d2",
  "name": "Mi proyecto",
  "description": "Descripción del proyecto",
  "status": "activo",
  "owner": "64f1a2b3c4d5e6f7a8b9c0d1",
  "createdAt": "2026-05-09T00:00:00.000Z",
  "updatedAt": "2026-05-09T00:00:00.000Z"
}
```

---

### Crear tarea

```json
POST /api/tasks/project/ID_DEL_PROYECTO

{
  "title": "Diseñar la base de datos",
  "description": "Definir modelos y relaciones",
  "priority": "alta",
  "status": "pendiente",
  "dueDate": "2026-06-01"
}
```

Respuesta:

```json
{
  "_id": "64f1a2b3c4d5e6f7a8b9c0d3",
  "title": "Diseñar la base de datos",
  "description": "Definir modelos y relaciones",
  "status": "pendiente",
  "priority": "alta",
  "dueDate": "2026-06-01T00:00:00.000Z",
  "project": "64f1a2b3c4d5e6f7a8b9c0d2",
  "owner": "64f1a2b3c4d5e6f7a8b9c0d1",
  "createdAt": "2026-05-09T00:00:00.000Z",
  "updatedAt": "2026-05-09T00:00:00.000Z"
}
```

---

### Actualizar tarea

```json
PUT /api/tasks/ID_DE_LA_TAREA

{
  "status": "completada",
  "priority": "baja"
}
```

---

## 📁 Estructura del proyecto

```
task-manager-api/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── project.controller.js
│   │   └── task.controller.js
│   ├── middlewares/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── User.model.js
│   │   ├── Project.model.js
│   │   └── Task.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── project.routes.js
│   │   └── task.routes.js
│   └── app.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

## 🔒 Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `PORT` | Puerto del servidor (default: 3000) |
| `MONGO_URI` | URI de conexión a MongoDB |
| `JWT_SECRET` | Clave secreta para firmar los tokens JWT |

---

## 📊 Modelos

### Usuario
| Campo | Tipo | Requerido |
|-------|------|-----------|
| name | String | ✅ |
| email | String (único) | ✅ |
| password | String (encriptada) | ✅ |

### Proyecto
| Campo | Tipo | Valores |
|-------|------|---------|
| name | String | — |
| description | String | — |
| status | String | `activo` `pausado` `completado` |
| owner | ObjectId (User) | — |

### Tarea
| Campo | Tipo | Valores |
|-------|------|---------|
| title | String | — |
| description | String | — |
| status | String | `pendiente` `en progreso` `completada` |
| priority | String | `baja` `media` `alta` |
| dueDate | Date | — |
| project | ObjectId (Project) | — |
| owner | ObjectId (User) | — |

---

## 🌐 Deploy

API disponible en: **`(URL de Render — próximamente)`**

---

## 👤 Autor

**Diego** — [GitHub](https://github.com/diegotutor21) · [LinkedIn](https://www.linkedin.com/in/diego-tutor/)
