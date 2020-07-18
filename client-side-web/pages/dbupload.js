import axios from "axios";
import React from "react";

class dbupload extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // const data = {
    //     collection: "SampleMenu",
    //     categoryname: "Pepsi",
    // }
    // axios
    //     .post(`http://localhost:5000/test/category`,data)
    //     .then((res) => {
    //         console.log("sent");
    //     })
    //     .catch((err) => {
    //         res.send("error: " + err);
    //        }
    //        )
  }

  render() {
    const data = {
      collection: "SampleMenu",
      categoryname: "Pepsi",
    };

    axios
      .post(`https://ags-restaurant.web.app/test/category`, data)
      .then((res) => {
        console.log("sent");
      })
      .catch((err) => {
        console.log("error: " + err);
      });
    return <h1>test</h1>;
  }
}
export default dbupload;
