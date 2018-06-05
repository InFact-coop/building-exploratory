const islington = require('../islington');

const removeAndLoadData = async (requiredData) => {
  try {
    await islington.remove({});
    await islington.insertMany(requiredData);
    await islington.find();
    console.log(`successfully added ${requiredData.length} buildings`);
    process.exit();
  } catch (err) {
    console.error(`oops, something has gone wrong ${err}`);
  }
};

module.exports = removeAndLoadData;
