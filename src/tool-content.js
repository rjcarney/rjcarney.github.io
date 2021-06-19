if(document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
}

function ready() {
  var toolTabs = document.getElementsByClassName("tab-button")

  for(i = 0; i < toolTabs.length; i++){
    toolTabs[i].addEventListener('click', showContent)
  }
}

function showContent(event){
  var tab = event.target
  var toolTabs = document.getElementsByClassName("tab-button")
  var toolContent = document.getElementsByClassName("tool-content")
  for (i = 0; i < toolTabs.length; i++) {
    if(toolTabs[i].innerText == tab.innerText) {
      toolTabs[i].parentElement.className = "tab active col-3"
      toolContent[i].className = "tool-content active"
    } else {
      toolTabs[i].parentElement.className = "tab col-3"
      toolContent[i].className = "tool-content"
    }
  }
}
