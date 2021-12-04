import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Formulir = () => {
  return (
    <div className="mt-3">
      <Row>
        <Col>
          <h4>Tambah Data</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Laptop</Form.Label>
              <Form.Control type="text" name="nama" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="QTY">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control type="number" name="QTY" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="harga">
              <Form.Label>Harga Laptop</Form.Label>
              <Form.Control type="text" name="harga" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
