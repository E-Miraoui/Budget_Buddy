# Use Node.js image for building and serving React app
FROM node:10.2.4 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY client/package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY client/ .

# Build the app
RUN npm run build

# Use nginx for the final runtime image
FROM nginx:alpine

# Copy build files to Nginx directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run nginx
CMD ["nginx", "-g", "daemon off;"]
