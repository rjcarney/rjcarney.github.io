if(document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
}
var number1 = null
var operand = null
var number2 = null
var solved = false

function ready() {
  var numberButtons = document.getElementsByClassName("number")
  for(i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener('click', numberButtonOnClick)
  }

  var operandButtons = document.getElementsByClassName("operand")
  for(i = 0; i < operandButtons.length; i++){
    operandButtons[i].addEventListener('click', operandButtonOnClick)
  }

  var clearButton = document.getElementsByClassName("clear")[0]
  clearButton.addEventListener('click', clearButtonOnClick)

  var deleteButton = document.getElementsByClassName("delete")[0]
  deleteButton.addEventListener('click', deleteButtonOnClick)

  var signChangeButton = document.getElementsByClassName("sign-change")[0]
  signChangeButton.addEventListener('click', signChangeButtonOnClick)

  var decimalButton = document.getElementsByClassName("decimal")[0]
  decimalButton.addEventListener('click', decimalButtonOnClick)

  var equalsButton = document.getElementsByClassName("equals")[0]
  equalsButton.addEventListener('click', equalsButtonOnClick)
}

function numberButtonOnClick(event){
  var button = event.target
  var number = button.innerText

  var calculatorInput = document.getElementsByClassName("calculator-input-field")[0]
  if(solved || calculatorInput.value == "0"){
    calculatorInput.value = number
    solved = false
  } else{
    calculatorInput.value += number
  }
}

function operandButtonOnClick(event){
  var calculatorInput = document.getElementsByClassName("calculator-input-field")[0]
  var button = event.target

  if(calculatorInput.value != ""){
    if(number1 == null && operand == null){
      number1 = calculatorInput.value
      operand = button.innerText

      console.log(number1)
      console.log(operand)

      calculatorInput.value = ""
    } else {
      number2 = calculatorInput.value
      solve()
      number1 = calculatorInput.value
      operand = button.innerText
    }
  }
}

function clearButtonOnClick(event){
  var calculatorInput = document.getElementsByClassName("calculator-input-field")[0]
  calculatorInput.value = ""
  number1 = null
  operand = null
  number2 = null
  solved = false
}

function deleteButtonOnClick(event){
  var calculatorInput = document.getElementsByClassName("calculator-input-field")[0]
  calculatorInput.value = calculatorInput.value.substring(0, calculatorInput.value.length - 1)
}

function signChangeButtonOnClick(event){
  var calculatorInput = document.getElementsByClassName("calculator-input-field")[0]
  if(calculatorInput.value != ""){
    calculatorInput.value = parseFloat(calculatorInput.value) * -1
  }
}

function decimalButtonOnClick(event) {
  var calculatorInput = document.getElementsByClassName("calculator-input-field")[0]
  if(calculatorInput.value != "" && Number.isInteger(parseFloat(calculatorInput.value)) && calculatorInput.value.substring(calculatorInput.value.length - 1, calculatorInput.value.length) != "."){
    calculatorInput.value += "."
  } else if (solved || calculatorInput.value == "") {
    calculatorInput.value = "0."
    solved = false
  }
}

function equalsButtonOnClick(event){
  var calculatorInput = document.getElementsByClassName("calculator-input-field")[0]
  if(calculatorInput.value != "" && number1 != null && operand != null){
    number2 = calculatorInput.value
    solve()
  }
}

function solve() {
  var calculatorInput = document.getElementsByClassName("calculator-input-field")[0]
  switch (operand) {
    case "%":
      calculatorInput.value = parseFloat(number1) % parseFloat(number2)
      break;
    case "/":
      calculatorInput.value = parseFloat(number1) / parseFloat(number2)
      break;
    case "*":
      calculatorInput.value = parseFloat(number1) * parseFloat(number2)
      break;
    case "-":
      calculatorInput.value = parseFloat(number1) - parseFloat(number2)
      break;
    case "+":
      calculatorInput.value = parseFloat(number1) + parseFloat(number2)
      break;
  }
  number1 = null
  operand = null
  number2 = null
  solved = true
}
