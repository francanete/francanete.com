# Use the official lightweight Node.js 18 image.
# https://hub.docker.com/_/node
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy package.json, package-lock.json, and next.config.js
COPY package.json package-lock.json next.config.js ./

# Install dependencies
RUN npm ci

# Copy local code to the container
COPY . .

# Build the application
RUN npm run build

# Inform Docker that the container listens on port 3000 at runtime.
EXPOSE 3000

# Define the command to run the app using CMD which defines your runtime
CMD ["npm", "start"]
