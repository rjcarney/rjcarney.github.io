if(document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
}

function ready(){
  var navBurger = document.getElementsByClassName("nav-burger")[0]
  navBurger.addEventListener('click', responsive)

  var navElements = document.getElementsByClassName("nav-link")
  for(i = 0; i < navElements.length; i++) {
    navElements[i].addEventListener('click', closeResponsive)
  }
}

function responsive() {
  var topnav = document.getElementsByClassName("topnav")[0]
  if (topnav.className === "topnav") {
    topnav.className += " responsive"
  } else {
    topnav.className = "topnav"
  }
}

function closeResponsive() {
  var topnav = document.getElementsByClassName("topnav")[0]
  if(topnav.className === "topnav responsive") {
    topnav.className = "topnav"
  }
}
