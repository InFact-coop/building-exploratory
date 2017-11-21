require('env2')('./config.env');
const tabletop = require('tabletop');
const createDataObj = require('./helpers/createDataObj');
const removeAndLoadData = require('./models/queries/removeAndLoadData');

const migrate = () => {
  const showInfo = (data, tabletop) => {
    const requiredData = createDataObj(data);
    removeAndLoadData(requiredData);  
  };

  tabletop.init({ 
    key: process.env.GOOGLE_SPREADSHEET_KEY,
    callback: showInfo,
    simpleSheet: true
  });
};

migrate();
