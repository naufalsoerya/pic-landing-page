"use client";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  media: string;
  place: string;
}

const FormContact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    media: "",
    place: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, options } = e.target;
    const selectedOptions = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: selectedOptions,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        cache: "no-store",
      });
      console.log(response.body, "<<<<<<<<<<<<<<<<");
      if (response.ok) {
        // Proses jika pengiriman form berhasil
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success").then(() => {
              router.push("/");
            });
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info").then(() => {
              router.push("/");
            });
          }
        });
      } else {
        // Proses jika pengiriman Form gagal
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Form gagal dikirim",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error mengirim form",
      });
    }
  };

  return (
    <div>
      {/* Jumbotron 1*/}
      <div className="relative h-[220px] overflow-hidden bg-[url('/images/about/aboutBanner.png')] bg-cover bg-no-repeat p-12 text-white">
        <h1 className="ml-12 mt-6 text-5xl font-bold">Audit Kepabeanan  dan Cukai</h1>
        <h2 className="font-lg ml-12 text-2xl">Konsultasi Bersama Expert</h2>
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

            <div className="animate_right hidden lg:block">
              {/* <!-- ===== Contact Start ===== --> */}
              <section id="support" className="px-4 md:px-8 2xl:px-0">
                <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-14">
                  <div className="gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
                    <motion.div
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: -20,
                        },

                        visible: {
                          opacity: 1,
                          y: 0,
                        },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 1, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="animate_top w-full rounded-xl bg-blue-950 px-14 py-12 shadow-solid-8"
                    >
                      <h2 className="mb-15 text-3xl font-bold text-white xl:text-sectiontitle2">
                        Form Konsultasi
                      </h2>

                      <form onSubmit={handleSubmit}>
                        <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                          <input
                            type="text"
                            name="name"
                            placeholder="Nama Anda/Perusahaan"
                            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-white focus-visible:outline-none dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                            onChange={handleChange}
                            value={formData.name}
                          />

                          <input
                            type="email"
                            name="email"
                            placeholder="Email Anda"
                            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-white focus-visible:outline-none dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                            onChange={handleChange}
                            value={formData.email}
                          />
                        </div>

                        <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                          <input
                            type="text"
                            name="place"
                            placeholder="Kota Asal"
                            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-white focus-visible:outline-none dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                            onChange={handleChange}
                            value={formData.place}
                          />

                          <input
                            type="text"
                            name="phone"
                            placeholder="Nomor Anda"
                            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-white focus-visible:outline-none dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                            onChange={handleChange}
                            value={formData.phone}
                          />
                        </div>

                        <div className="mb-11.5">
                          <select
                            name="media"
                            className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-white focus-visible:outline-none dark:focus:border-manatee dark:focus:placeholder:text-white"
                            onChange={handleChangeSelect}
                            value={formData.media}
                          >
                            <option disabled value="">Pilihan Media Konsultasi</option>
                            <option value="Offline di kantor PIC">Offline di kantor PIC</option>
                            <option value="Offline di tempat lain">Offline di tempat lain</option>
                            <option value="Online via zoom">Online via zoom</option>
                            <option value="Konsultasi by WA/Email">Konsultasi by WA/Email</option>
                            <option value="Konsultasi by Phone">Konsultasi by Phone</option>
                          </select>
                        </div>

                        <div className="mb-11.5 flex">
                          <textarea
                            placeholder="Deskripsi Kebutuhan Anda"
                            rows={5}
                            name="message"
                            className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-white focus-visible:outline-none dark:focus:border-manatee dark:focus:placeholder:text-white"
                            onChange={handleChange}
                            value={formData.message}
                          ></textarea>
                        </div>

                        <div className="flex flex-wrap gap-4 xl:justify-between ">
                          <button
                            aria-label="send message"
                            className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 font-medium text-black duration-300 ease-in-out hover:bg-slate-300"
                            type="submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  </div>
                </div>
              </section>
              {/* <!-- ===== Contact End ===== --> */}
            </div>
          </div>
        </div>
      </section>
      {/* First Text */}
    </div>
  );
};

export default FormContact;
