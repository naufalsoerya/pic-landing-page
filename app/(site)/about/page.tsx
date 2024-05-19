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
      <div className="relative mt-22 h-[220px] overflow-hidden bg-[url('/images/about/aboutBanner.png')] bg-cover bg-no-repeat p-12 text-white md:mt-28">
        <h1 className="ml-4 mt-6 text-3xl font-bold md:ml-4 md:text-5xl">
          Tentang PIC
        </h1>
        <h2 className="font-lg ml-6 mt-2 text-xl md:ml-5 md:text-2xl">
          Training and Consulting
        </h2>
      </div>

      {/* Jumbotron 1*/}

      {/* First Text */}
      <section className="overflow-hidden pb-20 pt-10 md:pt-22 xl:pb-16 xl:pt-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex xl:gap-32.5 lg:items-center lg:gap-8">
            <div className="ml-8 mr-7 md:mr-0 md:w-1/2">
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
              <div className="h-64max-w-sm mt-5 w-full rounded-lg border border-gray-200 bg-white shadow md:ml-1">
                <img
                  className="rounded-t-lg p-4"
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
      <div className="relative overflow-hidden bg-[url('/images/about/aboutBanner(1).jpg')] bg-cover bg-no-repeat p-12 text-white md:h-[350px]">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="animate_top ml-5 md:ml-24 md:flex-1">
            <h4 className="mb-5 text-4xl font-bold">VISI</h4>
            <ul>
              <li className="font-lg mb-2 mr-5 md:text-justify">
                Menjadi institusi bisnis unggulan dalam penyediaan jasa
                pelatihan dan konsultasi dalam bidang kepabeanan, perdagangan
                internasional, ekspor dan impor.
              </li>
            </ul>
          </div>

          <div className="animate_top font-lg ml-5 mr-5 md:ml-10 md:mr-2 md:flex-1">
            <h4 className="mb-5 mt-10 text-4xl font-bold md:mt-0">MISI</h4>
            <ul>
              <li className="mb-4 md:text-justify">
                Melayani jasa pelatihan di bidang kepabeanan, cukai, dan
                perdagangan internasional, secara efektif.
              </li>
              <li className="mb-2 md:text-justify">
                Melayani jasa konsultasi di bidang kepabeanan, perdagangan
                internasional, ekspor dan impor secara efektif dan solutif.
              </li>
            </ul>
          </div>

          <div className="animate_top font-lg ml-5 md:ml-12 md:flex-1">
            <h4 className="mb-5 mt-10 text-4xl font-bold md:mt-0">MOTTO</h4>
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
      <section className="overflow-hidden pb-10 xl:pb-16">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex xl:gap-32.5 lg:items-center lg:gap-8">
            <div className="animate_right ml-10 hidden md:w-1/2 lg:block">
              <img
                className="rounded-t-lg border border-2 border-gray-200 bg-white shadow"
                src="/images/about/banner(3).jpg"
                alt="product image"
              />
            </div>

            <div className="ml-8 mr-7 md:mr-8 md:w-1/2">
              <h1 className="mb-5 text-3xl font-bold text-black">
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
            </div>
          </div>
        </div>
        <div className="mx-auto block max-w-c-1390 px-4 md:hidden md:px-8 2xl:px-0">
          <img
            className="mt-5 rounded-t-lg border border-2 border-gray-200 bg-white shadow"
            src="/images/about/banner(3).jpg"
            alt="product image"
          />
        </div>
      </section>
      {/* Second Text */}
    </>
  );
};

export default aboutPage;
