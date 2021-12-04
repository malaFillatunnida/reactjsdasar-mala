import React from "react";
import { Table } from "react-bootstrap";

const laptop = [
  {
    nama: "Acer",
    QTY: 11,
    harga: 6000000,
  },
  {
    nama: "Asus",
    QTY: 15,
    harga: 5000000,
  },
  {
    nama: "Lenovo",
    QTY: 25,
    harga: 4000000,
  },
  {
    nama: "Apple",
    QTY: 30,
    harga: 20000000,
  },
  {
    nama: "Xiaomi",
    QTY: 24,
    harga: 3000000,
  },
  {
    nama: "Hp",
    QTY: 17,
    harga: 7000000,
  },
  {
    nama: "Toshiba",
    QTY: 29,
    harga: 5000000,
  },
  {
    nama: "Huawei",
    QTY: 12,
    harga: 3000000,
  },
  {
    nama: "Dell",
    QTY: 23,
    harga: 4000000,
  },
  {
    nama: "Axioo",
    QTY: 18,
    harga: 2000000,
  },
];

//Reduce
const total_bayar = laptop.reduce(
  (total_harga, laptop) => total_harga + laptop.harga,
  0
);

const Tabel = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          padding: "15px",
          backgroundColor: "#DAA520",
          color: "white",
          borderRadius: "10px",
        }}
      >
        Mala Laptop's
      </h2>
      {/* <h2>Jenis Laptop yang Ready </h2> */}

      <Table striped bordered hover>
        <thead>
          <tr
            style={{
              textAlign: "center",
              backgroundColor: "#DAA520",
              color: "white",
              borderRadius: "10px",
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
        {laptop.map((laptop, index) => (
          <tbody>
            <tr
              style={{
                textAlign: "center",
                backgroundColor: "#FFFACD",
                borderRadius: "10px",
              }}
            >
              <td>{index + 1}.</td>
              <td>{laptop.nama}</td>
              <td>{laptop.QTY}</td>
              <td>Rp {laptop.harga}</td>
              <td>Rp {laptop.QTY * laptop.harga}</td>
              <td></td>
            </tr>
          </tbody>
        ))}
      </Table>

      <h4
        style={{
          textAlign: "center",
          padding: "15px",
          color: "white",
          backgroundColor: "#DAA520",
          borderRadius: "10px",
        }}
      >
        Total Bayar : Rp {total_bayar}
      </h4>

      <h4
        style={{
          textAlign: "center",
          padding: "15px",
          color: "white",
          backgroundColor: "#DAA520",
          borderRadius: "10px",
        }}
      >
        Promo Laptop yang harganya di bawah Rp 5.000.000
      </h4>
      <ul
        style={{
          textAlign: "center",
          backgroundColor: "#FFFACD",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        {laptop
          .filter((laptop) => laptop.harga < 5000000)
          .map((laptop, index) => (
            <p>
              {index + 1}. {laptop.nama} = Rp {laptop.harga}
            </p>
          ))}
      </ul>

      <h3
        style={{
          textAlign: "center",
          padding: "15px",
          color: "white",
          backgroundColor: "#DAA520",
          borderRadius: "10px",
        }}
      >
        Thank You
      </h3>
    </div>
  );
};

export default Tabel;
