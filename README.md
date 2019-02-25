# Budget Calculator Express Server

### Setup
npm install

### Running the server
cd src
node app.js

### Hitting the calculate endpoint
http://localhost:3000/getTotalCost?startDate="MM/DD/YYYY"&numberOfDays={numberOfDays}
This GET endpoint will return the total cost of bananas from startDate + numberOfDays.