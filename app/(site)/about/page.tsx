import React from "react";
import { Metadata } from "next";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "About Us - Spesialis training kepabeanan, ekspor, dan impor",
  description: "About us page",
  // other metadata
};

const aboutPage = () => {
  return (
    <>
      {/* Jumbotron 1*/}
      <div className="relative h-[220px] overflow-hidden bg-[url('/images/about/aboutBanner.png')] bg-cover bg-no-repeat p-12 text-white">
        <h1 className="ml-10 mt-6 text-5xl font-bold">Tentang PIC</h1>
        <h2 className="font-lg ml-12 text-2xl">Training and Consulting</h2>
      </div>
      {/* Jumbotron 1*/}

      {/* First Text */}
      <section className="overflow-hidden pb-20 pt-22 md:pt-40 xl:pb-16 xl:pt-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="ml-8 md:w-1/2">
              <h1 className="mb-5 text-3xl font-bold text-black">
                Membangun Asa Lewat Karya Nyata
              </h1>
              <p className="mb-5 text-justify">
                Perkembangan transaksi perdagangan internasional dalam era
                globalisasi dewasa ini menuntut dunia usaha di Indonesia untuk
                lebih efisien agar mampu dan tetap bertahan dalam kondisi
                persaingan global. Untuk mewujudkan hal ini maka peran serta
                organisasi bisnis di bidang jasa ekspor-impor menjadi suatu hal
                yang sangat penting. <br />
              </p>
              <p className="mb-5 text-justify">
                Kemampuan untuk melakukan kegiatan ekspor-impor dan khususnya
                prosedur kepabeanan secara efisien sangat berhubungan dengan
                kinerja sumber daya manusia organisasi. Para pelaku bisnis di
                bidang perdagangan internasional diharuskan mengetahui hal-hal
                yang harus dikerjakan sejak dari perencanaan sampai pengeluaran
                barang. <br />
              </p>
              <p className="mb-5 text-justify">
                <span className="font-bold">PT. Pro Insani Cendekia </span>hadir
                pertama kali pada bulan Oktober 2015 sebagai penyedia jasa
                pelatihan dan konsultasi untuk mewujudkan sumber daya manusia
                yang terampil dan memiliki kompetensi di bidang jasa bisnis
                kepabenan dan ekspor-impor. <br />
              </p>
              <p className="mb-5 text-justify">
                Kini, seiring dengan waktu, PIC semakin dipercaya oleh
                masyarakat. Karya nyata PIC sudah dirasakan para peserta kelas
                persiapan ujian Sertifikasi Ahli Kepabeanan (SAK). PIC selalu
                yang terdepan sebagai{" "}
                <span className="font-bold">
                  Provider Training yang paling banyak meluluskan peserta dalam
                  ujian SAK.
                </span>
                <br />
              </p>
              <p className="mb-5 text-justify">
                Kami berkomitmen untuk mewujudkan harapan Anda yang ingin
                meningkatkan kompetensi di bidang kepabeanan dan jasa
                ekspor-impor.
              </p>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="h-64max-w-sm mt-5 w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                <img
                  className="rounded-t-lg p-8"
                  src="/images/about/banner(2).jpg"
                  alt="product image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* First Text */}

      {/* Jumbotron 2 */}
      <div className="relative h-[320px] overflow-hidden bg-[url('/images/about/aboutBanner(1).jpg')] bg-cover bg-no-repeat p-12 text-white">
        <div className="flex w-full flex-col md:flex-row md:justify-between">
          <div className="animate_top ml-36 flex-1">
            <h4 className="mb-5 text-4xl font-bold">VISI</h4>

            <ul>
              <li className="mb-2 mr-5 text-justify font-lg">
                Menjadi institusi bisnis unggulan dalam penyediaan jasa
                pelatihan dan konsultasi dalam bidang kepabeanan,
                perdaganganinternasonal, ekspor dan impor.
              </li>
            </ul>
          </div>

          <div className="animate_top ml-10 mr-14 flex-1 font-lg">
            <h4 className="mb-5 text-4xl font-bold">MISI</h4>

            <ul>
              <li className="mb-4 text-justify">
                Melayani jasa pelatihan di bidang kepabeanan, cukai, dan
                perdagangan internasional, secara efektif
              </li>
              <li className="mb-2 text-justify">
                Melayani jasa konsultasi di bidang kepabeanan, perdagangan
                internasional, ekspor dan impor secara efektif dan solutif
              </li>
            </ul>
          </div>

          <div className="animate_top flex-1 font-lg">
            <h4 className="mb-5 text-4xl font-bold">MOTTO</h4>

            <ul>
              <li className="mb-2">Profesional</li>
              <li className="mb-2">Jujur</li>
              <li className="mb-2">Cerdas</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Jumbotron 2 */}

      {/* Testimoni */}
      <Testimonial />
      {/* Testimoni */}

      {/* Second Text */}
      <section className="overflow-hidden pb-20 xl:pb-16">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="h-64max-w-sm mt-5 w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                <img
                  className="rounded-t-lg p-8"
                  src="/images/about/banner(3).jpg"
                  alt="product image"
                />
              </div>
            </div>

            <div className="ml-8 md:w-1/2">
              <h1 className="mb-5 text-4xl font-bold text-black">
                Bangunlah impian karir-mu bersama PIC TRAINING
              </h1>
              <p className="mb-5 text-justify">
                PIC Training didukung oleh orang-orang yang hebat di bidangnya.
                Prestasi lulusan terbanyak yang dihasilkan bukan hanya jargon
                promosi saja. Kami memberikan bukti nyata, bukan harapan kosong.
                Bangunlah impian karir terbaikmu bersama PIC Training. Insha
                Allah kami memegang amanah untuk selalu memberikan yang terbaik
                untuk para peserta kami ! <br />
              </p>
              <p className="mb-1 font-bold text-black text-justify">
                Adang Karyana
                <br />
              </p>
              <p className="mb-5 text-black text-justify">
                Direktur Utama PIC Training
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Second Text */}
    </>
  );
};

export default aboutPage;
