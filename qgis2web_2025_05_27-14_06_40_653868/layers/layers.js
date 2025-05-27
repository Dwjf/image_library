var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_poi_day1_1 = new ol.format.GeoJSON();
var features_poi_day1_1 = format_poi_day1_1.readFeatures(json_poi_day1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poi_day1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poi_day1_1.addFeatures(features_poi_day1_1);
var lyr_poi_day1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poi_day1_1, 
                style: style_poi_day1_1,
                popuplayertitle: 'poi_day1',
                interactive: true,
                title: '<img src="styles/legend/poi_day1_1.png" /> poi_day1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_poi_day1_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_poi_day1_1];
lyr_poi_day1_1.set('fieldAliases', {'id': 'id', });
lyr_poi_day1_1.set('fieldImages', {'id': '', });
lyr_poi_day1_1.set('fieldLabels', {'id': 'no label', });
lyr_poi_day1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});