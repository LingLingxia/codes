FROM node:18.12.1-bullseye-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy necessary files
COPY . .

# Expose port 3000 (adjust the port based on your application)
EXPOSE 3000

# CMD to run the application
CMD [ "node", "customer_app.js" ]