import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/FormContact";

export const metadata: Metadata = {
  title: "Contact Us - Spesialis training kepabeanan, ekspor, dan impor",
  description: "PIC Training landing page",
  // other metadata
};

const FormContact = () => {
  return (
    <div>
      {/* Jumbotron 1*/}
      <div className="relative md:h-[220px] h-[150px] overflow-hidden bg-[url('/images/about/aboutBanner.png')] bg-cover bg-no-repeat p-12 text-white mt-22 md:mt-28">
        <h1 className="md:ml-16 md:mt-8 mt-3 md:text-5xl text-3xl font-bold">Hubungi Kami</h1>
      </div>
      {/* Jumbotron 1*/}

      {/* First Text */}
      <section className="pb-26 overflow-hidden md:pt-40 xl:pb-16 xl:pt-1">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="ml-8 md:ml-20 md:w-1/2">
              <h1 className="mb-5 md:mt-0 mt-10 text-3xl font-bold text-black">
                Hubungi Kami
              </h1>
              <div className="mb-3 flex items-center">
                <Image
                  width={40}
                  height={50}
                  src="/images/logo/logo-phone.png"
                  alt="Logo"
                  className="mr-5"
                />
                <p className="mb-1.5 md:text-sectiontitle text-lg">
                  0812 8484 1223 (Training)
                  <br />
                  0818 0612 1812 (Consulting)
                </p>
              </div>

              <div className="mb-6 flex items-center">
                <Image
                  width={40}
                  height={50}
                  src="/images/logo/logo-email.png"
                  alt="Logo"
                  className="mr-5"
                />
                <p className="mb-1.5 md:text-sectiontitle text-lg">
                  info@pictraining.co.id{" "}
                  <br />
                  info@pictraining.id
                </p>
              </div>
              <Image
                src="/images/logo/logo-light.svg"
                alt="logo"
                width={250}
                height={10}
                className="mb-3"
              />
              <div className="flex items-center justify-between">
                <Image
                  width={60}
                  height={100}
                  src="/images/logo/logo-home.png"
                  alt="Logo"
                  className="mr-5"
                />
                <p className="mb-1.5 text-justify md:text-sectiontitle text-lg md:mr-0 mr-7">
                  <span className="font-bold">LOKASI KAMI</span>
                  <br />
                  Komplek Rukan Taman (Ruko Medical) Pondok Kelapa. Jl. Pondok
                  Kelapa Raya, Blok D/6 Pondok Kelapa, Duren Sawit, JAKARTA
                  TIMUR 13450
                </p>
              </div>
              <div>
                <div className="animate_top md:mt-10 mt-6 md:ml-0 ml-16 mb-6">
                  <div className="flex">
                    <Link
                      href="http://facebook.com/kelaskepabeanan"
                      aria-label="social icon"
                      target="blank"
                    >
                      <Image
                        width={60}
                        height={50}
                        src="/images/logo/logo-facebook.png"
                        alt="Logo"
                        className="mr-4"
                      />
                    </Link>
                    <Link
                      href="http://instagram.com/trainingkepabeanan"
                      aria-label="social icon"
                      target="blank"
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
                      target="blank"
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
                </div>
              </div>
            </div>

            {/* form */}
            <ContactForm />
            {/* form */}
          </div>
        </div>
      </section>
      {/* First Text */}

      {/* gmaps */}
      <div className="relative w-full h-[400px] md:h-[470px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1968724183907!2d106.93461579999999!3d-6.2377624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d448e5d2a95%3A0xcd22f05a4c7db3fc!2sPT.%20Ballast%20Graha!5e0!3m2!1sen!2sid!4v1715692808326!5m2!1sen!2sid"
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* gmaps */}
    </div>
  );
};

export default FormContact;
