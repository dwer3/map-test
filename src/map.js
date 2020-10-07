import 'ol/ol.css';
import {View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {Fill, Stroke, Style} from 'ol/style';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {fromLonLat} from 'ol/proj';
import stands from './taxistands.js'

const defaultStyle = new Style({
    stroke: new Stroke({
        color: 'red',
        width: 1,
        }),
    fill: new Fill({
        color: 'rgba(255, 0, 0, 0.5)',
    }),
});

const tileLayer = new TileLayer({
    source: new OSM()
});

const source = new VectorSource({
    features: new GeoJSON({
        featureProjection: 'EPSG:3857',
    }).readFeatures(stands)
});

const vectorLayer = new VectorLayer({
    source: source, 
    style: defaultStyle,
});

const view = new View({
    center: fromLonLat([19.4,54.17]),
    zoom: 12
});

export {tileLayer, vectorLayer, view, source};