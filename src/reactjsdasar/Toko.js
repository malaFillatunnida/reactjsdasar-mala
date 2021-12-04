import React from "react";

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

const Map = () => {
  return (
    <div>
      <h1>Mala Laptop's</h1>
      <h2>Jenis Laptop yang Ready </h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Laptop</th>
            <th>QTY</th>
            <th>Harga</th>
            <th>Total Harga</th>
          </tr>
        </thead>
        {laptop.map((laptop, index) => (
          <tbody>
            <tr>
              <td>{index + 1}.</td>
              <td>{laptop.nama}</td>
              <td>{laptop.QTY}</td>
              <td>Rp {laptop.harga}</td>
              <td>Rp {laptop.QTY * laptop.harga}</td>
            </tr>
          </tbody>
        ))}
      </table>

      <h2>Promo Laptop yang harganya di bawah Rp 5.000.000</h2>
      <ul>
        {laptop
          .filter((laptop) => laptop.harga < 5000000)
          .map((laptop, index) => (
            <p>
              {index + 1}. {laptop.nama} = Rp {laptop.harga}
            </p>
          ))}
      </ul>

      <h3>Total Bayar : {total_bayar}</h3>
    </div>
  );
};

export default Map;
