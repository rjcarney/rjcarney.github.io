$('#topnavToggle').on('click', togglenav);

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function togglenav() {
  var nav = $('#topnav');
  nav.toggleClass('responsive');
}
