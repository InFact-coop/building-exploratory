const createDataObj = (data) => {
  return data.map(item => {
    return {
      street_number: item['Street Number'],
      street_name: item['Street Name'],
      postcode: item['Post Code'],
      ward: item['Ward'],
      conservation_area: item['Conservation Area'], 
      date_built_actual: item['Date Built (actual)'],
      date_built_estimate: item['Date Built (estimated/ unconfirmed)'],
      architectural_style: item['Architectural Style'],
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
}

module.exports = createDataObj;


