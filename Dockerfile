FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application code
COPY . .

# Expose Astro dev server port
EXPOSE 4321

# Run development server with hot reload
CMD ["npm", "run", "dev", "--", "--host"]
