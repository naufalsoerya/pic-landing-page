import ServiceForm from "@/components/FormService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Perizinan Fasilitas Kepabeanan - Spesialis training kepabeanan, ekspor, dan impor",
  description: "PIC Training landing page",
  // other metadata
};

const FormContact = () => {
  return (
    <div>
      {/* Jumbotron 1*/}
      <div className="relative mt-22 h-[220px] overflow-hidden bg-[url('/images/about/aboutBanner.png')] bg-cover bg-no-repeat p-12 text-white md:mt-28">
        <h1 className="mt-5 text-3xl font-bold md:ml-5 md:mt-6 md:text-5xl">
          Perizinan Fasilitas
        </h1>
        <h2 className="font-lg text-lg md:ml-5">Kepabeanan</h2>
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
                  src="/images/icon/icon-9.jpg"
                  alt="product image"
                />
              </div>
              <h1 className="mb-5 text-3xl font-bold text-black">
                Perizinan Fasilitas Kepabeanan
              </h1>
              <p className="mb-5 text-justify">
                Berbagai macam bentuk fasilitas Kepabeanan telah diberikan oleh
                pemerintah kepada sektor Industri dan perdagangan. Baik dalam
                wujud fasilitas pelayanan atas prosedur impor dan ekspor, juga
                fasilitas fiskal kepabeanan berupa pembebasan, keringanan,
                penangguhan dan pengembalian bea masuk. <br />
              </p>
              <p className="mb-5 text-justify">
                Apabila perusahaan Anda dapat memanfaatkan fasilitas kepabeanan
                ini dengan baik, maka akan memberikan benefit yang cukup besar
                terutama dalam bentuk efisiensi biaya produksi. Namun demikian,
                agar bermanfaat secara optimal, jenis fasilitas kepabeanan ini
                harus cocok dengan nature of business Perusahaan Anda. <br />
              </p>
              <p className="mb-5 text-justify">
                <span className="font-bold">
                  Tim Konsultan PIC akan memberikan saran dan masukan dalam
                  memilih fasilitas kepabeanan yang cocok dengan karakter bisnis
                  Anda. Termasuk, apabila dibutuhkan, kami siap membantu Anda
                  dalam pengurusan perizinan fasilitas kepabeanan.
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
