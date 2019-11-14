let map = L.map('map').setView([29.654717,-82.316830], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/kelahb11/ck2wep56k1lht1cml1hobzaph/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2VsYWhiMTEiLCJhIjoiY2syd2VrZjB5MDZ0aDNibzQ0bmVhbGppeCJ9.JXPqpPCUArM0Uykr0z_aaw', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18
}).addTo(map);

let marker1 = L.marker([29.620672, -82.33702]).addTo(map);
let marker2 = L.marker([29.620001, -82.329678]).addTo(map);
let marker3 =  L.marker([29.660145, -82.363799]).addTo(map);
let marker4 =  L.marker([29.707916, -82.393953]).addTo(map);

marker1.bindPopup("<b>Bivens Arm Nature Park</b> This park has a great trail near a lake for fishing.").openPopup();
marker2.bindPopup("<b>Sweetwater Wetlands Park</b> This park has a circular trail that spans over a mile and is a great place for nature photography especially at the golden hour.")
marker3.bindPopup("<b>Loblolly Woods Nature Park</b> This park has a really nice wooden trail you can follow and a dropoff where you can sit by the creek and picnic.")
marker4.bindPopup("<b>Devils Mill Hopper</b> This trail  is created around a large sinkhole in the ground.")
