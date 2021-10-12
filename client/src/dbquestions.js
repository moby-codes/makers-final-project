const axios = require("axios");

const fetchData = async (collection) => {
  const result = await axios("http://localhost:5000/" + collection);
  return result;
};

export default fetchData;
