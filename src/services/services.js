function openCity (evt, cityName) {
  // Declare all variables

  // Get all elements with class="tabcontent" and hide them

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = 'block'
  evt.currentTarget.className += ' active'
}

export default { openCity }
