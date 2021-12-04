import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Formulir = ({ nama, QTY, harga, handleChange, handleSubmit, id }) => {
  return (
    <div className="mt-3">
      <Row>
        <Col>
          <h5
            style={{
              textAlign: "center",
              padding: "20px",
              backgroundColor: "#006400",
              color: "white",
              borderRadius: "5px",
            }}
          >
            {id ? "Edit Data" : "Tambah Data"}
          </h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#F0FFF0",
              padding: "15px",
              borderRadius: "5px",
            }}
          >
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Laptop</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="QTY">
              <Form.Label>QTY</Form.Label>
              <Form.Control
                type="number"
                name="QTY"
                value={QTY}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="harga">
              <Form.Label>Harga Laptop</Form.Label>
              <Form.Control
                type="number"
                name="harga"
                value={harga}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>

            <Button
              variant="danger"
              type="submit"
              style={{
                marginLeft: "580px",
              }}
            >
              Submit
            </Button>
          </Form>
          <h5
            style={{
              textAlign: "center",
              padding: "20px",
              backgroundColor: "#006400",
              color: "white",
              borderRadius: "5px",
            }}
          >
            " Thank You for Visiting our Shop "
          </h5>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
