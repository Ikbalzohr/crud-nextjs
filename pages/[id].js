import React, { useEffect, useState } from "react";
import axios from "axios";
import useRouter from "next/router";
import Link from "next/link";

const EditUser = () => {
  const [nama, setNama] = useState("");
  const [noWa, setNoWA] = useState("");
  const [kota, setKota] = useState("");
  const [kelurahan, setKel] = useState("");

  useEffect(() => {
    const getUserById = async () => {
      // const router = useRouter
      // let { id } = router.query
      const url = window.location.pathname;
      try {
        const response = await axios.get(process.env.MONGO_URI + url);
        setNama(response.data.nama);
        setNoWA(response.data.noWa);
        setKota(response.data.kota);
        setKel(response.data.kelurahan);
      } catch (error) {
        console.log(error);
      }
    };
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    const url = window.location.pathname;
    try {
      await axios.patch(process.env.MONGO_URI + url, {
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
      <form onSubmit={updateUser}>
        <div className="m-auto my-2 border-2 max-w-xl p-4 rounded-lg">
          <label>Nama :</label>
          <div className="border-2">
            <input type="text" placeholder="Nama Anda" className="w-full" defaultValue={nama} onChange={(e) => setNama(e.target.value)} />
          </div>
        </div>
        <div className="m-auto my-2 border-2 max-w-xl p-4 rounded-lg">
          <label>No WhatsAPP :</label>
          <div className="border-2">
            <input type="text" placeholder="Nomor WhatsApp Anda" className="w-full" defaultValue={noWa} onChange={(e) => setNoWA(e.target.value)} />
          </div>
        </div>
        <div className="m-auto my-2 border-2 max-w-xl p-4 rounded-lg">
          <label>Alamat :</label>
          <div className="border-2">
            <input type="text" placeholder="Kota Anda" className="w-full" defaultValue={kota} onChange={(e) => setKota(e.target.value)} />
            <input type="text" placeholder="Kelurahan Anda" className="w-full" defaultValue={kelurahan} onChange={(e) => setKel(e.target.value)} />
          </div>
        </div>
        <button
          className="px-4 py-1 mt-3 mx-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          type="submit"
        >
          Update
        </button>
      </form>
      <div className="container m-4">
        <Link href={"/userlist"}>
          <a className="px-7 py-1 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Exit
          </a>
        </Link>
      </div>
    </div>
  );
};

export default EditUser;
