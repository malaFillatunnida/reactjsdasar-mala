import React from "react";
import { Table } from "react-bootstrap";

// //Reduce
// const total_bayar = buku.reduce(
//   (total_harga, buku) => total_harga + buku.harga,
//   0
// );

const TabelLaptop = ({ bukus, editData, hapusData }) => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          padding: "15px",
          backgroundColor: "#006400",
          color: "white",
          borderRadius: "5px",
        }}
      >
        Mala Laptop's
      </h1>

      <Table striped bordered hover>
        <thead>
          <tr
            style={{
              textAlign: "center",
              padding: "15px",
              backgroundColor: "#006400",
              color: "white",
              borderRadius: "5px",
            }}
          >
            <th>No</th>
            <th>Nama Laptop</th>
            <th>QTY</th>
            <th>Harga</th>
            <th>Total Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {bukus.map((buku, index) => {
            return (
              <tr
                style={{
                  textAlign: "center",
                  backgroundColor: "#F0FFF0",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <td>{index + 1}.</td>
                <td>{buku.nama}</td>
                <td>{buku.QTY}</td>
                <td>Rp {buku.harga}</td>
                <td>Rp {buku.QTY * buku.harga}</td>
                <td>
                  <button
                    className="btn btn-success mr-1"
                    onClick={() => editData(buku.id)}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-warning mr-1"
                    onClick={() => hapusData(buku.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TabelLaptop;
