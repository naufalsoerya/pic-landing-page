"use client";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import Link from "next/link";
import Image from "next/image";

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
        <h1 className="ml-12 mt-8 text-5xl font-bold">Hubungi Kami</h1>
      </div>
      {/* Jumbotron 1*/}

      {/* First Text */}
      <section className="pb-26 overflow-hidden md:pt-40 xl:pb-16 xl:pt-1">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="ml-8 md:w-1/2">
              <h1 className="mb-5 text-3xl font-bold text-black">
                Hubungi Kami
              </h1>
              <p className="mb-5 text-justify">
                0812 8484 1223 (Training) <br />
                0818 0612 1812 (Consulting)
              </p>
              <p className="mb-10 text-justify">
                <span className="font-bold">info@pictraining.co.id</span> <br />
                <span className="font-bold">info@pictraining.id</span>{" "}
              </p>
              <Image
                src="/images/logo/logo-light.svg"
                alt="logo"
                width={250}
                height={10}
                className="mr-10 mb-5"
              />
              <p className="mb-10 text-justify">
                <span className="font-bold">
                  Komplek Rukan Taman (Ruko Medical) Pondok Kelapa
                </span>{" "}
                <br /> Jl. Pondok Kelapa Raya, Blok B No.9 Pondok Kelapa, Duren
                Sawit, JAKARTA TIMUR 13450
              </p>
              <div>
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
                  className="animate_top"
                >
                  <ul className="flex items-center gap-5">
                    <li>
                      <Link
                        href="http://facebook.com/kelaskepabeanan"
                        aria-label="social icon"
                      >
                        <svg
                          className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1499)">
                            <path
                              d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1499">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="http://instagram.com/trainingkepabeanan"
                        aria-label="social icon"
                      >
                        <svg
                          className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1502)">
                            <path
                              d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1502">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.youtube.com/@trainingkepabeanan9506"
                        aria-label="social icon"
                      >
                        <svg
                          className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1505)">
                            <path
                              d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1505">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              </div>
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
                        Hubungi Kami
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
                            <option disabled value="">Pilihan Layanan</option>
                            <option value="Training Ahli Kepabeanan">Training Ahli Kepabeanan</option>
                            <option value="Request Penawaran">Request Penawaran</option>
                            <option value="Konsultasi Masalah KC">Konsultasi Masalah KC</option>
                            <option value="Penetapan Klasifikasi Barang">Penetapan Klasifikasi Barang</option>
                            <option value="Audit KC">Audit KC</option>
                            <option value="Review Kepatuhan dan Mitigasi Resiko">Review Kepatuhan dan Mitigasi Resiko</option>
                            <option value="Inhouse Training KC">Inhouse Training KC</option>
                            <option value="Keberatan dan Banding">Keberatan dan Banding</option>
                            <option value="Request Penawaran">Request Penawaran</option>
                          </select>
                        </div>

                        <div className="mb-11.5 flex">
                          <textarea
                            placeholder="Pesan Anda"
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

      {/* gmaps */}
      <div className="relative h-[400px] overflow-hidden bg-[url('/images/about/maps.jpg')] bg-cover bg-no-repeat p-12 text-white">
        
      </div>
      {/* gmaps */}
    </div>
  );
};

export default FormContact;
