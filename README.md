# csv-generator-client
Library to generate downloadable csv files from client side data. 

# Installing
`npm install -save https://github.com/geosp/csv-generator-client.git`

This package requires `lodash/fp`, so make sure that's available in your app.

# Usage
```
import * as CsvGenerator from 'csv-generator-client'

let generator = CsvGenerator.getInstance()
generator.download(fileName, data)
```

# API

### getInstance
`getInstance(settings)` Where settings is an object. Default settings are  `{ separator: ',', addQuotes: false }` .

### download
`instance.download(fileName, dataArray)` Where `fileName` is required and `dataArray` is required to be of type `Array`.

