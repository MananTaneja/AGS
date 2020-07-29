## Initial Setup

1. NodeJS Installation

   - 64 bit or 32 bit
   - Website - https://nodejs.org/en/
   - Nodejs version used - 12.6.0
   - NPM Version Used - 6.14.5

2. Global Installation of NextJS (Not required if using existing files)

   - Website - https://nextjs.org/docs/getting-started
   - Sets up the boiler plate for new project

   ```
   npm i create-next-app
   npx create-next-app myApp
   ```

3. Server Package Dependencies
   (Insert Image of package.json)
4. Front End Package Dependencies
   (Insert Image of package.json)
5. Command to install all dependencies
   ```
   npm install
   ```
   - Need to run in root folder and in client-side-web folder

### Commands To Start The Application

```
npm run dev
```

Run this in the root folder of the application. \
This will start the front end on localhost:3000 and server on localhost:5000

## Structure of the project folder

### Backend Server

1. Entry point of the server is server.js in root directory
2. All different routes (like localhost:5000/test) are placed in the routes directory

#### Routes Directory

1. login.js => used to process the phone number and name of the customer
   - Stores in dB if there is a new number
   - Encrypts user data and sends back to front end using JSON Web Token
2. menuDetails.js => endpoint for menu - Queries the dB for menu details and return JSON for the menu
   3, orderDetails.js
3. qsr.js
4. s3image.js

### Config Directory

1. db.js -
2. keys.js
3. mongodb.js -
4. passport.js -

#### Models

Contains all the information regarding tables

1. restaurants folder contains the structure of the table of every included restaurant

Other Tables:

1. Customer.js - phone number and name of the customer
2. Merchant.js - merchant details for onboarding

### Frontend
