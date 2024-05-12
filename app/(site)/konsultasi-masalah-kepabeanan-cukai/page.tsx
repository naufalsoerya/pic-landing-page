import ServiceForm from "@/components/FormService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Konsultasi Masalah Kepabeanan dan Cukai - Spesialis training kepabeanan, ekspor, dan impor",
  description: "PIC Training landing page",
  // other metadata
};

const FormContact = () => {
  return (
    <div>
      {/* Jumbotron 1*/}
      <div className="relative h-[220px] overflow-hidden bg-[url('/images/about/aboutBanner.png')] bg-cover bg-no-repeat p-12 text-white">
        <h1 className="ml-12 mt-6 text-5xl font-bold">Konsultasi Masalah</h1>
        <h2 className="font-lg ml-12 text-2xl">Kepabeanan dan Cukai</h2>
      </div>
      {/* Jumbotron 1*/}

      {/* First Text */}
      <section className="pb-26 overflow-hidden md:pt-40 xl:pb-16 xl:pt-1">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="ml-8 md:w-1/2">
              <div>
                <img
                  className="mb-8 mt-20 h-64 w-full rounded-lg"
                  src="/images/about/service1.jpg"
                  alt="product image"
                />
              </div>
              <h1 className="mb-5 text-3xl font-bold text-black">
                Konsultasi Masalah Kepabeanan dan Cukai
              </h1>
              <p className="mb-5 text-justify">
                Ketentuan regulasi kepabeanan dan cukai yang semakin dinamis
                seringkali tidak dapat diikuti oleh stakeholder dengan cepat.
                Sebagai akibatnya, timbul masalah-masalah kepabeanan dan cukai
                yang berpotensi merugikan baik secara finansiil maupun
                inefisiensi waktu layanan bagi stake holder. <br />
              </p>
              <p className="mb-5 text-justify">
                PIC hadir untuk memberikan advis dan solusi terhadap gap
                informasi terkait dinamika regulasi kepabeanan dan cukai.{" "}
                <span className="font-bold">
                  Konsultasikan masalah Kepabeanan dan Cukai Anda kepada kami
                  dan temukan solusi terbaik dari para Expert kami.
                </span>{" "}
                <br />
              </p>
              <p className="mb-5 text-justify">
                Kami memaklumi kesibukan dan menghargai waktu Anda yang sangat
                berharga. Untuk itu, konsultasi yang kami berikan sangat
                fleksibel mengikuti kesiapan Anda. Media konsultasi dapat
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
