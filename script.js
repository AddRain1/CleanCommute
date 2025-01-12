mapboxgl.accessToken = 'pk.eyJ1IjoiYWRkcmFpbjEiLCJhIjoiY201c29qZGdkMGFjMDJpcG9iOGl0bnEzNCJ9.DZ9-xP5klHuPvECO3l2tEA';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true});

function successLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    setupMap([-118.2437, 34.0522]); // Los Angeles, California
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    map.addControl(new mapboxgl.NavigationControl());

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      });
      
      map.addControl(directions, 'top-left');
}