import ServiceForm from "@/components/FormService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Penetapan Klasifikasi Barang Ekspor dan Impor - Spesialis training kepabeanan, ekspor, dan impor",
  description: "PIC Training landing page",
  // other metadata
};

const FormContact = () => {
  return (
    <div>
      {/* Jumbotron 1*/}
      <div className="relative h-[220px] overflow-hidden bg-[url('/images/about/aboutBanner.png')] bg-cover bg-no-repeat p-12 text-white mt-28">
        <h1 className="ml-12 mt-6 text-5xl font-bold">Penetapan Klasifikasi</h1>
        <h2 className="font-lg ml-12 text-2xl">Barang Ekspor dan Impor</h2>
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
                  src="/images/about/service2.jpg"
                  alt="product image"
                />
              </div>
              <h1 className="mb-5 text-3xl font-bold text-black">
                Penetapan Klasifikasi Barang
              </h1>
              <p className="mb-5 text-justify">
                Klasifikasi barang impor dan ekspor menggunakan panduan
                Harmonized System yang dikodifikasi oleh World Customs
                Organization (WCO). Untuk menetapkan klasifikasi barang secara
                akurat membutuhkan skill dan pengetahuan tersendiri. Faktanya,
                kasus-kasus sengketa penetapan klasifikasi barang masih menjadi
                salah satu kasus terbanyak di Indonesia. Perbedaan interpretasi
                klasifikasi antara pejabat DJBC dengan Importir berpotensi
                menimbulkan kerugian finansiil dan waktu. <br />
              </p>
              <p className="mb-5 text-justify">
                <span className="font-bold">
                  Butuh Advis tentang penetapan klasifikasi atas barang impor
                  atau ekspor ? Expert kami sangat berpengalaman dalam bidang
                  ini.
                </span>{" "}
                Memanfaatkan jasa layanan Advis penetapan klasifikasi barang
                dari kami adalah mitigasi resiko terbaik terhadap potensi
                kerugian perusahaan Anda di masa datang.
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
