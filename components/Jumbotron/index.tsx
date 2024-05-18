import Link from "next/link";

const Jumbotron = () => {
  return (
    <>
      {/* Jumbotron */}
      <div className="relative h-[620px] overflow-hidden bg-[url('/images/about/banner.jpg')] bg-cover bg-no-repeat p-6 text-white md:mt-27 md:p-12">
        <h2 className="mt-32 text-center text-2xl font-bold md:ml-2 md:mt-20 md:mt-22 md:pr-16 md:text-left md:text-2xl">
          Mitra bisnis terbaik untuk
        </h2>
        <h1 className="mt-2 text-center text-4xl font-bold md:ml-2 md:mt-4 md:pr-16 md:text-left md:text-5xl">
          Solusi Kepabeanan
        </h1>
        <h1 className="text-center text-2xl font-bold md:ml-2 md:pr-16 md:text-left md:text-5xl">
          dan Cukai
        </h1>
        <p className="mt-4 text-center text-lg font-extralight md:ml-2 md:mt-6 md:pr-16 md:text-left md:text-lg">
          Layanan Konsultasi Kepabeanan dan Cukai untuk setiap masalah
        </p>
        <p className="mb-6 mt-2 text-center text-lg md:mb-8 md:ml-2 md:mt-2 md:pr-16 md:text-left md:text-lg">
          Anda. Didukung oleh Expert terbaik yang sangat berpengalaman.
        </p>

        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Link href={"/contact"}>
              <button
                aria-label="get started button"
                className="rounded-full bg-slate-200 px-7.5 py-2.5 font-bold text-black duration-300 ease-in-out hover:bg-slate-600 hover:text-white md:ml-2 md:inline-block"
              >
                Mulai Konsultasi !
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Jumbotron */}
    </>
  );
};

export default Jumbotron;
