import ServiceForm from "@/components/FormService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asistensi Keberatan Kepabeanan dan Cukai - Spesialis training kepabeanan, ekspor, dan impor",
  description: "PIC Training landing page",
  // other metadata
};

const FormContact = () => {
  return (
    <div>
      {/* Jumbotron 1*/}
      <div className="relative h-[220px] overflow-hidden bg-[url('/images/about/aboutBanner.png')] bg-cover bg-no-repeat p-12 text-white mt-22 md:mt-28">
        <h1 className="md:ml-5 md:mt-6 mt-5 md:text-5xl text-3xl font-bold">Asistensi Keberatan</h1>
        <h2 className="font-lg md:ml-5 text-lg">Kepabeanan dan Cukai</h2>
      </div>
      {/* Jumbotron 1*/}

      {/* First Text */}
      <section className="pb-26 overflow-hidden md:pt-40 xl:pb-16 xl:pt-1">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="ml-8 md:w-1/2 md:mr-0 mr-7">
              <div>
                <img
                  className="mb-8 mt-20 h-38 md:h-auto w-full rounded-lg"
                  src="/images/about/service6.jpg"
                  alt="product image"
                />
              </div>
              <h1 className="mb-5 text-3xl font-bold text-black">
                Asistensi Keberatan Kepabeanan dan Cukai
              </h1>
              <p className="mb-5 text-justify">
                Sengketa kepabeanan dan cukai adalah peristiwa yang sering
                terjadi dalam kegiatan impor. Importir tidak sependapat dengan
                penetapan Pejabat Bea dan Cukai. Dalam UU kepabeanan dan Cukai,
                upaya yang dapat dilakukan Importir atau pengusaha BKC yang
                menolak penetapan Pejabat Bea dan Cukai dapat menempuh jalur
                keberatan kepada Dirjend. Bea dan Cukai. Apabila hal ini gagal,
                maka upaya hukum berikutnya dapat dilakukan dengan pengajuan
                banding ke Pengadilan Pajak. <br />
              </p>
              <p className="mb-5 text-justify">
                <span className="font-bold">
                  Perusahan Anda terkena notul SPTNP ataupun SPKTNP dan Anda
                  tidak puas dengan itu? Tim kami akan membantu Anda melakukan
                  upaya keberatan kepada DJBC maupun banding ke Pengadilan pajak
                  .
                </span>{" "}
                <br />
              </p>
              <p className="mb-5 text-justify">
                Kami memaklumi kesibukan dan menghargai waktu Anda yang sangat
                berharga. Untuk itu, konsultasi yang kami berikan sangat
                fleksibel mengikuti kesiapan Anda . Media konsultasi dapat
                dipilih sesuai kenyamanan Anda.
              </p>
            </div>
            {/* Service Form */}
            <ServiceForm />
            {/* Service Form */}
          </div>
        </div>
      </section>
      {/* First Text */}
    </div>
  );
};

export default FormContact;
