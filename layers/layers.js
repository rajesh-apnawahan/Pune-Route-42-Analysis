var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pimpalesaudagar_1 = new ol.format.GeoJSON();
var features_Pimpalesaudagar_1 = format_Pimpalesaudagar_1.readFeatures(json_Pimpalesaudagar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pimpalesaudagar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pimpalesaudagar_1.addFeatures(features_Pimpalesaudagar_1);
var lyr_Pimpalesaudagar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pimpalesaudagar_1, 
                style: style_Pimpalesaudagar_1,
                popuplayertitle: "Pimpale saudagar",
                interactive: true,
                title: '<img src="styles/legend/Pimpalesaudagar_1.png" /> Pimpale saudagar'
            });
var format_PimpleGaurav_2 = new ol.format.GeoJSON();
var features_PimpleGaurav_2 = format_PimpleGaurav_2.readFeatures(json_PimpleGaurav_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpleGaurav_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpleGaurav_2.addFeatures(features_PimpleGaurav_2);
var lyr_PimpleGaurav_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpleGaurav_2, 
                style: style_PimpleGaurav_2,
                popuplayertitle: "Pimple Gaurav",
                interactive: true,
                title: '<img src="styles/legend/PimpleGaurav_2.png" /> Pimple Gaurav'
            });
var format_Keshavnagar_3 = new ol.format.GeoJSON();
var features_Keshavnagar_3 = format_Keshavnagar_3.readFeatures(json_Keshavnagar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Keshavnagar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Keshavnagar_3.addFeatures(features_Keshavnagar_3);
var lyr_Keshavnagar_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Keshavnagar_3, 
                style: style_Keshavnagar_3,
                popuplayertitle: "Keshavnagar",
                interactive: true,
                title: '<img src="styles/legend/Keshavnagar_3.png" /> Keshavnagar'
            });
var format_Yavatmal_4 = new ol.format.GeoJSON();
var features_Yavatmal_4 = format_Yavatmal_4.readFeatures(json_Yavatmal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yavatmal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yavatmal_4.addFeatures(features_Yavatmal_4);
var lyr_Yavatmal_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yavatmal_4, 
                style: style_Yavatmal_4,
                popuplayertitle: "Yavatmal",
                interactive: true,
                title: '<img src="styles/legend/Yavatmal_4.png" /> Yavatmal'
            });
var format_Lahagaon_5 = new ol.format.GeoJSON();
var features_Lahagaon_5 = format_Lahagaon_5.readFeatures(json_Lahagaon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahagaon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahagaon_5.addFeatures(features_Lahagaon_5);
var lyr_Lahagaon_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lahagaon_5, 
                style: style_Lahagaon_5,
                popuplayertitle: "Lahagaon",
                interactive: true,
                title: '<img src="styles/legend/Lahagaon_5.png" /> Lahagaon'
            });
var format_KirkeeBoundary_6 = new ol.format.GeoJSON();
var features_KirkeeBoundary_6 = format_KirkeeBoundary_6.readFeatures(json_KirkeeBoundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KirkeeBoundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KirkeeBoundary_6.addFeatures(features_KirkeeBoundary_6);
var lyr_KirkeeBoundary_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KirkeeBoundary_6, 
                style: style_KirkeeBoundary_6,
                popuplayertitle: "Kirkee Boundary",
                interactive: true,
                title: '<img src="styles/legend/KirkeeBoundary_6.png" /> Kirkee Boundary'
            });
var format_PimpreChinchwadboundary_7 = new ol.format.GeoJSON();
var features_PimpreChinchwadboundary_7 = format_PimpreChinchwadboundary_7.readFeatures(json_PimpreChinchwadboundary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpreChinchwadboundary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpreChinchwadboundary_7.addFeatures(features_PimpreChinchwadboundary_7);
var lyr_PimpreChinchwadboundary_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpreChinchwadboundary_7, 
                style: style_PimpreChinchwadboundary_7,
                popuplayertitle: "Pimpre Chinchwad boundary",
                interactive: true,
                title: '<img src="styles/legend/PimpreChinchwadboundary_7.png" /> Pimpre Chinchwad boundary'
            });
var format_PuneGeoBoundary_8 = new ol.format.GeoJSON();
var features_PuneGeoBoundary_8 = format_PuneGeoBoundary_8.readFeatures(json_PuneGeoBoundary_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuneGeoBoundary_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuneGeoBoundary_8.addFeatures(features_PuneGeoBoundary_8);
var lyr_PuneGeoBoundary_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuneGeoBoundary_8, 
                style: style_PuneGeoBoundary_8,
                popuplayertitle: "Pune Geo Boundary",
                interactive: true,
                title: '<img src="styles/legend/PuneGeoBoundary_8.png" /> Pune Geo Boundary'
            });
var format_AllPunePopReprojected_9 = new ol.format.GeoJSON();
var features_AllPunePopReprojected_9 = format_AllPunePopReprojected_9.readFeatures(json_AllPunePopReprojected_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllPunePopReprojected_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllPunePopReprojected_9.addFeatures(features_AllPunePopReprojected_9);
var lyr_AllPunePopReprojected_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AllPunePopReprojected_9, 
                style: style_AllPunePopReprojected_9,
                popuplayertitle: "All Pune Pop Reprojected",
                interactive: true,
                title: '<img src="styles/legend/AllPunePopReprojected_9.png" /> All Pune Pop Reprojected'
            });
var format_42DRoute_10 = new ol.format.GeoJSON();
var features_42DRoute_10 = format_42DRoute_10.readFeatures(json_42DRoute_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_42DRoute_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_42DRoute_10.addFeatures(features_42DRoute_10);
var lyr_42DRoute_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_42DRoute_10, 
                style: style_42DRoute_10,
                popuplayertitle: "42D Route",
                interactive: true,
                title: '42D Route'
            });
var format_Route42DMtrs_11 = new ol.format.GeoJSON();
var features_Route42DMtrs_11 = format_Route42DMtrs_11.readFeatures(json_Route42DMtrs_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42DMtrs_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42DMtrs_11.addFeatures(features_Route42DMtrs_11);
var lyr_Route42DMtrs_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42DMtrs_11, 
                style: style_Route42DMtrs_11,
                popuplayertitle: "Route 42D Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route42DMtrs_11.png" /> Route 42D Mtrs'
            });
var format_Route42DStopsRecomPop_12 = new ol.format.GeoJSON();
var features_Route42DStopsRecomPop_12 = format_Route42DStopsRecomPop_12.readFeatures(json_Route42DStopsRecomPop_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42DStopsRecomPop_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42DStopsRecomPop_12.addFeatures(features_Route42DStopsRecomPop_12);
var lyr_Route42DStopsRecomPop_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42DStopsRecomPop_12, 
                style: style_Route42DStopsRecomPop_12,
                popuplayertitle: "Route 42D Stops Recom Pop",
                interactive: true,
                title: '<img src="styles/legend/Route42DStopsRecomPop_12.png" /> Route 42D Stops Recom Pop'
            });
var format_Route42DRecom_13 = new ol.format.GeoJSON();
var features_Route42DRecom_13 = format_Route42DRecom_13.readFeatures(json_Route42DRecom_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42DRecom_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42DRecom_13.addFeatures(features_Route42DRecom_13);
var lyr_Route42DRecom_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42DRecom_13, 
                style: style_Route42DRecom_13,
                popuplayertitle: "Route 42D Recom",
                interactive: true,
                title: '<img src="styles/legend/Route42DRecom_13.png" /> Route 42D Recom'
            });
var format_42URoute_14 = new ol.format.GeoJSON();
var features_42URoute_14 = format_42URoute_14.readFeatures(json_42URoute_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_42URoute_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_42URoute_14.addFeatures(features_42URoute_14);
var lyr_42URoute_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_42URoute_14, 
                style: style_42URoute_14,
                popuplayertitle: "42U Route",
                interactive: true,
                title: '<img src="styles/legend/42URoute_14.png" /> 42U Route'
            });
var format_Route42UStopsRecom_15 = new ol.format.GeoJSON();
var features_Route42UStopsRecom_15 = format_Route42UStopsRecom_15.readFeatures(json_Route42UStopsRecom_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42UStopsRecom_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42UStopsRecom_15.addFeatures(features_Route42UStopsRecom_15);
var lyr_Route42UStopsRecom_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42UStopsRecom_15, 
                style: style_Route42UStopsRecom_15,
                popuplayertitle: "Route 42U Stops Recom",
                interactive: true,
                title: '<img src="styles/legend/Route42UStopsRecom_15.png" /> Route 42U Stops Recom'
            });
var format_Route42StopChanges_16 = new ol.format.GeoJSON();
var features_Route42StopChanges_16 = format_Route42StopChanges_16.readFeatures(json_Route42StopChanges_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42StopChanges_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42StopChanges_16.addFeatures(features_Route42StopChanges_16);
var lyr_Route42StopChanges_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42StopChanges_16, 
                style: style_Route42StopChanges_16,
                popuplayertitle: "Route 42 Stop Changes",
                interactive: true,
                title: '<img src="styles/legend/Route42StopChanges_16.png" /> Route 42 Stop Changes'
            });
var format_Rt42MisplacedStops_17 = new ol.format.GeoJSON();
var features_Rt42MisplacedStops_17 = format_Rt42MisplacedStops_17.readFeatures(json_Rt42MisplacedStops_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt42MisplacedStops_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt42MisplacedStops_17.addFeatures(features_Rt42MisplacedStops_17);
var lyr_Rt42MisplacedStops_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt42MisplacedStops_17, 
                style: style_Rt42MisplacedStops_17,
                popuplayertitle: "Rt 42 Misplaced Stops",
                interactive: true,
    title: 'Rt 42 Misplaced Stops<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_0.png" /> Atlas Capco<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_1.png" /> Bhapkar Petrol Pump<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_2.png" /> Bharati Vidyapeeth Gate<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_3.png" /> Dandekar Pul<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_4.png" /> Dharmvir Sambhaji Manapa Shala<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_5.png" /> Empire Estate<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_6.png" /> Factory Hospital<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_7.png" /> Fergusson College<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_8.png" /> Goodluck Chowk<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_9.png" /> Gopi Chal<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_10.png" /> Ha<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_11.png" /> Kalbhor Nagar<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_12.png" /> Katraj<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_13.png" /> Katraj Sarpodyan<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_14.png" /> Kharalwadi<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_15.png" /> Lakshminarayan<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_16.png" /> Mariaai Gate Navin St Stand<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_17.png" /> Patil Estate<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_18.png" /> Phugewadi Jakat Naka<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_19.png" /> Pimpri Maha Nagarpalika<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_20.png" /> Poultry Farm Mumbai Road<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_21.png" /> Raja Bungalow<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_22.png" /> Shankar Maharaj Math<br />\
    <img src="styles/legend/Rt42MisplacedStops_17_23.png" /> <br />'
        });
var format_42UStoppop10Minswalk_18 = new ol.format.GeoJSON();
var features_42UStoppop10Minswalk_18 = format_42UStoppop10Minswalk_18.readFeatures(json_42UStoppop10Minswalk_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_42UStoppop10Minswalk_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_42UStoppop10Minswalk_18.addFeatures(features_42UStoppop10Minswalk_18);
var lyr_42UStoppop10Minswalk_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_42UStoppop10Minswalk_18, 
                style: style_42UStoppop10Minswalk_18,
                popuplayertitle: "42U Stop pop 10 Mins walk",
                interactive: true,
                title: '<img src="styles/legend/42UStoppop10Minswalk_18.png" /> 42U Stop pop 10 Mins walk'
            });
var format_Route42UMtrs_19 = new ol.format.GeoJSON();
var features_Route42UMtrs_19 = format_Route42UMtrs_19.readFeatures(json_Route42UMtrs_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42UMtrs_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42UMtrs_19.addFeatures(features_Route42UMtrs_19);
var lyr_Route42UMtrs_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42UMtrs_19, 
                style: style_Route42UMtrs_19,
                popuplayertitle: "Route 42U Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route42UMtrs_19.png" /> Route 42U Mtrs'
            });
var format_Route42RPop_20 = new ol.format.GeoJSON();
var features_Route42RPop_20 = format_Route42RPop_20.readFeatures(json_Route42RPop_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42RPop_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42RPop_20.addFeatures(features_Route42RPop_20);
var lyr_Route42RPop_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42RPop_20, 
                style: style_Route42RPop_20,
                popuplayertitle: "Route 42 R Pop",
                interactive: true,
                title: '<img src="styles/legend/Route42RPop_20.png" /> Route 42 R Pop'
            });
var format_newroutestoppop_21 = new ol.format.GeoJSON();
var features_newroutestoppop_21 = format_newroutestoppop_21.readFeatures(json_newroutestoppop_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_newroutestoppop_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_newroutestoppop_21.addFeatures(features_newroutestoppop_21);
var lyr_newroutestoppop_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_newroutestoppop_21, 
                style: style_newroutestoppop_21,
                popuplayertitle: "new route stop pop",
                interactive: true,
    title: 'new route stop pop<br />\
    <img src="styles/legend/newroutestoppop_21_0.png" /> 10 min<br />'
        });
var format_Allstoppopnew_22 = new ol.format.GeoJSON();
var features_Allstoppopnew_22 = format_Allstoppopnew_22.readFeatures(json_Allstoppopnew_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Allstoppopnew_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Allstoppopnew_22.addFeatures(features_Allstoppopnew_22);
var lyr_Allstoppopnew_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Allstoppopnew_22, 
                style: style_Allstoppopnew_22,
                popuplayertitle: "All stop pop new",
                interactive: true,
                title: '<img src="styles/legend/Allstoppopnew_22.png" /> All stop pop new'
            });
var format_Route42RMtr_23 = new ol.format.GeoJSON();
var features_Route42RMtr_23 = format_Route42RMtr_23.readFeatures(json_Route42RMtr_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route42RMtr_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route42RMtr_23.addFeatures(features_Route42RMtr_23);
var lyr_Route42RMtr_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route42RMtr_23, 
                style: style_Route42RMtr_23,
                popuplayertitle: "Route 42 R Mtr",
                interactive: true,
                title: '<img src="styles/legend/Route42RMtr_23.png" /> Route 42 R Mtr'
            });
var format_Rt42WealthIndex_24 = new ol.format.GeoJSON();
var features_Rt42WealthIndex_24 = format_Rt42WealthIndex_24.readFeatures(json_Rt42WealthIndex_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt42WealthIndex_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt42WealthIndex_24.addFeatures(features_Rt42WealthIndex_24);
var lyr_Rt42WealthIndex_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt42WealthIndex_24, 
                style: style_Rt42WealthIndex_24,
                popuplayertitle: "Rt 42 Wealth Index",
                interactive: true,
    title: 'Rt 42 Wealth Index<br />\
    <img src="styles/legend/Rt42WealthIndex_24_0.png" /> 0.706<br />\
    <img src="styles/legend/Rt42WealthIndex_24_1.png" /> 0.742<br />\
    <img src="styles/legend/Rt42WealthIndex_24_2.png" /> 0.866<br />\
    <img src="styles/legend/Rt42WealthIndex_24_3.png" /> 0.87<br />\
    <img src="styles/legend/Rt42WealthIndex_24_4.png" /> 0.941<br />\
    <img src="styles/legend/Rt42WealthIndex_24_5.png" /> 0.947<br />\
    <img src="styles/legend/Rt42WealthIndex_24_6.png" /> 1.06<br />\
    <img src="styles/legend/Rt42WealthIndex_24_7.png" /> 1.199<br />\
    <img src="styles/legend/Rt42WealthIndex_24_8.png" /> 1.214<br />\
    <img src="styles/legend/Rt42WealthIndex_24_9.png" /> 1.281<br />\
    <img src="styles/legend/Rt42WealthIndex_24_10.png" /> 1.439<br />\
    <img src="styles/legend/Rt42WealthIndex_24_11.png" /> 1.499<br />\
    <img src="styles/legend/Rt42WealthIndex_24_12.png" /> <br />'
        });
var format_42DStops_25 = new ol.format.GeoJSON();
var features_42DStops_25 = format_42DStops_25.readFeatures(json_42DStops_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_42DStops_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_42DStops_25.addFeatures(features_42DStops_25);
var lyr_42DStops_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_42DStops_25, 
                style: style_42DStops_25,
                popuplayertitle: "42D Stops",
                interactive: true,
    title: '42D Stops<br />\
    <img src="styles/legend/42DStops_25_0.png" /> 1.0<br />\
    <img src="styles/legend/42DStops_25_1.png" /> 10.0<br />\
    <img src="styles/legend/42DStops_25_2.png" /> 11.0<br />\
    <img src="styles/legend/42DStops_25_3.png" /> 12.0<br />\
    <img src="styles/legend/42DStops_25_4.png" /> 13.0<br />\
    <img src="styles/legend/42DStops_25_5.png" /> 14.0<br />\
    <img src="styles/legend/42DStops_25_6.png" /> 15.0<br />\
    <img src="styles/legend/42DStops_25_7.png" /> 16.0<br />\
    <img src="styles/legend/42DStops_25_8.png" /> 17.0<br />\
    <img src="styles/legend/42DStops_25_9.png" /> 18.0<br />\
    <img src="styles/legend/42DStops_25_10.png" /> 2.0<br />\
    <img src="styles/legend/42DStops_25_11.png" /> 3.0<br />\
    <img src="styles/legend/42DStops_25_12.png" /> 4.0<br />\
    <img src="styles/legend/42DStops_25_13.png" /> 5.0<br />\
    <img src="styles/legend/42DStops_25_14.png" /> 6.0<br />\
    <img src="styles/legend/42DStops_25_15.png" /> 7.0<br />\
    <img src="styles/legend/42DStops_25_16.png" /> 8.0<br />\
    <img src="styles/legend/42DStops_25_17.png" /> 9.0<br />\
    <img src="styles/legend/42DStops_25_18.png" /> <br />'
        });
var format_42UStops_26 = new ol.format.GeoJSON();
var features_42UStops_26 = format_42UStops_26.readFeatures(json_42UStops_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_42UStops_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_42UStops_26.addFeatures(features_42UStops_26);
var lyr_42UStops_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_42UStops_26, 
                style: style_42UStops_26,
                popuplayertitle: "42U Stops",
                interactive: true,
    title: '42U Stops<br />\
    <img src="styles/legend/42UStops_26_0.png" /> 1.0<br />\
    <img src="styles/legend/42UStops_26_1.png" /> 10.0<br />\
    <img src="styles/legend/42UStops_26_2.png" /> 11.0<br />\
    <img src="styles/legend/42UStops_26_3.png" /> 12.0<br />\
    <img src="styles/legend/42UStops_26_4.png" /> 13.0<br />\
    <img src="styles/legend/42UStops_26_5.png" /> 14.0<br />\
    <img src="styles/legend/42UStops_26_6.png" /> 15.0<br />\
    <img src="styles/legend/42UStops_26_7.png" /> 16.0<br />\
    <img src="styles/legend/42UStops_26_8.png" /> 17.0<br />\
    <img src="styles/legend/42UStops_26_9.png" /> 18.0<br />\
    <img src="styles/legend/42UStops_26_10.png" /> 2.0<br />\
    <img src="styles/legend/42UStops_26_11.png" /> 3.0<br />\
    <img src="styles/legend/42UStops_26_12.png" /> 4.0<br />\
    <img src="styles/legend/42UStops_26_13.png" /> 5.0<br />\
    <img src="styles/legend/42UStops_26_14.png" /> 6.0<br />\
    <img src="styles/legend/42UStops_26_15.png" /> 7.0<br />\
    <img src="styles/legend/42UStops_26_16.png" /> 8.0<br />\
    <img src="styles/legend/42UStops_26_17.png" /> 9.0<br />\
    <img src="styles/legend/42UStops_26_18.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Pimpalesaudagar_1.setVisible(true);lyr_PimpleGaurav_2.setVisible(true);lyr_Keshavnagar_3.setVisible(true);lyr_Yavatmal_4.setVisible(true);lyr_Lahagaon_5.setVisible(true);lyr_KirkeeBoundary_6.setVisible(true);lyr_PimpreChinchwadboundary_7.setVisible(true);lyr_PuneGeoBoundary_8.setVisible(true);lyr_AllPunePopReprojected_9.setVisible(true);lyr_42DRoute_10.setVisible(true);lyr_Route42DMtrs_11.setVisible(true);lyr_Route42DStopsRecomPop_12.setVisible(true);lyr_Route42DRecom_13.setVisible(true);lyr_42URoute_14.setVisible(true);lyr_Route42UStopsRecom_15.setVisible(true);lyr_Route42StopChanges_16.setVisible(true);lyr_Rt42MisplacedStops_17.setVisible(true);lyr_42UStoppop10Minswalk_18.setVisible(true);lyr_Route42UMtrs_19.setVisible(true);lyr_Route42RPop_20.setVisible(true);lyr_newroutestoppop_21.setVisible(true);lyr_Allstoppopnew_22.setVisible(true);lyr_Route42RMtr_23.setVisible(true);lyr_Rt42WealthIndex_24.setVisible(true);lyr_42DStops_25.setVisible(true);lyr_42UStops_26.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Pimpalesaudagar_1,lyr_PimpleGaurav_2,lyr_Keshavnagar_3,lyr_Yavatmal_4,lyr_Lahagaon_5,lyr_KirkeeBoundary_6,lyr_PimpreChinchwadboundary_7,lyr_PuneGeoBoundary_8,lyr_AllPunePopReprojected_9,lyr_42DRoute_10,lyr_Route42DMtrs_11,lyr_Route42DStopsRecomPop_12,lyr_Route42DRecom_13,lyr_42URoute_14,lyr_Route42UStopsRecom_15,lyr_Route42StopChanges_16,lyr_Rt42MisplacedStops_17,lyr_42UStoppop10Minswalk_18,lyr_Route42UMtrs_19,lyr_Route42RPop_20,lyr_newroutestoppop_21,lyr_Allstoppopnew_22,lyr_Route42RMtr_23,lyr_Rt42WealthIndex_24,lyr_42DStops_25,lyr_42UStops_26];
lyr_Pimpalesaudagar_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PimpleGaurav_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Keshavnagar_3.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Yavatmal_4.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Lahagaon_5.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_KirkeeBoundary_6.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PimpreChinchwadboundary_7.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PuneGeoBoundary_8.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_AllPunePopReprojected_9.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'layer': 'layer', 'path': 'path', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', 'Area': 'Area', });
lyr_42DRoute_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Route42DMtrs_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Route42DStopsRecomPop_12.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Route42DRecom_13.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_42URoute_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Route42UStopsRecom_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'distance': 'distance', 'angle': 'angle', });
lyr_Route42StopChanges_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'Difference': 'Difference', '__Diff': '__Diff', });
lyr_Rt42MisplacedStops_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_42UStoppop10Minswalk_18.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'Ridership': 'Ridership', '%Ridership': '%Ridership', });
lyr_Route42UMtrs_19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Route42RPop_20.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Pop': 'Pop', });
lyr_newroutestoppop_21.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Allstoppopnew_22.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', });
lyr_Route42RMtr_23.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'Time': 'Time', });
lyr_Rt42WealthIndex_24.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_42DStops_25.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Route_Name': 'Route_Name', 'Stg': 'Stg', 'RouteCode': 'RouteCode', 'Stop_Code': 'Stop_Code', 'Direction': 'Direction', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'Ticket_Fair': 'Ticket_Fair', });
lyr_42UStops_26.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Route_Name': 'Route_Name', 'Stg': 'Stg', 'RouteCode': 'RouteCode', 'Stop_Code': 'Stop_Code', 'Direction': 'Direction', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'Ticket_Fair': 'Ticket_Fair', 'unnamed__1_': 'unnamed__1_', });
lyr_Pimpalesaudagar_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PimpleGaurav_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Keshavnagar_3.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Yavatmal_4.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Lahagaon_5.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_KirkeeBoundary_6.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PimpreChinchwadboundary_7.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PuneGeoBoundary_8.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_AllPunePopReprojected_9.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', 'Area': 'TextEdit', });
lyr_42DRoute_10.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Route42DMtrs_11.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Route42DStopsRecomPop_12.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Route42DRecom_13.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_42URoute_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Route42UStopsRecom_15.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'distance': '', 'angle': '', });
lyr_Route42StopChanges_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'Difference': 'TextEdit', '__Diff': 'TextEdit', });
lyr_Rt42MisplacedStops_17.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_42UStoppop10Minswalk_18.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'Range', 'Ridership': 'Range', '%Ridership': 'TextEdit', });
lyr_Route42UMtrs_19.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Route42RPop_20.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Pop': 'Range', });
lyr_newroutestoppop_21.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Allstoppopnew_22.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'Range', });
lyr_Route42RMtr_23.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'Time': '', });
lyr_Rt42WealthIndex_24.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', });
lyr_42DStops_25.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Route_Name': 'TextEdit', 'Stg': 'TextEdit', 'RouteCode': 'TextEdit', 'Stop_Code': 'TextEdit', 'Direction': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ticket_Fair': 'TextEdit', });
lyr_42UStops_26.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Route_Name': 'TextEdit', 'Stg': 'TextEdit', 'RouteCode': 'TextEdit', 'Stop_Code': 'TextEdit', 'Direction': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ticket_Fair': 'TextEdit', 'unnamed__1_': 'TextEdit', });
lyr_Pimpalesaudagar_1.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PimpleGaurav_2.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Keshavnagar_3.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Yavatmal_4.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Lahagaon_5.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_KirkeeBoundary_6.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PimpreChinchwadboundary_7.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PuneGeoBoundary_8.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_AllPunePopReprojected_9.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'header label - visible with data', 'Area': 'header label - visible with data', });
lyr_42DRoute_10.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Route42DMtrs_11.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Route42DStopsRecomPop_12.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_Route42DRecom_13.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'OPTIONS': 'hidden field', 'FROM_ID': 'hidden field', 'TO_ID': 'hidden field', });
lyr_42URoute_14.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Route42UStopsRecom_15.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'distance': 'inline label - visible with data', 'angle': 'hidden field', });
lyr_Route42StopChanges_16.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'inline label - always visible', 'Difference': 'inline label - always visible', '__Diff': 'inline label - always visible', });
lyr_Rt42MisplacedStops_17.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'inline label - always visible', });
lyr_42UStoppop10Minswalk_18.set('fieldLabels', {'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'Ridership': 'header label - visible with data', '%Ridership': 'header label - visible with data', });
lyr_Route42UMtrs_19.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Route42RPop_20.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_newroutestoppop_21.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_Allstoppopnew_22.set('fieldLabels', {'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'Pop': 'header label - visible with data', });
lyr_Route42RMtr_23.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', 'Time': 'header label - visible with data', });
lyr_Rt42WealthIndex_24.set('fieldLabels', {'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'rwi': 'header label - visible with data', 'error': 'no label', 'Name': 'header label - visible with data', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', 'Pop': 'header label - visible with data', });
lyr_42DStops_25.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Route_Name': 'inline label - visible with data', 'Stg': 'inline label - visible with data', 'RouteCode': 'inline label - visible with data', 'Stop_Code': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Ticket_Fair': 'inline label - visible with data', });
lyr_42UStops_26.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'inline label - visible with data', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Route_Name': 'inline label - visible with data', 'Stg': 'inline label - visible with data', 'RouteCode': 'inline label - visible with data', 'Stop_Code': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Ticket_Fair': 'inline label - visible with data', 'unnamed__1_': 'inline label - visible with data', });
lyr_42UStops_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});