import React from "react";

// const harga = 3000;
// harga = 3000;
// const harga = 3000;

//menampilkan data sesuai kondisi if
// var harga = 20000;
// if (false) {
//   var harga = 30000;
// }

//menampilkan data sesuai variabel
let harga = 20000;
if (true) {
  let harga = 40000;
}

// const Variabel = () => {
//   return (
//     <div>
//       <h2>Belajar Variabel</h2>
//     </div>
//   );
// };

const Variabel = () => {
  return (
    <div>
      <h2>Harga : {harga}</h2>
    </div>
  );
};
export default Variabel;
