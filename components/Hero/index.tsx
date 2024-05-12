"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-22 md:pt-40 xl:pb-16 xl:pt-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2 ml-8">
              <h1 className="mb-5 text-4xl font-bold text-black">
                Apapun Masalah Kepabeanan dan Cukai Anda
              </h1>
              <button
                aria-label="get started button"
                className="pointer-events-none mb-5 mt-4 flex rounded-full bg-blue-400 px-4 py-1.5 font-bold text-white duration-300 ease-in-out hover:bg-blackho"
              >
                PERCAYAKAN KEPADA KAMI
              </button>
              <p className="text-justify">
                Berbekal pengalaman kami sebagai provider training kepabeanan
                terpercaya sejak tahun 2015 dan didukung oleh expert Kepabeanan
                dan Cukai terbaik dari berbagai kalangan: praktisi, dosen dan
                widyaiswara Kepabeananan serta mantan pejabat DJBC kami
                berkomitmen untuk memberikan solusi terbaik atas permasalahan
                kepabeanan dan cukai pada Perusahaan Anda. Kepuasan layanan dan
                Kepercayaan Anda adalah prioritas utama kami. Berikut komitmen
                kami untuk Anda.
              </p>
              <div className="mt-5 flex">
                <p className="mr-10">✅ Konsultan berpengalaman</p>
                <p>✅ Biaya hemat dan bersaing</p>
              </div>
              <div className="mt-2 flex">
                <p className="mr-21">✅ Privasi data terjamin</p>
                <p>✅ proses cepat dan efektif</p>
              </div>
              <div className="mt-2 flex">
                <p className="mr-4">✅ Fleksibilitas waktu dan media</p>
                <p>✅ Ramah dan komunikatif</p>
              </div>
              <div className="mt-8 flex">
                <Link href={"/konsultasi-masalah-kepabeanan-cukai"}>
                  <button
                    aria-label="get started button"
                    className="mr-10 flex rounded-full bg-blue-900 px-7.5 py-2.5 font-bold text-white duration-300 ease-in-out hover:bg-blackho"
                  >
                    FORM KONSULTASI
                  </button>
                </Link>
                <Link href={"https://wa.me/6281806121812"}>
                  <button
                    aria-label="get started button"
                    className="flex rounded-full bg-green-600 px-7.5 py-2.5 font-bold text-white duration-300 ease-in-out hover:bg-green-900"
                  >
                    0812 9808 2677
                  </button>
                </Link>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="w-full h-64max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 mt-5">
                  <img
                    className="rounded-t-lg p-8"
                    src="/images/about/banner(1).jpg"
                    alt="product image"
                  />
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ml-3">
                      Dipercaya dari berbagai perusahaan terkemuka !
                    </h5>
                  </a>
                  <div className="mb-5 mt-2.5 flex items-center ml-3">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <svg
                        className="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <span className="ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                      5.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
