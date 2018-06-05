require('env2')('./config.env');
const tabletop = require('tabletop');
const createDataObj = require('./helpers/createDataObj');
const removeAndLoadData = require('./models/queries/removeAndLoadData');

module.exports = (callback) => {
  const showInfo = (data, tabletop) => {
    const requiredData = createDataObj(data);
    removeAndLoadData(requiredData);
    callback();
  };

  tabletop.init({
    key: process.env.GOOGLE_SPREADSHEET_KEY,
    callback: showInfo,
    simpleSheet: true,
    parseNumbers: true
  });
};
