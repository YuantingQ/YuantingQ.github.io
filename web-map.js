

//Create a new map on 'map' div, centered at worcester
var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-71.799375,42.272792]),
        zoom: 12.7
    })
});

//Create a image WMS of Worcester Parcel Layer from GeoServer
var wmsSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/Web_map/wms',
    params: {'LAYERS': 'Web_map:wparcel'},
    serverType: 'geoserver',
    ratio: 1
});

var wmsLayer = new ol.layer.Image({
    source: wmsSource
});

//Overlay the layer on top of the map
map.addLayer(wmsLayer);

