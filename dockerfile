# Use the official Node.js image as base
FROM node:21-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .

# Copy the rest of the frontend app
COPY . .

# Install dependencies and log the errors
RUN npm install --loglevel verbose

# Host 3000 ### 5173
EXPOSE 5173

CMD ["npm", "run", "dev"]
