import React from 'react';
import axios from 'axios';

// class Database extends React.Component {

//   constructor(props) {
//     super(props);
//     // this.deleteRecord = this.deleteRecord.bind(this);
//     this.state = { stories: [] };
//   }

    // This method will get the data from the database.
    const connection = () => {
      axios
            .get("http://localhost:5000/stories/")
            .then((response) => {
              console.log('hellllllooooooo')
              setState({ stories: response.data });
            })
            .catch(function (error) {
              console.log(error);
            });
        }

// }

export default connection;

