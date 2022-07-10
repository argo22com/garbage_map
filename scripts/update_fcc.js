const https = require("https"); // or 'https' for https:// URLs
const fs = require("fs");

const url = `https://services9.arcgis.com/8svDug0pVvBQzXWS/arcgis/rest/services/GB_FCC_STANOVISTE/FeatureServer/0/query
?f=json
&where=1%3D1
&returnGeometry=true
&spatialRel=esriSpatialRelIntersects
&outFields=*
&maxRecordCountFactor=4
&outSR=4326
&resultOffset=0
&resultRecordCount=8000
&cacheHint=true`;

const file = fs.createWriteStream("./src/datasource/generated/fcc.json");
https.get(url, (response) => response.pipe(file));
