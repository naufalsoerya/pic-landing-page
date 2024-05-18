import ServiceForm from "@/components/FormService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit Kepabeanan dan Cukai - Spesialis training kepabeanan, ekspor, dan impor",
  description: "PIC Training landing page",
  // other metadata
};

const FormContact = () => {
  return (
    <div>
      {/* Jumbotron 1*/}
      <div className="relative h-[220px] overflow-hidden bg-[url('/images/about/aboutBanner.png')] bg-cover bg-no-repeat p-12 text-white mt-22 md:mt-28">
        <h1 className="md:ml-12 md:mt-6 mt-5 md:text-5xl text-3xl font-bold">Audit Kepabeanan dan Cukai</h1>
        <h2 className="font-lg md:ml-12 text-lg">Konsultasi Bersama Expert</h2>
      </div>
      {/* Jumbotron 1*/}

      {/* First Text */}
      <section className="pb-26 overflow-hidden md:pt-40 xl:pb-16 xl:pt-1">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="ml-8 md:w-1/2 md:mr-0 mr-7">
              <div>
                <img
                  className="mb-8 mt-20 h-38 md:h-64 w-full rounded-lg"
                  src="/images/about/service3.jpg"
                  alt="product image"
                />
              </div>
              <h1 className="mb-5 text-3xl font-bold text-black">
                Audit Kepabeanan dan Cukai
              </h1>
              <p className="mb-5 text-justify">
              Pejabat DJBC berwenang melakukan audit kepabeanan sebagai konsekuensi diberlakukannya sistem self assesment, ketentuan nilai transaksi dan pemberian fasilitas fiskal kepabeanan. Ketentuan UU Kepabeanan dan Cukai mewajibkan Anda untuk menyimpan laporan keuangan, buku catatan, dan dokumen transaksi impor dalam waktu 10 tahun. Sebagai  tindakan mitigasi resiko apabila Perusahaan Anda akan menghadapi audit dari DJBC tentunya Tim Eksim Perusahaan Anda harus benar-benar siap. <br />
              </p>
              <p className="mb-5 text-justify">
                <span className="font-bold">
                Tim kami akan membantu kesiapan perusahaan Anda dan melakukan pre-Audit sebelum Auditor DJBC melakukan audit kepabeanan/cukai.
                </span>{" "}
                Pilihan paket konsultasi dapat bersifat Advis pre-audit saja maupun pelaksanaan audit internal secara comprehensif.
                <br />
              </p>
              <p className="mb-5 text-justify">
              Kami memaklumi kesibukan  dan menghargai waktu Anda yang sangat berharga. Untuk itu, konsultasi yang kami berikan sangat  fleksibel mengikuti kesiapan Anda . Media konsultasi dapat dipilih sesuai kenyamanan Anda.
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
