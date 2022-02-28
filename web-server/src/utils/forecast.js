const forecast = (latitude, longitude, callback) => {
  const obj = {
    latitude,
    longitude
  };

  const error = null;

  callback(error, obj);
};

export default forecast;
