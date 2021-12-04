import React from "react";
import Sublifecycle from "./Sublifecycle";

export default class Lifecycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      makanan: "Bakso",
      data: {},
      tampilHalamamSub: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }

  ubahMakanan(value) {
    this.setState({
      makanan: value,
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        {this.state.tampilHalamamSub && (
          <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />
        )}

        <button
          onClick={() =>
            this.setState({ tampilHalamamSub: !this.state.tampilHalamamSub })
          }
        >
          Tampilkan Halaman Sub
        </button>
      </div>
    );
  }
}
