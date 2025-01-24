# Use the official Node.js image
FROM node:16.13.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's code
COPY . .

# Expose the port your app listens on
EXPOSE 3000

# Define the command to run your app
CMD ["node", "index.js"]
