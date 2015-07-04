/*
 * This file is licenced CC0 http://creativecommons.org/publicdomain/zero/1.0/
 *
 */

/* create the leaflet map */
var map = L.map('map');

/* remove Leaflet attribution */
map.attributionControl.setPrefix('');

/* set the view for NSW ( S W N E ) */
map.fitBounds([
        [-34.9669, 149.7930],
        [-32.7664, 151.6470]
        ]);

/* use OSM as the base map */
/*
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Base map &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        */
var access_token = 'pk.eyJ1IjoiYW5kcmV3aGFydmV5NCIsImEiOiI5ZjY4N2YzNzI1N2U2ZGY5NWI1MzdjODk2ZmQzZDcxNyJ9.nQ4BtbCVanXNYImI29T4kQ';

/* use OSM as the base map */
L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}@2x.png?access_token=' + access_token, {
        maxZoom: 18,
        attribution: 'Base map <a href="https://www.mapbox.com/about/maps/" target="_blank">&copy; Mapbox</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap</a>; Overlay &copy; Sydney Water'
        }).addTo(map);

/* add the major incidents geojson feed */
/*
$.getJSON('geojson.json', function (data) {
        addIndexLayer(map, data)
        });
        */

function getColor(d) {
    var blues = ['rgb(247,251,255)','rgb(222,235,247)','rgb(198,219,239)','rgb(158,202,225)','rgb(107,174,214)','rgb(66,146,198)','rgb(33,113,181)','rgb(8,69,148)'];
    return d > 190 ? blues[7] :
           d > 162 ? blues[6] :
           d > 133 ? blues[5] :
           d > 104 ? blues[4] :
           d > 76 ? blues[3] :
           d > 47 ? blues[2] :
           d > 19 ? blues[1] :
                    blues[0] ;
}

var consumption_pp = L.geoJson(null, {
    style: function (feature) {
        return {
            fillColor: getColor(feature.properties.cpp_2013),
            weight: 1,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }
});
var lga = omnivore.topojson('data/sw_consumption_pp.topo.json', null, consumption_pp).addTo(map);
