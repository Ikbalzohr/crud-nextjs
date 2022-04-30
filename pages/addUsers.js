import React, { useEffect, useState } from "react";
import axios from "axios";
import useRouter from "next/router";

const AddUsers = () => {
  const [nama, setNama] = useState("");
  const [noWa, setNoWA] = useState("");
  const [kota, setKota] = useState("");
  const [kelurahan, setKel] = useState("");
  const [img, setImg] = useState(false);

  useEffect(() => {
    if (nama == "") {
      setImg(false);
    } else if (nama != "") {
      setImg(true);
    }
  }, [nama]);

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(process.env.MONGO_URI, {
        nama: nama,
        noWa: noWa,
        kota: kota,
        kelurahan: kelurahan,
      });
      useRouter.push("/userlist");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto border-4 max-w-3xl p-4 m-14 rounded-lg">
      <div className="text-green-600 text-xl font-bold p-3">Tambahkan Pengguna</div>

      {img ? (
        <div className="max-w-md px-8 py-4 mx-auto mb-5  bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img
              className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
              alt="Testimonial avatar"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
            />
          </div>

          <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">{nama}</h2>

          <p className="mt-2 text-gray-600 dark:text-gray-200">Alamat </p>
          <p className="mt-2 text-gray-600 dark:text-gray-200">Kota : {kota}</p>
          <p className="mt-2 text-gray-600 dark:text-gray-200">Kelurahan : {kelurahan}</p>

          <div className="flex justify-end mt-4">
            <a href="#" className="text-xl font-medium text-blue-500 dark:text-blue-300">
              {noWa}
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
      <form onSubmit={saveUser}>
        <div className="m-auto my-2 border-2 border-green-200 max-w-xl p-4 rounded-lg">
          <label>Nama :</label>
          <div className="border-2">
            <input type="text" placeholder="Nama Anda" className="w-full" value={nama} onChange={(e) => setNama(e.target.value)} />
          </div>
        </div>
        <div className="m-auto my-2 border-2 max-w-xl p-4 rounded-lg border-green-200">
          <label>No WhatsAPP :</label>
          <div className="border-2">
            <input type="text" placeholder="Nomor WhatsApp Anda" className="w-full" value={noWa} onChange={(e) => setNoWA(e.target.value)} />
          </div>
        </div>
        <div className="m-auto my-2 border-2 max-w-xl p-4 rounded-lg border-green-200">
          <label>Alamat :</label>
          <div className="border-2">
            <input type="text" placeholder="Kota Anda" className="w-full" value={kota} onChange={(e) => setKota(e.target.value)} />
            <input type="text" placeholder="Kelurahan Anda" className="w-full" value={kelurahan} onChange={(e) => setKel(e.target.value)} />
          </div>
        </div>
        <button
          className="px-4 py-1 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddUsers;
