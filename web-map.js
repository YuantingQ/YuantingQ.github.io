

//Create a new map on 'map' div
var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        new ol.layer.Image({
            source: new ol.source.ImageWMS({
                url: 'http://localhost:8080/geoserver/Web_map/wms',
                params: {'LAYERS': 'Web_map:wparcel'},
                ratio: 1,
                serverType: 'geoserver'
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-71.799375,42.272792]),
        zoom: 12.7
    })
});
