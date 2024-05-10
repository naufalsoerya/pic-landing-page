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
        <p className="ml-16 mb-10 pr-16 text-lg font-extralight">
          Anda. Didukung oleh Expert terbaik yang sangat berpengalaman.
        </p>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
          <div className="flex h-full items-center justify-center"></div>
        </div>
        <button
          aria-label="get started button"
          className="mt-5 flex rounded-full bg-slate-200 px-7.5 py-2.5 text-black font-bold duration-300 ease-in-out hover:bg-blackho ml-16"
        >
          Mulai Konsultasi !
        </button>
      </div>
      {/* Jumbotron */}
    </>
  );
};

export default Jumbotron;
