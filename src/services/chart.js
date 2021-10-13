export default {
  convertData(response) {
    const convertedData = {
      seriesData: [],
      categories: [],
    };

    response.values.forEach((element) => {
      convertedData.seriesData.push(element.y);
      convertedData.categories.push(element.x);
    });

    return convertedData;
  },
};
