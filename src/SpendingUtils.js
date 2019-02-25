class SpendingUtils {
  constructor(date) {
    this.startingDate = date;
    this.startingMonth = date.getMonth() + 1;
    this.startingYear = date.getFullYear();

    this.endOfFirstIterationDay = 7;
    this.endOfSecondIterationDay = 15;
    this.endOfThirdIterationDay = 23;
    this.endOfFourthIterationDay = 31;

    this.firstIterationPrice = 0.05;
    this.secondIterationPrice = 0.1;
    this.thirdIterationPrice = 0.15;
    this.fourthIterationPrice = 0.2;
    this.otherIterationPrice = 0.25;
  }

  getPrice(date) {
    var currentMonth = date.getMonth() + 1;
    var currentYear = date.getFullYear();
    var currentDay = date.getDay();
    var currentDate = date.getDate();

    if (this.startingMonth == currentMonth && this.startingYear == currentYear) {
      if (currentDay == 0 || currentDay == 6)
        return 0;
      if (currentDate <= this.endOfFirstIterationDay)
        return this.firstIterationPrice;
      if (currentDate <= this.endOfSecondIterationDay)
        return this.secondIterationPrice
      if (currentDate <= this.endOfThirdIterationDay)
        return this.thirdIterationPrice;
      if (currentDate <= this.endOfFourthIterationDay)
        return this.fourthIterationPrice;
    }
    else {
      if (currentDay == 0 || currentDay == 6)
        return 0;
      else
        return this.otherIterationPrice;
    }
  }

  calculateSpending(date, numOfDays) {
    var totalCost = 0;
    var daysLeft = numOfDays;
    var currentDate = date;

    while (daysLeft > 0) {
      totalCost = totalCost + this.getPrice(currentDate);
      currentDate.setDate(currentDate.getDate() + 1);
      daysLeft--;
    }

    return totalCost.toFixed(2);
  }
}

module.exports = SpendingUtils;
