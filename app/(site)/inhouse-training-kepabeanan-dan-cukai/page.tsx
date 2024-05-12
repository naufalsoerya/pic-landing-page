import ServiceForm from "@/components/FormService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inhouse Training Kepabeanan dan Cukai - Spesialis training kepabeanan, ekspor, dan impor",
  description: "PIC Training landing page",
  // other metadata
};

const FormContact = () => {
  return (
    <div>
      {/* Jumbotron 1*/}
      <div className="relative h-[220px] overflow-hidden bg-[url('/images/about/aboutBanner.png')] bg-cover bg-no-repeat p-12 text-white">
        <h1 className="ml-12 mt-6 text-5xl font-bold">Inhouse Training</h1>
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
                  src="/images/about/service5.jpg"
                  alt="product image"
                />
              </div>
              <h1 className="mb-5 text-3xl font-bold text-black">
                Inhouse Training Kepabeanan dan Cukai
              </h1>
              <p className="mb-5 text-justify">
                Pengembangan SDM agar mampu menjalankan fungsinya dengan baik
                perlu mendapatkan bekal pelatihan untuk meningkatkan
                kompetensinya. Bagi perusahaan yang menjalankan kegiatan ekspor
                impor, logistik, pelayaran dan sebagainya, kebutuhan update
                terhadap kompetensi kepabeanan menjadi suatu hal yang mutlak
                diperlukan. <br />
              </p>
              <p className="mb-5 text-justify">
                <span className="font-bold">
                  PIC telah berpengalaman sebagai provider training kepabeanan
                  terbaik sejak tahun 2015. Kami siap memberikan pelatihan
                  kepabeanan dan perdagangan internasional sesuai kebutuhan Tim
                  Eksim Perusahaan Anda.
                </span>{" "}
                Apabila training kepabeanan Tim Anda membutuhkan Sertifikat Ahli
                Kepabeanan (SAK), PIC Training juga menyediakan pelatihan khusus
                persiapan Ujian SAK.{" "}
                <span className="font-bold">
                  Silahkan klik pada Menu Training Kepabeanan
                </span>{" "}
                di bagian atas
                <br />
              </p>
              <p className="mb-5 text-justify">
                Kami memaklumi kesibukan dan menghargai waktu Anda yang sangat
                berharga. Untuk itu, konsultasi yang kami berikan sangat
                fleksibel mengikuti kesiapan Anda. Media konsultasi dapat
                dipilih sesuai kenyamanan Anda
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
