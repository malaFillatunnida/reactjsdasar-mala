import React from "react";
import NavbarComponent from "./NavbarComponent";
import Formulir from "./Formulir";
import Laptop from "./Laptop";

export default class Tugas extends React.Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Laptop />
          <Formulir />
        </div>
      </div>
    );
  }
}
