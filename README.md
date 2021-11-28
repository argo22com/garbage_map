## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Data source

The [fcc.json](./src/datasource/fss.json) file is fetched from the following url:

```
https://services9.arcgis.com/8svDug0pVvBQzXWS/arcgis/rest/services/GB_FCC_STANOVISTE/FeatureServer/0/query
?f=json
&where=1%3D1
&returnGeometry=true
&spatialRel=esriSpatialRelIntersects
&outFields=*
&maxRecordCountFactor=4
&outSR=4326
&resultOffset=0
&resultRecordCount=8000
&cacheHint=true
```

The endpoint was found at the [official map](https://c-budejovice.maps.arcgis.com/apps/webappviewer/index.html?id=e41744713ec44ce786a797a7e5fd8057).
