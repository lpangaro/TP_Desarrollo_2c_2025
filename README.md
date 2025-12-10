# [WEB](https://serene-rugelach-b81bf2.netlify.app) 

📘 *Este documento resume las principales características técnicas del proyecto, priorizando seguridad, mantenibilidad y escalabilidad.*


Este repositorio es la base para el Trabajo Práctico de la materia **Desarrollo de Software (DDS)** de la carrera **Ingeniería en Sistemas de Información** de la **UTN FRBA**. Se trata de un **monorepo** que integra una aplicación frontend con Create React App y un backend con Express, facilitando el desarrollo y la gestión de ambos proyectos en un único entorno.

## 📦 Estructura del Proyecto

El monorepo está organizado de la siguiente manera:

```
.
├── packages/
│   ├── backend/        # Servidor Express.js
│   └── frontend/       # Aplicación React (Create React App)
├── package.json        # Configuración del monorepo (root)
├── README.md           # Este archivo
└── .env.example        # Ejemplo de configuración de variables de entorno
```

## ⚙️ Paquetes

Este monorepo utiliza **`npm workspaces`** para gestionar los diferentes paquetes.

### Backend (`packages/backend`)

El backend está construido con Express.js y utiliza las siguientes dependencias:

- **`express`**: El framework web para Node.js, utilizado para construir la API.
- **`cors`**: Middleware para Express que habilita Cross-Origin Resource Sharing (CORS), necesario para permitir que el frontend acceda al backend desde un origen diferente.
- **`dotenv`**: Carga variables de entorno desde un archivo `.env` en `process.env`. Es crucial para configurar el puerto del servidor y los orígenes permitidos.

La idea es dar lo mínimo para levantar el servidor, y que durante el desarrollo del TP se vayan agregando las dependencias necesarias.

### Frontend (`packages/frontend`)

El frontend es una aplicación de React generada con Create React App.


## 🚀 Resumen de Deployment (Producción)

Para el despliegue real de este proyecto se utilizó la siguiente arquitectura:

| Entorno         | Backend                | Frontend                | Base de datos      |
|-----------------|------------------------|-------------------------|--------------------|
| **Local**       | Docker Compose         | Docker Compose          | Docker Compose     |
| **Producción**  | Render (Dockerfile)    | Netlify (build estático)| MongoDB Atlas      |

**Guía completa y paso a paso:** ver [`DOCKER_DEPLOYMENT.md`](./DOCKER_DEPLOYMENT.md)

### Variables de entorno (ejemplo)

**Render (backend):**
```
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/tienda_db?retryWrites=true&w=majority
JWT_SECRET=<tu_secreto>
NODE_ENV=production
ALLOWED_ORIGINS=https://<tu-frontend-netlify>.netlify.app,http://localhost:3001
```

**Netlify (frontend):**
```
REACT_APP_API_URL=https://<tu-backend-render>.onrender.com
CI=false
```

### Flujo de deploy real

1. **Backend:** Deploy en Render usando Dockerfile, variables de entorno y conexión a MongoDB Atlas.
2. **Frontend:** Deploy en Netlify, build estático, variable `REACT_APP_API_URL` apuntando al backend de Render.
3. **Base de datos:** MongoDB Atlas, con migración de datos desde local usando `mongodump` y `mongorestore`.
4. **CORS:** Configurado en backend para aceptar tanto Netlify como localhost.
5. **Troubleshooting:** Ver sección dedicada en `DOCKER_DEPLOYMENT.md` para errores comunes (CORS, conexión, build, suspensión Render Free, etc).

---

## 🚀 Inicio Rápido

Seguí estos pasos para poner en marcha el proyecto:

### 1\. Instalación de Dependencias

Desde la raíz del monorepo, ejecutá:

```bash
npm install
```

Esto instalará todas las dependencias para la raíz y para los paquetes `frontend` y `backend`.

### 2\. Configuración de Variables de Entorno

Crea un archivo `.env` en el directorio `packages/backend`. Puedes usar el archivo `.env.example` como plantilla.

```
# packages/backend/.env
ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
SERVER_PORT=3000
```

- **`ALLOWED_ORIGINS`**: Define los orígenes permitidos para las solicitudes CORS. Asegurate de incluir la URL donde se ejecuta tu frontend (por defecto, `http://localhost:3000` para Create React App). Cuando se haga el despliegue en nube acá se deberá incluir la URL donde se desplegó el frontend.
- **`SERVER_PORT`**: El puerto en el que se ejecutará el servidor backend (ej. `8000`).

### 3\. Ejecución de la Aplicación

Podés iniciar el frontend y el backend por separado o ambos a la vez:

#### Ejecutar el Backend

```bash
npm run start:backend
```

Para el desarrollo con reinicio automático:

```bash
npm run dev:backend
```

#### Ejecutar el Frontend

```bash
npm run start:frontend
```

#### Ejecutar Ambos (Desarrollo)

Para iniciar el backend en modo `dev` y el frontend simultáneamente, usá:

```bash
npm run start:dev
```
