"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';

const Jumbotron2 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1280); // Sesuaikan dengan breakpoint yang diinginkan
    };

    // Mengecek ukuran layar awal
    handleResize();

    // Mendengarkan peristiwa resize window
    window.addEventListener('resize', handleResize);

    // Membersihkan event listener pada unmounting
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return null; // Mengembalikan null untuk menyembunyikan jumbotron pada perangkat mobile
  }

  return (
    <>
      {/* Jumbotron 1 */}
      <div className="relative h-[320px] overflow-hidden bg-[url('/images/about/aboutBanner(1).jpg')] bg-cover bg-no-repeat p-12 text-white">
        <div className="flex w-full flex-col md:flex-row md:justify-between">
          <div className="animate_top ml-60 mt-5 flex-1">
            <h4 className="mb-5 text-4xl font-bold">Request</h4>

            <ul>
              <li className="mb-5 text-justify text-2xl">
                Penawaran jasa layanan kami ?
              </li>
              <li className="font-lg mb-2 text-justify">
                <Link href={"/contact"}>
                  <button
                    aria-label="get started button"
                    className="mr-10 flex rounded-full bg-slate-200 px-10 py-3.5 font-bold text-blue-950 duration-300 ease-in-out hover:bg-blue-900 hover:text-white"
                  >
                    Click Here
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate_top font-lg mr-14 mt-5 flex-1">
            <h4 className="mb-5 ml-4 text-4xl font-bold">Hubungi Kami</h4>

            <ul>
              <li className="mb-4 text-justify">
                <Link href={"https://wa.me/6281806121812"} target="_blank">
                  <button
                    aria-label="get started button"
                    className="flex rounded-full bg-green-600 px-11.5 py-3.5 text-2xl font-bold text-white duration-300 ease-in-out hover:bg-slate-200 hover:text-green-600"
                  >
                    0812 9808 2677
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Jumbotron 1 */}

      {/* Jumbotron 2 */}
      <div className="flex">
        <div className="relative h-[440px] flex-1 overflow-hidden bg-[url('/images/about/banner(4).jpg')] bg-cover bg-no-repeat p-12 text-white">
          <div className="flex w-full flex-col md:flex-row md:justify-between">
            <div className="animate_top ml-12 mt-10 flex-1">
              <button
                aria-label="get started button"
                className="pointer-events-none ml-52 text-2xl mb-5 mt-4 flex rounded-2xl bg-blue-400 px-10 py-2.5 font-bold text-white duration-300 ease-in-out hover:bg-black"
              >
                Atau ...
              </button>
              <button
                aria-label="get started button"
                className="pointer-events-none mb-6 text-lg mt-4 flex rounded-2xl bg-slate-200 px-4 py-3.5 font-bold text-black duration-300 ease-in-out"
              >
                mungkin Anda membutuhkan Tempat Training Kepabeanan terbaik
                yang terbukti paling banyak Kelulusan Ujian SAK nya ?
              </button>
              <Link href={"https://pictraining.co.id/"} target="_blank">
                <button
                  aria-label="get started button"
                  className="flex rounded-full bg-slate-200 px-12 py-3 text-1xl font-bold text-black duration-300 ease-in-out hover:bg-yellow-400 hover:text-white mt-4 md:ml-50"
                >
                  Click Here
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative h-[440px] flex-1 overflow-hidden bg-[url('/images/about/jumbotron2.jpg')] bg-cover bg-no-repeat text-black">
          <div className="flex w-full flex-col md:flex-row md:justify-between">
            <div className="animate_top ml-12 mt-8 flex-1 flex justify-between items-center">
              <h4 className="mb-1 text-4xl font-bold text-center md:text-left">
                <span className="text-4xl font-bold">BEST PROVIDER</span> <br />
                <span className="text-2xl">TRAINING AHLI KEPABEANAN</span>
              </h4>
              <div className="mr-10 hidden md:block">
                <Image
                  src="/images/logo/logo-light.svg"
                  alt="logo"
                  width={250}
                  height={10}
                />
              </div>
            </div>
            <div className="block md:hidden mx-auto mt-4">
              <Image
                src="/images/logo/logo-light.svg"
                alt="logo"
                width={150}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Jumbotron 2 */}
    </>
  );
};

export default Jumbotron2;
