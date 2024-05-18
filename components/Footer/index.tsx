"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-slate-500 text-white">
        <div className="mx-auto max-w-c-1390 px-4 md:px-4 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="md:py-20 py-12 lg:py-14">
            <div className="flex flex-wrap gap-9">
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
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-full px-4 md:w-1/2 md:px-0 lg:w-1/3 md:ml-12 md:mr-5.5"
              >
                <Link href="index.html" className="relative">
                  <Image
                    width={200}
                    height={100}
                    src="/images/logo/logo-light.svg"
                    alt="Logo"
                    className=""
                  />
                </Link>
                <p className="mb-8 mt-5 text-justify">
                  Platform belajar dan konsultasi spesialis kepabeanan dan cukai
                  milik PT Pro Insani Cendekia
                </p>
                <div className="flex items-center">
                  <Image
                    width={60}
                    height={60}
                    src="/images/logo/logo-home.png"
                    alt="Logo"
                    className="mr-5"
                  />
                  <p className="mb-1.5 text-justify text-sectiontitle">
                    <span className="font-bold">LOKASI KAMI</span>
                    <br />
                    Komplek Rukan Taman (Ruko Medical) Pondok Kelapa. Jl. Pondok
                    Kelapa Raya, Blok D/6 Pondok Kelapa, Duren Sawit, JAKARTA
                    TIMUR 13450
                  </p>
                </div>
              </motion.div>

              <div className="mr-14 flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/4">
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
                  <h4 className="md:ml-0 ml-6 mb-5 mt-4 text-itemtitle2 font-bold">
                    LAYANAN KAMI
                  </h4>

                  <ul className="md:ml-0 ml-5">
                    <li className="mb-2">
                      ⚪ Konsultasi Masalah Kepabeanan dan Cukai
                    </li>
                    <li className="mb-2">⚪ Penetapan Klasifikasi Barang</li>
                    <li className="mb-2">⚪ Audit Kepabeanan dan Cukai</li>
                    <li className="mb-2">
                      ⚪ Review Kepatuhan dan Mitigasi Risiko
                    </li>
                    <li className="mb-2">
                      ⚪ Inhouse Training Kepabeanan dan Cukai
                    </li>
                    <li className="mb-2">
                      ⚪ Keberatan dan Banding Kepabeanan dan Cukai
                    </li>
                  </ul>
                </motion.div>

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
                  className="animate_top md:ml-10"
                >
                  <div>
                    <h4 className="md:ml-0 ml-6 mb-5 mt-4 text-itemtitle2 font-bold">
                      HUBUNGI KAMI
                    </h4>

                    <div className="mb-2 flex items-center justify-between md:flex-row">
                      <Image
                        width={40}
                        height={50}
                        src="/images/logo/logo-phone.png"
                        alt="Logo"
                        className="md:ml-0 ml-6 mb-3 mr-0 md:mb-0 md:mr-5 md:mt-0 mt-3"
                      />
                      <p className="md:ml-0 mb-1.5 md:text-sectiontitle md:text-left">
                        0812 8484 1223 (Training)
                        <br />
                        0818 0612 1812 (Consulting)
                      </p>
                    </div>

                    <div className="mb-6 flex items-center md:flex-row">
                      <Image
                        width={40}
                        height={50}
                        src="/images/logo/logo-email.png"
                        alt="Logo"
                        className="md:ml-0 ml-6 mb-3 mr-0 md:mb-0 md:mr-5 md:mt-0 mt-2"
                      />
                      <p className="md:ml-0 ml-6 mb-1.5 md:text-sectiontitle md:text-left">
                        info@pictraining.co.id
                        <br />
                        info@picconsulting.id 
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <Link
                      href="http://facebook.com/kelaskepabeanan"
                      aria-label="social icon"
                    >
                      <Image
                        width={60}
                        height={50}
                        src="/images/logo/logo-facebook.png"
                        alt="Logo"
                        className="mr-4 md:ml-0 ml-18"
                      />
                    </Link>
                    <Link
                      href="http://instagram.com/trainingkepabeanan"
                      aria-label="social icon"
                    >
                      <Image
                        width={35}
                        height={50}
                        src="/images/logo/logo-instagram.png"
                        alt="Logo"
                        className="mr-8"
                      />
                    </Link>
                    <Link
                      href="https://www.youtube.com/@trainingkepabeanan9506"
                      aria-label="social icon"
                    >
                      <Image
                        width={50}
                        height={60}
                        src="/images/logo/logo-youtube.png"
                        alt="Logo"
                        className=""
                      />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
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
              <ul className="flex items-center gap-8">
                <li>
                  <a
                    href="#"
                    className="pointer-events-none hover:text-primary"
                  >
                    English
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="pointer-events-none hover:text-primary"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="pointer-events-none hover:text-primary"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </motion.div>

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
              <p>&copy; {new Date().getFullYear()} PIC. All rights reserved</p>
            </motion.div>

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
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
