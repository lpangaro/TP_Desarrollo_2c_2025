
# Usar imagen oficial de Node.js LTS (Long Term Support)
FROM node:18-alpine

# Establecer directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json del monorepo
COPY package*.json ./

# Copiar package.json del backend
COPY packages/backend/package*.json ./packages/backend/

# Instalar todas las dependencias del monorepo (incluyendo workspaces)
RUN npm ci

# Copiar el código del backend
COPY packages/backend ./packages/backend

# Establecer el directorio de trabajo en el backend
WORKDIR /app/packages/backend

# Exponer el puerto en el que corre el servidor
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
