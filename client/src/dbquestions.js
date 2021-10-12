const axios = require("axios");

const fetchData = async (quiz) => {
  const result = await axios("http://localhost:5000/" + quiz);
  return result;
};

export default fetchData;
