var wms_layers = [];


        var lyr_BingVirtualEarth_0 = new ol.layer.Tile({
            'title': 'Bing Virtual Earth',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_vedoterulet_2 = new ol.format.GeoJSON();
var features_vedoterulet_2 = format_vedoterulet_2.readFeatures(json_vedoterulet_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vedoterulet_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vedoterulet_2.addFeatures(features_vedoterulet_2);
var lyr_vedoterulet_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vedoterulet_2, 
                style: style_vedoterulet_2,
                popuplayertitle: 'vedoterulet',
                interactive: true,
    title: 'vedoterulet<br />\
    <img src="styles/legend/vedoterulet_2_0.png" /> Belso vedoterulet<br />\
    <img src="styles/legend/vedoterulet_2_1.png" /> Kulso vedoterulet<br />\
    <img src="styles/legend/vedoterulet_2_2.png" /> A vedoterulet<br />\
    <img src="styles/legend/vedoterulet_2_3.png" /> B vedoterulet<br />\
    <img src="styles/legend/vedoterulet_2_4.png" /> C vedoterulet<br />\
    <img src="styles/legend/vedoterulet_2_5.png" /> <br />' });
var format_tervezett_vasut_3 = new ol.format.GeoJSON();
var features_tervezett_vasut_3 = format_tervezett_vasut_3.readFeatures(json_tervezett_vasut_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tervezett_vasut_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tervezett_vasut_3.addFeatures(features_tervezett_vasut_3);
var lyr_tervezett_vasut_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tervezett_vasut_3, 
                style: style_tervezett_vasut_3,
                popuplayertitle: 'tervezett_vasut',
                interactive: false,
                title: '<img src="styles/legend/tervezett_vasut_3.png" /> tervezett_vasut'
            });
var format_tervezett_ut_4 = new ol.format.GeoJSON();
var features_tervezett_ut_4 = format_tervezett_ut_4.readFeatures(json_tervezett_ut_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tervezett_ut_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tervezett_ut_4.addFeatures(features_tervezett_ut_4);
var lyr_tervezett_ut_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tervezett_ut_4, 
                style: style_tervezett_ut_4,
                popuplayertitle: 'tervezett_ut',
                interactive: true,
                title: '<img src="styles/legend/tervezett_ut_4.png" /> tervezett_ut'
            });
var format_hrsz_line_5 = new ol.format.GeoJSON();
var features_hrsz_line_5 = format_hrsz_line_5.readFeatures(json_hrsz_line_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hrsz_line_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hrsz_line_5.addFeatures(features_hrsz_line_5);
var lyr_hrsz_line_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hrsz_line_5, 
                style: style_hrsz_line_5,
                popuplayertitle: 'hrsz_line',
                interactive: false,
                title: '<img src="styles/legend/hrsz_line_5.png" /> hrsz_line'
            });
var format_hrsz_point_6 = new ol.format.GeoJSON();
var features_hrsz_point_6 = format_hrsz_point_6.readFeatures(json_hrsz_point_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hrsz_point_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hrsz_point_6.addFeatures(features_hrsz_point_6);
var lyr_hrsz_point_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hrsz_point_6, 
                style: style_hrsz_point_6,
                popuplayertitle: 'hrsz_point',
                interactive: false,
                title: '<img src="styles/legend/hrsz_point_6.png" /> hrsz_point'
            });
var format_fav_erzekenyseg_karszt_219_2004_7 = new ol.format.GeoJSON();
var features_fav_erzekenyseg_karszt_219_2004_7 = format_fav_erzekenyseg_karszt_219_2004_7.readFeatures(json_fav_erzekenyseg_karszt_219_2004_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fav_erzekenyseg_karszt_219_2004_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fav_erzekenyseg_karszt_219_2004_7.addFeatures(features_fav_erzekenyseg_karszt_219_2004_7);
var lyr_fav_erzekenyseg_karszt_219_2004_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fav_erzekenyseg_karszt_219_2004_7, 
                style: style_fav_erzekenyseg_karszt_219_2004_7,
                popuplayertitle: 'fav_erzekenyseg_karszt_219_2004',
                interactive: false,
                title: '<img src="styles/legend/fav_erzekenyseg_karszt_219_2004_7.png" /> fav_erzekenyseg_karszt_219_2004'
            });
var format_karszt_nyilt_8 = new ol.format.GeoJSON();
var features_karszt_nyilt_8 = format_karszt_nyilt_8.readFeatures(json_karszt_nyilt_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_karszt_nyilt_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_karszt_nyilt_8.addFeatures(features_karszt_nyilt_8);
var lyr_karszt_nyilt_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_karszt_nyilt_8, 
                style: style_karszt_nyilt_8,
                popuplayertitle: 'karszt_nyilt',
                interactive: true,
                title: '<img src="styles/legend/karszt_nyilt_8.png" /> karszt_nyilt'
            });

lyr_BingVirtualEarth_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_vedoterulet_2.setVisible(true);lyr_tervezett_vasut_3.setVisible(true);lyr_tervezett_ut_4.setVisible(true);lyr_hrsz_line_5.setVisible(true);lyr_hrsz_point_6.setVisible(true);lyr_fav_erzekenyseg_karszt_219_2004_7.setVisible(true);lyr_karszt_nyilt_8.setVisible(true);
var layersList = [lyr_BingVirtualEarth_0,lyr_OpenStreetMap_1,lyr_vedoterulet_2,lyr_tervezett_vasut_3,lyr_tervezett_ut_4,lyr_hrsz_line_5,lyr_hrsz_point_6,lyr_fav_erzekenyseg_karszt_219_2004_7,lyr_karszt_nyilt_8];
lyr_vedoterulet_2.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', 'TIPUS': 'TIPUS', });
lyr_tervezett_vasut_3.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', });
lyr_tervezett_ut_4.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', });
lyr_hrsz_line_5.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'GlobalWidt': 'GlobalWidt', });
lyr_hrsz_point_6.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'LTScale': 'LTScale', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'ScaleX': 'ScaleX', 'ScaleY': 'ScaleY', 'ScaleZ': 'ScaleZ', 'Owner': 'Owner', 'Style': 'Style', 'FontID': 'FontID', 'Text': 'Text', 'Height': 'Height', 'Angle': 'Angle', 'TxtWidth': 'TxtWidth', 'TxtOblique': 'TxtOblique', 'TxtGenType': 'TxtGenType', 'Horizontal': 'Horizontal', 'VerticalAl': 'VerticalAl', 'FontName': 'FontName', 'TxtBoxHt': 'TxtBoxHt', 'TxtBoxWd': 'TxtBoxWd', 'TxtRefWd': 'TxtRefWd', 'TxtAttach': 'TxtAttach', 'TxtDir': 'TxtDir', 'LnSpace': 'LnSpace', 'SpaceFct': 'SpaceFct', 'TxtMemo': 'TxtMemo', 'FeatureID': 'FeatureID', 'ZOrder': 'ZOrder', 'Annotation': 'Annotation', 'SymbolID': 'SymbolID', 'Status': 'Status', });
lyr_fav_erzekenyseg_karszt_219_2004_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ERZALKAT': 'ERZALKAT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_karszt_nyilt_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_vedoterulet_2.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', 'TIPUS': 'TextEdit', });
lyr_tervezett_vasut_3.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', });
lyr_tervezett_ut_4.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', });
lyr_hrsz_line_5.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrOn': 'Range', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'GlobalWidt': 'TextEdit', });
lyr_hrsz_point_6.set('fieldImages', {'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'LTScale': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'ScaleX': 'TextEdit', 'ScaleY': 'TextEdit', 'ScaleZ': 'TextEdit', 'Owner': 'TextEdit', 'Style': 'TextEdit', 'FontID': 'TextEdit', 'Text': 'TextEdit', 'Height': 'TextEdit', 'Angle': 'TextEdit', 'TxtWidth': 'TextEdit', 'TxtOblique': 'TextEdit', 'TxtGenType': 'TextEdit', 'Horizontal': 'TextEdit', 'VerticalAl': 'TextEdit', 'FontName': 'TextEdit', 'TxtBoxHt': 'TextEdit', 'TxtBoxWd': 'TextEdit', 'TxtRefWd': 'TextEdit', 'TxtAttach': 'Range', 'TxtDir': 'Range', 'LnSpace': 'Range', 'SpaceFct': 'TextEdit', 'TxtMemo': 'TextEdit', 'FeatureID': 'TextEdit', 'ZOrder': 'TextEdit', 'Annotation': 'TextEdit', 'SymbolID': 'TextEdit', 'Status': 'Range', });
lyr_fav_erzekenyseg_karszt_219_2004_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'ERZALKAT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_karszt_nyilt_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_vedoterulet_2.set('fieldLabels', {'Entity': 'hidden field', 'Handle': 'hidden field', 'Layer': 'inline label - always visible', 'LyrFrzn': 'hidden field', 'LyrOn': 'hidden field', 'Color': 'hidden field', 'Linetype': 'hidden field', 'Elevation': 'hidden field', 'LineWt': 'hidden field', 'RefName': 'hidden field', 'DocUpdate': 'hidden field', 'DocId': 'hidden field', 'GlobalWidt': 'hidden field', 'TIPUS': 'inline label - always visible', });
lyr_tervezett_vasut_3.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', });
lyr_tervezett_ut_4.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', });
lyr_hrsz_line_5.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'GlobalWidt': 'no label', });
lyr_hrsz_point_6.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'LTScale': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'ScaleX': 'no label', 'ScaleY': 'no label', 'ScaleZ': 'no label', 'Owner': 'no label', 'Style': 'no label', 'FontID': 'no label', 'Text': 'no label', 'Height': 'no label', 'Angle': 'no label', 'TxtWidth': 'no label', 'TxtOblique': 'no label', 'TxtGenType': 'no label', 'Horizontal': 'no label', 'VerticalAl': 'no label', 'FontName': 'no label', 'TxtBoxHt': 'no label', 'TxtBoxWd': 'no label', 'TxtRefWd': 'no label', 'TxtAttach': 'no label', 'TxtDir': 'no label', 'LnSpace': 'no label', 'SpaceFct': 'no label', 'TxtMemo': 'no label', 'FeatureID': 'no label', 'ZOrder': 'no label', 'Annotation': 'no label', 'SymbolID': 'no label', 'Status': 'no label', });
lyr_fav_erzekenyseg_karszt_219_2004_7.set('fieldLabels', {'OBJECTID': 'no label', 'ERZALKAT': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_karszt_nyilt_8.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_karszt_nyilt_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});