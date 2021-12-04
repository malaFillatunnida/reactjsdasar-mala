import React from "react";
// import Operan from "./Operan";

export default class StateProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobil: "Avanza, Sport, Lamborgini",
    };
  }

  gantiMobil = (mobil_baru) => {
    this.setState({
      mobil: mobil_baru,
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.mobil}</h2>
        <button onClick={() => this.gantiMobil("Avanza, Lamborgini")}>
          Ganti Mobil
        </button>
        {/* <Operan makanan={this.state.makanan} /> */}
      </div>
    );
  }
}
