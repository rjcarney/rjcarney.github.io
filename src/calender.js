if(document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
}

function ready() {
  var today = new Date()
  var year = today.getFullYear()
  var monthInt = today.getMonth()
  var date = today.getDate()
  var weekday = getWeekdayText(today.getDay())
  var month = getMonthText(monthInt)
  console.log(weekday + " " + month + " " + date + ", " + year)

  var monthTitle = document.getElementsByClassName("month-text")[0]
  monthTitle.innerText = month

  var yearTitle = document.getElementsByClassName("year-text")[0]
  yearTitle.innerText = year

  var firstOfMonth = new Date(year, monthInt, 1)
  var firstWeekday = firstOfMonth.getDay();

  var lastOfMonth = new Date(year, monthInt + 1, 0)
  var monthSize = lastOfMonth.getDate()

  var previousMonthSize = new Date(year, monthInt, 0).getDate()
  var firstCalenderDate = previousMonthSize - firstWeekday + 1

  var dates = document.getElementsByClassName("date")
  var d = 1
  var n = 1
  for(i = 0; i < dates.length; i++){
    if(i < firstWeekday) {
      dates[i].innerText = firstCalenderDate
      dates[i].style.color = "grey"
      firstCalenderDate++
    } else if (i >= firstWeekday && i < firstWeekday + monthSize) {
      dates[i].innerText = d
      if(d == date) {
        dates[i].parentElement.style.background = "#B4B8C5"
      }
      d++
    } else {
      dates[i].innerText = n
      dates[i].style.color = "grey"
      n++
    }
  }

  var previousButton = document.getElementsByClassName("previousButton")[0]
  previousButton.addEventListener('click', previousMonth)

  var nextButton = document.getElementsByClassName("nextButton")[0]
  nextButton.addEventListener('click', nextMonth)
}

function previousMonth(event){
  console.log("previous button clicked")
  var monthText = document.getElementsByClassName("month-text")[0].innerText
  var monthInt = getMonthInt(monthText)

  var yearText = document.getElementsByClassName("year-text")[0].innerText
  var year = parseInt(yearText, 10)

  var firstOfMonth
  if(monthInt > 0) {
    firstOfMonth = new Date(year, monthInt -1, 1)
  } else {
    firstOfMonth = new Date(year - 1, 11, 1)
  }
  console.log("Previous Month: " + getMonthText(firstOfMonth.getMonth()) + " " + firstOfMonth.getFullYear())

  var firstWeekday = firstOfMonth.getDay()
  var previousMonth = new Date(firstOfMonth.getFullYear(), firstOfMonth.getMonth(), 0)
  var previousMonthSize = previousMonth.getDate()
  var firstCalenderDate = previousMonthSize - firstWeekday + 1
  var monthSize = new Date(firstOfMonth.getFullYear(), firstOfMonth.getMonth() + 1, 0).getDate()
  var today = new Date()
  var dates = document.getElementsByClassName("date")
  var d = 1
  var n = 1
  for(i = 0; i < dates.length; i++) {
    if(i < firstWeekday) {
      dates[i].innerText = firstCalenderDate
      dates[i].style.color = "grey"
      dates[i].parentElement.style.background = "none"
      if(today === new Date(previousMonth.getFullYear(), previousMonth.getMonth(), firstCalenderDate)){
        dates[i].parentElement.style.background = "lightgreen"
      }
      firstCalenderDate++
    } else if (i >= firstWeekday && i < firstWeekday + monthSize) {
      dates[i].innerText = d
      dates[i].style.color = "black"
      dates[i].parentElement.style.background = "none"
      if(today === new Date(firstOfMonth.getFullYear(), firstOfMonth.getMonth(), d)) {
        dates[i].parentElement.style.background = "lightgreen"
      }
      d++
    } else {
      dates[i].innerText = n
      dates[i].style.color = "grey"
      dates[i].parentElement.style.background = "none"
      n++
    }
  }
  document.getElementsByClassName("month-text")[0].innerText = getMonthText(firstOfMonth.getMonth())
  document.getElementsByClassName("year-text")[0].innerText = firstOfMonth.getFullYear()
}

function nextMonth(event){
  console.log("next button clicked")
  var monthText = document.getElementsByClassName("month-text")[0].innerText
  var monthInt = getMonthInt(monthText)

  var yearText = document.getElementsByClassName("year-text")[0].innerText
  var year = parseInt(yearText, 10)

  if(monthInt < 11) {
    firstOfMonth = new Date(year, monthInt + 1, 1)
  } else {
    firstOfMonth = new Date(year + 1, 0, 1)
  }
  console.log("Next Month: " + getMonthText(firstOfMonth.getMonth()) + " " + firstOfMonth.getFullYear())

  var firstWeekday = firstOfMonth.getDay()
  var previousMonth = new Date(firstOfMonth.getFullYear(), firstOfMonth.getMonth(), 0)
  var previousMonthSize = previousMonth.getDate()
  var firstCalenderDate = previousMonthSize - firstWeekday + 1
  var monthSize = new Date(firstOfMonth.getFullYear(), firstOfMonth.getMonth() + 1, 0).getDate()
  var today = new Date()
  var dates = document.getElementsByClassName("date")
  var d = 1
  var n = 1
  for(i = 0; i < dates.length; i++) {
    if(i < firstWeekday) {
      dates[i].innerText = firstCalenderDate
      dates[i].style.color = "grey"
      dates[i].parentElement.style.background = "none"
      firstCalenderDate++
    } else if (i >= firstWeekday && i < firstWeekday + monthSize) {
      dates[i].innerText = d
      dates[i].style.color = "black"
      dates[i].parentElement.style.background = "none"

      d++
    } else {
      dates[i].innerText = n
      dates[i].style.color = "grey"
      dates[i].parentElement.style.background = "none"
      n++
    }
  }
  document.getElementsByClassName("month-text")[0].innerText = getMonthText(firstOfMonth.getMonth())
  document.getElementsByClassName("year-text")[0].innerText = firstOfMonth.getFullYear()
}

function getMonthText(monthInt){
  switch (monthInt) {
    case 0:
      return "January"
      break;
    case 1:
      return "Febuary"
      break;
    case 2:
      return "March"
      break;
    case 3:
      return "April"
      break;
    case 4:
      return "May"
      break;
    case 5:
      return "June"
      break;
    case 6:
      return "July"
      break;
    case 7:
      return "August"
      break;
    case 8:
      return "September"
      break;
    case 9:
      return "October"
      break;
    case 10:
      return "November"
      break;
    case 11:
      return "December"
      break;
  }
}

function getMonthInt(monthText){
  switch (monthText) {
    case "January":
      return 0
      break;
    case "Febuary":
      return 1
      break;
    case "March":
      return 2
      break;
    case "April":
      return 3
      break;
    case "May":
      return 4
      break;
    case "June":
      return 5
      break;
    case "July":
      return 6
      break;
    case "August":
      return 7
      break;
    case "September":
      return 8
      break;
    case "October":
      return 9
      break;
    case "November":
      return 10
      break;
    case "December":
      return 11
      break;
  }
}

function getWeekdayText(weekdayInt) {
  switch (weekdayInt) {
    case 0:
      return "Sunday"
      break;
    case 1:
        return "Monday"
        break;
    case 2:
        return "Tuesday"
        break;
    case 3:
        return "Wednesday"
        break;
    case 4:
        return "Thursday"
        break;
    case 5:
        return "Friday"
        break;
    case 6:
        return "Saturday"
        break;
  }
}
