import ServiceForm from "@/components/FormService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Kuasa Hukum Banding Pengadilan Pajak - Spesialis training kepabeanan, ekspor, dan impor",
  description: "PIC Training landing page",
  // other metadata
};

const FormContact = () => {
  return (
    <div>
      {/* Jumbotron 1*/}
      <div className="relative mt-22 h-[220px] overflow-hidden bg-[url('/images/about/aboutBanner.png')] bg-cover bg-no-repeat p-12 text-white md:mt-28">
        <h1 className="mt-5 text-3xl font-bold md:ml-5 md:mt-6 md:text-5xl">
          Kuasa Hukum Banding
        </h1>
        <h2 className="font-lg text-lg md:ml-5">Pengadilan Pajak</h2>
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
                  src="/images/icon/icon-7.jpg"
                  alt="product image"
                />
              </div>
              <h1 className="mb-5 text-3xl font-bold text-black">
                Kuasa Hukum Banding Pengadilan Pajak
              </h1>
              <p className="mb-5 text-justify">
                Upaya keberatan atas penetapan notul dari Pejabat Bea dan Cukai
                tidak selamanya dapat diterima oleh Direktur Jenderal Bea dan
                Cukai. Apabila hal ini gagal, maka upaya hukum berikutnya dapat
                dilakukan dengan pengajuan banding ke Pengadilan Pajak. <br />
              </p>
              <p className="mb-5 text-justify">
                <span className="font-bold">
                  Tim PIC akan membantu perusahaan Anda untuk proses banding
                  atas sengketa kepabeanan dan cukai di Pengadilan Pajak. Sifat
                  bantuan yang kami tawarkan dapat Anda pilih, apakah hanya
                  bersifat asistensi penyiapan berkas dan argumen banding atau
                  full pendampingan hingga beracara di Pengadilan Pajak.
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
