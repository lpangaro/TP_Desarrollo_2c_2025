
# 🐳 Guía Rápida - Docker (Modo Local)

> **IMPORTANTE:** Esta guía es solo para correr el proyecto **en tu máquina local** usando Docker Compose. Para desplegar en producción (Render/Netlify), seguí la guía [DOCKER_DEPLOYMENT.md](./DOCKER_DEPLOYMENT.md).


## ⚡ Inicio Rápido (Modo Local)

### 1. Instalar Docker
- Descargar [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Verificar instalación:
```bash
docker --version
docker compose version
```

### 2. Iniciar Aplicación

```bash
# Construir imágenes (primera vez, ~5 minutos)
docker compose build

# Iniciar todos los servicios
docker compose up -d

# Ver logs
docker compose logs -f
```


### 3. Acceder a la Aplicación (Local)

- **Frontend (local)**: http://localhost
- **Backend API (local)**: http://localhost:3000/api
- **Swagger Docs (local)**: http://localhost:3000/api-docs
- **MongoDB (local)**: localhost:27017

---

## 📦 ¿Qué Incluye?

```

┌──────────────────────────────────────────────┐
│  3 Contenedores (Solo para desarrollo local) │
│  Orquestados con Docker Compose              │
│                                              │
│  • MongoDB 7.0       (Puerto 27017)          │
│  • Backend Node.js   (Puerto 3000)           │
│  • Frontend Nginx    (Puerto 80)             │
└──────────────────────────────────────────────┘
```

---


## 🛠️ Comandos Esenciales (Solo Local)


### Usando docker-compose (solo local):

```bash
# Iniciar
docker compose up -d

# Detener
docker compose down

# Ver estado
docker compose ps

# Ver logs
docker compose logs -f [servicio]

# Reiniciar
docker compose restart

# Reconstruir
docker compose build --no-cache
```


### Usando el helper script (Linux/Mac, solo local):

```bash
# Dar permisos de ejecución (primera vez)
chmod +x docker-helper.sh

# Usar comandos
./docker-helper.sh up
./docker-helper.sh logs backend
./docker-helper.sh status
./docker-helper.sh help
```

---


## 🔧 Comandos por Servicio (Solo Local)

### Backend (local)
```bash
# Ver logs
docker compose logs -f backend

# Reiniciar solo backend
docker compose restart backend

# Ejecutar tests
docker compose exec backend npm test

# Abrir shell
docker compose exec backend sh
```

### Frontend (local)
```bash
# Ver logs
docker compose logs -f frontend

# Reiniciar
docker compose restart frontend
```

### MongoDB (local)
```bash
# Ver logs
docker compose logs -f mongodb

# Conectar a MongoDB shell
docker compose exec mongodb mongosh -u admin -p admin123 tienda_db

# Ver bases de datos
docker compose exec mongodb mongosh -u admin -p admin123 --eval "show dbs"
```

---

## 🐛 Troubleshooting Rápido (Solo Local)

### Puerto ya en uso
```bash
# Cambiar puerto en docker-compose.yml
# Ejemplo para backend:
ports:
  - "3001:3000"  # usa puerto 3001 en tu máquina
```

### Contenedor no inicia
```bash
# Ver logs detallados
docker compose logs backend

# Reiniciar desde cero
docker compose down
docker compose up -d
```

### MongoDB no conecta
```bash
# Verificar que está corriendo
docker compose ps mongodb

# Ver logs
docker compose logs mongodb

# Reiniciar MongoDB
docker compose restart mongodb
```

### Limpiar todo y empezar de nuevo
```bash
# ⚠️ CUIDADO: Esto borra todos los datos
docker compose down -v
docker compose build --no-cache
docker compose up -d
```

---


## 📚 ¿Cómo desplegar en producción?

Para deploy en la nube (producción):

- **Backend:** Render (usa Dockerfile, no docker-compose)
- **Frontend:** Netlify (build estático, no usa Docker)

Seguí la guía 👉 [DOCKER_DEPLOYMENT.md](./DOCKER_DEPLOYMENT.md)

---

## ✅ Checklist (Modo Local)

- [ ] Docker instalado y corriendo
- [ ] docker-compose.yml en la raíz del proyecto
- [ ] Variables de entorno configuradas (opcional)
- [ ] Ejecutado `docker compose build`
- [ ] Ejecutado `docker compose up -d`
- [ ] Frontend accesible en http://localhost
- [ ] Backend responde en http://localhost:3000/api/health
- [ ] Tests pasando: `docker compose exec backend npm test`

---

## 🎯 Ventajas de Usar Docker (Local)

✅ **Portabilidad**: Funciona igual en cualquier máquina  
✅ **Aislamiento**: No interfiere con otros proyectos  
✅ **Reproducibilidad**: Mismo ambiente en dev y prod  
✅ **Velocidad**: Setup en minutos, no horas  
✅ **Limpieza**: `docker compose down` y listo  

---

**Siguiente paso:** Lee [DOCKER_DEPLOYMENT.md](./DOCKER_DEPLOYMENT.md) para deploy en producción (Render/Netlify).
