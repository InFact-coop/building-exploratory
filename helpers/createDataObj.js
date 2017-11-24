const createDataObj = (data) => {
  return data.map((item, i) => {
    return {
      id: ++i,
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
      longitude: item['Longitude'],
      featured_image: item['Featured Image'],
      second_image: item['Second Image'],
      third_image: item['Third Image'],
      fourth_image: item['Fourth Image'],
      fifth_image: item['Fifth Image']
    };
  });
}

module.exports = createDataObj;
