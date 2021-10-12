const axios = require("axios");

const axiosCall = async () => {
  const result = await axios("http://localhost:5000/stories/");
  console.log(result.data);
  return result.data[0];
};

const questions = axiosCall();

export default questions;

// axios
//   .get("http://localhost:5000/stories/")
//   .then(function (response) {
//     // handle success
//     console.log(response)
//     const questions = response.data;
//     //export default questions
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
