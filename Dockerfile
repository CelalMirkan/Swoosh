FROM node:16.13.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json .

RUN npm install

# Copying source files
COPY . .

# Building app
EXPOSE 5050

# Running the app
CMD ["npm", "start"]