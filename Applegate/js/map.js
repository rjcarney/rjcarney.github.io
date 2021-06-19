// Initialize and add the map
function initMap() {
  // The location of The Applegate Inn
  const location = { lat: 43.3551801, lng: -82.6397035 };
  // The map, centered at The Applegate Inn
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });
  // The marker, positioned at The Applegate Inn
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
