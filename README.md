# building-exploratory
App for accessing the listed buildings in the borough of Islington

### Running the app locally. 

You will need to have node(8.6.0), npm(5.5.1) and mongodb(start the db server too) installed on your machine. 

```
git clone repo && cd into/repo
npm install

// run migration of data from spreadsheet
node migrateSpreadsheet.js

// run the app
npm run start:dev
```