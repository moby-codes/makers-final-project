const axios = require("axios");

// const axiosCall = async () => {
//   const result = await axios("http://localhost:5000/stories/");
//   //console.log(result.data);
//   return result.data;
// };

// const questions = axiosCall();

// export default questions;

// const axiosCall = () => {
//   axios
//   .get("http://localhost:5000/stories/")
//   .then((response) => {
//     console.log(response.data)
//     return response.data
//   })
//   // .then((data) => {
//   //   console.log(data)
//   // })
// }

const fetchData = async () => {
  const result = await axios("http://localhost:5000/stories/");
  return result;
};

export default fetchData;
