"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const Jumbotron2 = () => {
  return (
    <section className="py-0">
      {/* CTA Band */}
      <div className="relative overflow-hidden bg-[url('/images/about/aboutBanner(1).jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Request Penawaran
              </h3>
              <p className="text-white/80 text-lg mb-6">
                Penawaran jasa layanan kami ?
              </p>
              <Button
                size="lg"
                asChild
                className="bg-white text-slate-900 hover:bg-slate-100 font-extrabold"
              >
                <Link href="/contact">
                  Hubungi Kami <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Hubungi Kami
              </h3>
              <Button
                size="lg"
                asChild
                className="bg-green-600 hover:bg-green-700 text-white font-bold"
              >
                <Link href="https://wa.me/6281806121812" target="_blank">
                  <Phone className="mr-2 h-4 w-4" />
                  0812 9808 2677
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Split promo section */}
      <div className="hidden lg:grid grid-cols-3">
        <div className="relative h-[400px] overflow-hidden bg-[url('/images/about/banner(4).jpg')] bg-cover bg-center" />

        <div className="relative h-[400px] bg-slate-900 flex items-center justify-center p-10">
          <div className="text-center">
            <span className="inline-block rounded-2xl bg-gojek-green px-6 py-2 text-white font-bold text-lg mb-6">
              Atau ...
            </span>
            <p className="text-slate-200 text-base leading-relaxed mb-8 max-w-sm mx-auto">
              Mungkin Anda membutuhkan Tempat Training Kepabeanan terbaik
              yang terbukti paling banyak Kelulusan Ujian SAK nya ?
            </p>
            <Button
              size="lg"
              asChild
              className="bg-white text-slate-900 hover:bg-yellow-400 hover:text-white font-extrabold"
            >
              <Link href="https://pictraining.co.id/" target="_blank">
                Kunjungi PIC Training
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] overflow-hidden bg-[url('/images/about/jumbotron2.jpg')] bg-cover bg-center flex items-start justify-center p-10">
          <div className="text-center">
            <h4 className="text-xl font-extrabold text-slate-900">BEST PROVIDER</h4>
            <p className="text-lg text-slate-700 mb-4">Training Kepabeanan</p>
            <Image
              src="/images/logo/logo-light.svg"
              alt="PIC Training"
              width={150}
              height={40}
              className="mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Mobile version of split promo */}
      <div className="lg:hidden bg-slate-900 py-12 px-6">
        <div className="text-center max-w-md mx-auto">
          <span className="inline-block rounded-2xl bg-gojek-green px-6 py-2 text-white font-bold text-lg mb-6">
            Atau ...
          </span>
          <p className="text-slate-200 text-base leading-relaxed mb-8">
            Mungkin Anda membutuhkan Tempat Training Kepabeanan terbaik
            yang terbukti paling banyak Kelulusan Ujian SAK nya ?
          </p>
          <Button
            size="lg"
            asChild
            className="bg-white text-slate-900 hover:bg-yellow-400 hover:text-white font-extrabold"
          >
            <Link href="https://pictraining.co.id/" target="_blank">
              Kunjungi PIC Training
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron2;
