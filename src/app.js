const express = require("express");
const app = express();
const SpendingUtils = require("./SpendingUtils.js");

app.get("/", (req, res) => {
  res.send("hello world!!!");
});

/**
 * GET route to /getTotalCost that takes in two parameters which are startDate('MM/DD/YYYY') and numberOfDays(integer).
 * The route will return the total cost of banana from startDate + numberOfDays.
 */
app.get("/getTotalCost", (req, res) => {
  console.log(`Received request: req=${req}, res:${res}`);

  var startDate = new Date(req.query.startDate); // startDate
  var numberOfDays = parseInt(req.query.numberOfDays); // numberOfDays
  var result = {};

  console.log(`startDate=${startDate}, numberOfDays:${numberOfDays}`);

  if (!(startDate instanceof Date && !isNaN(startDate))) {
    result = {
      "error": "Invalid request. Please enter parameter startDate in 'MM/DD/YYYY' format"
    }
    res.send(result);
    return;
  }

  if (isNaN(numberOfDays)) {
    result = {
      "error": "Invalid request. Please enter paramter numberOfDays in integer"
    }

    res.send(result);
    return;
  }

  var spendingUtils = new SpendingUtils(startDate);
  var totalCost = spendingUtils.calculateSpending(startDate, numberOfDays);

  var result = {
    'totalCost': totalCost
  }

  console.log(`Returning result. result: ${result.totalCost}`);
  res.send(result);
});

app.listen(3000, () => console.log("Listening on port 3000..."));
