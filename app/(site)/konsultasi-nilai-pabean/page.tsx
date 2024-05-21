import ServiceForm from "@/components/FormService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Konsultasi Nilai Pabean - Spesialis training kepabeanan, ekspor, dan impor",
  description: "PIC Training landing page",
  // other metadata
};

const FormContact = () => {
  return (
    <div>
      {/* Jumbotron 1*/}
      <div className="relative mt-22 h-[220px] overflow-hidden bg-[url('/images/about/aboutBanner.png')] bg-cover bg-no-repeat p-12 text-white md:mt-28">
        <h1 className="mt-7 text-3xl font-bold md:ml-5 md:mt-10 md:text-5xl">
          Konsultasi Nilai Pabean
        </h1>
        {/* <h2 className="font-lg text-lg md:ml-5">Pengadilan Pajak</h2> */}
      </div>
      {/* Jumbotron 1*/}

      {/* First Text */}
      <section className="pb-26 overflow-hidden md:pt-40 xl:pb-16 xl:pt-1">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col xl:gap-32.5 lg:flex-row lg:items-center lg:gap-8">
            <div className="ml-8 mr-7 md:mr-0 md:w-1/2">
              <div>
                <img
                  className="h-38 mb-8 mt-20 w-full rounded-lg md:h-auto"
                  src="/images/icon/icon-8.jpg"
                  alt="product image"
                />
              </div>
              <h1 className="mb-5 text-3xl font-bold text-black">
                Konsultasi Nilai Pabean
              </h1>
              <p className="mb-5 text-justify">
                Notul atas pemberitahuan impor barang karena nilai pabean
                seringkali menjadi masalah yang dialami oleh importir. Importir
                merasa sudah memberitahukan dengan jujur nilai invoice yang
                ditransaksikan namun kok masih kena notul (SPTNP)?. <br />
              </p>
              <p className="mb-5 text-justify">
                Perbedaan pemahaman importir dengan regulasi sistem nilai pabean
                yang diterapkan Bea dan Cukai menjadi pokok utama permasalahan.
                Sistem nilai pabean yang berlaku di Indonesia mengacu pada
                ketentuan internasional yaitu... Ada 6 metode penetapan nilai
                pabean yang digunakan secara hirarki oleh Pejabat Bea dan Cukai.
                Setiap metode penetapan nilai pabean harus memenuhi syarat dan
                ketentuan masing-masing. <br />
              </p>
              <p className="mb-5 text-justify">
                <span className="font-bold">
                  Apakah Anda memiliki masalah terkena notul karena nilai
                  pabean? Ingin berkonsultasi bagaimana cara mengantisipasinya
                  dan mencari solusi terbaik? Hindari potensi masalah nilai
                  pabean ini dengan konsultasi kepada expert kami !.
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
