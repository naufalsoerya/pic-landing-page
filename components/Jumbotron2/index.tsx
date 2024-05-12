import Image from "next/image";
import Link from "next/link";

const Jumbotron2 = () => {
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
                    className="mr-10 flex rounded-full bg-gray-400 px-10.5 py-3.5 font-bold text-blue-950 duration-300 ease-in-out hover:bg-gray-600"
                  >
                    Click Here
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate_top font-lg mr-14 mt-5 flex-1">
            <h4 className="mb-7 ml-5 text-4xl font-bold">Hubungi Kami</h4>

            <ul>
              <li className="mb-4 text-justify">
                <Link href={"https://wa.me/6281806121812"}>
                  <button
                    aria-label="get started button"
                    className="flex rounded-full bg-green-600 px-11.5 py-3.5 text-2xl font-bold text-white duration-300 ease-in-out hover:bg-green-900"
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
        <div className="relative h-[440px] flex-1 overflow-hidden bg-slate-500 p-12 text-white">
          <div className="flex w-full flex-col md:flex-row md:justify-between">
            <div className="animate_top ml-12 mt-10 flex-1">
              <h4 className="mb-5 text-4xl font-bold">Atau ...</h4>
              <p className="mb-6 mr-10 text-2xl">
                mungkin Anda membutuhkan Tempat Trainining Kepabeanan terbaik
                yang terbukti paling banyak Kelulusan Ujian SAK nya ?{" "}
              </p>
              <Link href={"https://pictraining.co.id/"}>
                <button
                  aria-label="get started button"
                  className="flex rounded-full bg-blue-900 px-14.5 py-3 text-2xl font-bold text-white duration-300 ease-in-out hover:bg-blue-950"
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
              <h4 className="mb-1"><span className="text-4xl font-bold">BEST PROVIDER</span> <br /> <span className="text-2xl">TRAINING AHLI KEPABEANAN</span></h4>
              <Image
                src="/images/logo/logo-light.svg"
                alt="logo"
                width={250}
                height={10}
                className="mr-10"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Jumbotron2 */}
    </>
  );
};

export default Jumbotron2;
