const axios = require("axios");

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

async function questions() {
  try {
    const response = await axios.get('http://localhost:5000/stories/');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}




export default questions;
