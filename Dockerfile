# 1. Use a small official Node image
FROM node:20-alpine

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy only dependency files first
COPY package*.json ./

# 4. Install dependencies (uses package-lock if present)
RUN npm ci

# 5. Copy rest of the source code
COPY . .

# 6. Expose the port your app uses
EXPOSE 3000

# 7. Command to start the app
CMD ["node", "server.js"]
