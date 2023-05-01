function createEmployeeRecord(ary){
    let record
    return record = { 
        firstName: ary[0],
        familyName: ary[1],
        title: ary[2],
        payPerHour: ary[3],
        timeInEvents: [], 
        timeOutEvents: []
    }
}

function createEmployeeRecords(arys){
    return arys.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp) {
    const[date, hour] = dateStamp.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    const[date, hour] = dateStamp.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date) {
    return(hoursWorkedOnDate.call(this, date) * this.payPerHour);
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) 

    return payable
}

function calculatePayroll(empRecords) {
    const totalForEachEmployee = empRecords.map(record => allWagesFor.call(record))
    return totalForEachEmployee.reduce((total, empTotal) => total + empTotal)
}

function findEmployeeByFirstName(src, name) {
    return src.find(record => record.firstName === name)
}