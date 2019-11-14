let map = L.map('map').setView([50.574617, -113.557556], 3.34);

L.tileLayer('https://api.mapbox.com/styles/v1/kelahb11/ck2xzkhsd2ddk1cnrwzum4q5u/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2VsYWhiMTEiLCJhIjoiY2syd2VrZjB5MDZ0aDNibzQ0bmVhbGppeCJ9.JXPqpPCUArM0Uykr0z_aaw', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18
}).addTo(map);

for (let i = 0; i < places.length; i++ ){
  L.marker( [places[i].latitude, places[i].longitude] )
  .bindPopup('<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descript + '</p>')
  .addTo(map)
}
