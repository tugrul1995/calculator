
// operators

var display_screen = document.getElementById("display_screen")
var add = document.getElementById("add")
var divide = document.getElementById("divide")
var mutiply = document.getElementById("multiply")
var negative = document.getElementById("negative")
var equal = document.getElementById("equal")
var ac = document.getElementById("ac")

//numbers

var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var seven = document.getElementById("seven")
var eight = document.getElementById("eight")
var nine = document.getElementById("nine")
var zero = document.getElementById("zero")

// functions operator

add.onclick = function() {
  display_screen.innerHTML += "+"
}

divide.onclick = function() {
  display_screen.innerHTML += "/"
}

mutiply.onclick = function() {
  display_screen.innerHTML += "*"
}

negative.onclick = function() {
  display_screen.innerHTML += "-"
}

ac.onclick = function() {
  display_screen.innerHTML = ""
}

equal.onclick = function() {
  display_screen.innerHTML = eval(display_screen.innerHTML)
}

// function numbers

one.onclick = function() {
  display_screen.innerHTML += "1"
}

two.onclick = function() {
  display_screen.innerHTML +="2"
}

three.onclick = function() {
  display_screen.innerHTML += "3"
}

four.onclick = function() {
  display_screen.innerHTML += "4"
}

five.onclick = function() {
  display_screen.innerHTML += "5"
}

six.onclick = function() {
  display_screen.innerHTML += "6"
}

seven.onclick = function() {
  display_screen.innerHTML += "7"
}

eight.onclick = function() {
  display_screen.innerHTML += "8"
}

nine.onclick = function() {
  display_screen.innerHTML += "9"
}

zero.onclick = function() {
  display_screen.innerHTML += "0"
}
