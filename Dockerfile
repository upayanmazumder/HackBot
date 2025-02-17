# Use the official Node.js image
FROM node

# Create and change to the bot directory
WORKDIR /bot

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local code to the container image
COPY . .

# Run the web service on container startup
CMD [ "npm", "run", "bot" ]