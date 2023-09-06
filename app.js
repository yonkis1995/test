mapboxgl.accessToken = 'pk.eyJ1IjoieW9ua2lzIiwiYSI6ImNsbTBwOXdrdjB4amszZG1ocDV5Zm0zd3EifQ.u0T-Qw-9W-i5B8EUqLAj_Q';

const geojsonLine = {
    "type": "FeatureCollection",
    "name": "railway_example",
    "features": [
    { "type": "Feature", "properties": { "id_0": 77, "id": 47, "run": "msktov-hov", "run_name": "Москва-Товарная — Ховрино", "2023_pds": 43, "2023_vsm": 0, "2024_pds": 42, "2024_vsm": 0, "2025_pds": 42, "2025_vsm": 0, "2026_pds": 42, "2026_vsm": 0, "2027_pds": 23, "2027_vsm": 19, "2028_pds": 23, "2028_vsm": 19, "2029_pds": 16, "2029_vsm": 36, "2030_pds": 17, "2030_vsm": 40, "2031_pds": 17, "2031_vsm": 43, "2032_pds": 17, "2032_vsm": 43, "2033_pds": 17, "2033_vsm": 47, "2034_pds": 17, "2034_vsm": 49, "2035_pds": 17, "2035_vsm": 50, "2036_pds": 25, "2036_vsm": 53, "2037_pds": 25, "2037_vsm": 53, "2038_pds": 17, "2038_vsm": 56, "2039_pds": 17, "2039_vsm": 66, "2040_pds": 17, "2040_vsm": 67 }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ 37.515835703850001, 55.866946111490002 ], [ 37.518139, 55.865921 ], [ 37.521121, 55.86467 ], [ 37.522506, 55.86413 ], [ 37.523168, 55.863842 ], [ 37.526379, 55.862436 ], [ 37.527922, 55.861791 ], [ 37.529045, 55.861321 ], [ 37.530157, 55.860856 ], [ 37.541729, 55.855944 ], [ 37.541729, 55.855944 ], [ 37.54197, 55.855838 ], [ 37.542627, 55.855542 ], [ 37.543503, 55.855147 ], [ 37.544616, 55.8546 ], [ 37.545052, 55.854369 ], [ 37.545514, 55.85414 ], [ 37.546574, 55.853591 ], [ 37.548669, 55.852416 ], [ 37.550658, 55.851176 ], [ 37.552016, 55.850299 ], [ 37.553403, 55.849413 ], [ 37.554871, 55.84848 ], [ 37.556734, 55.847256 ], [ 37.558665, 55.845975 ], [ 37.560043, 55.845019 ], [ 37.560891, 55.84446 ], [ 37.564771, 55.842035 ], [ 37.568626, 55.839574 ], [ 37.569469, 55.839 ], [ 37.569918, 55.838693 ], [ 37.570283, 55.838444 ], [ 37.572396, 55.837116 ], [ 37.573336, 55.836534 ], [ 37.574321, 55.835953 ], [ 37.576241, 55.834725 ], [ 37.577381, 55.833948 ], [ 37.57819, 55.833328 ], [ 37.57859, 55.83298 ], [ 37.579192, 55.832484 ], [ 37.579462, 55.832256 ], [ 37.579799, 55.831983 ], [ 37.580225, 55.831679 ], [ 37.580679, 55.831416 ], [ 37.581299, 55.831119 ], [ 37.584777, 55.829796 ], [ 37.585397, 55.829491 ], [ 37.58559, 55.829384 ], [ 37.586086, 55.829061 ], [ 37.586763, 55.828501 ], [ 37.587793, 55.827715 ], [ 37.589646, 55.826386 ], [ 37.590001, 55.826151 ], [ 37.595794, 55.822423 ], [ 37.601729, 55.818628 ], [ 37.604911, 55.816593 ], [ 37.606836, 55.815312 ], [ 37.609806, 55.813205 ], [ 37.613001, 55.811072 ], [ 37.617643, 55.808079 ], [ 37.625708, 55.802789 ], [ 37.629675, 55.800297 ], [ 37.631877, 55.798883 ], [ 37.633957, 55.797543 ] ] ] } }
    ]
    }
    ;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [37.61, 55.77], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

map.on('load', () => {
map.addSource('LineString', {
'type': 'geojson',
'data': geojsonLine
});
map.addLayer({
'id': 'LineString',
'type': 'line',
'source': 'LineString',
'layout': {
'line-join': 'round',
'line-cap': 'round'
},
'paint': {
'line-color': '#FF4500',
'line-width': 5
}
})
});

map.on('mouseenter', 'LineString', () => {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'LineString', () => {
    map.getCanvas().style.cursor = '';
});


let popup;

map.on('mouseenter', 'LineString', (e) => {
    const coordinates = e.lngLat;
    
    popup = new mapboxgl.Popup({
        closeButton: false
    })
        .setLngLat(coordinates)
        .setHTML('<h3>Линия Москва - СПб</h3>')
        .addTo(map);
});
map.on('mouseleave', 'LineString', () => {
    popup.remove();
});


const infoblock = document.querySelector("#infoblock");

map.on("click", "LineString", function() {
    infoblock.classList.remove("hidden");
});
map.on("drag", function() {

    infoblock.classList.add("hidden");
});