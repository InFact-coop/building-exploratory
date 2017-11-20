const tabletop = require('tabletop');
const islington = require('./models/islington');

const migrate = () => {
  console.log('you are in here')
  const showInfo = (data, tabletop) => {
    const requiredData = data.map(item => {
      return {
            street_number: item['Street Number'],
            street_name: item['Street Name'],
            postcode: item['Post Code'],
            ward: item['Ward'],
            conservation_area: item['Conservation Area'],
            date_built_actual: item['Date Built (actual)'],
            date_built_estimate: item['Date Built (estimated/ unconfirmed)'],
            building_type: item['Building Type'],
            current_use: item['Current Use'],
            description: item['Description of Building'],
            date_local_listing: item['Date of Local Listing'],
            significance: item['Significance Statement'],
            recommendation: item['Recommendation'],
            latitude: item['Latitude'],
            longitude: item['Longitude']
      };
    });

    const removeAndLoadData = async () => {
      try {
        await islington.remove({});
        await islington.insertMany(requiredData);
        const result = await islington.find()
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    }
    removeAndLoadData();
  };

  tabletop.init({
    key: 'docs.google.com/spreadsheets/d/185aSdvykYSkHx_ONFvgEWAokg7jfotmHQc1ROwRK2Zk/edit?usp=sharing',
    callback: showInfo,
    simpleSheet: true
  });
};

migrate();
