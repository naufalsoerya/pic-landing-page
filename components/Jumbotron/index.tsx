import Link from "next/link";

const Jumbotron = () => {
  return (
    <>
      {/* Jumbotron */}
      <div className="relative h-[620px] overflow-hidden bg-[url('/images/about/banner.jpg')] bg-cover bg-no-repeat p-12 text-white md:mt-27">
        <h2 className="ml-16 mt-22 pr-16 text-3xl font-bold">
          Mitra bisnis terbaik untuk
        </h2>
        <h1 className="ml-16 pr-16 text-6xl font-bold">Solusi Kepabeanan</h1>
        <h1 className="mb-5 ml-16 pr-16 text-6xl font-bold">dan Cukai</h1>
        <p className="ml-16 pr-16 text-lg font-extralight">
          Layanan Konsultasi Kepabeanan dan Cukai untuk setiap masalah
        </p>
        <p className="mb-8 ml-16 pr-16 text-lg font-extralight">
          Anda. Didukung oleh Expert terbaik yang sangat berpengalaman.
        </p>
        <Link href={"/contact"}>
          <button
            aria-label="get started button"
            className="ml-16 mt-5 flex rounded-full bg-slate-200 px-7.5 py-2.5 font-bold text-black duration-300 ease-in-out hover:bg-slate-600 hover:text-white"
          >
            Mulai Konsultasi !
          </button>
        </Link>
      </div>
      {/* Jumbotron */}
    </>
  );
};

export default Jumbotron;
