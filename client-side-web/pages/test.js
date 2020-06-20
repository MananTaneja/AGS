import axios from "axios";

class Test extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios.get("mcdonalds/menudetails");
  }
}
