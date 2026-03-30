"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="py-8 sm:py-18 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <img
              className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover"
              src="/images/about/banner(2).jpg"
              alt="PIC Training"
            />
          </div>
          <div className="space-y-6">
            <p className="text-gojek-green font-bold text-sm uppercase tracking-widest">
              Tentang Kami
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase">
              Membangun Asa Lewat <span className="text-gojek-green">Karya Nyata</span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
              <p>
                <span className="font-black text-slate-900">PT. Pro Insani Cendekia </span>
                hadir pertama kali pada bulan Oktober 2015 sebagai penyedia jasa
                pelatihan dan konsultasi untuk mewujudkan sumber daya manusia
                yang terampil dan memiliki kompetensi di bidang jasa bisnis
                kepabeanan dan ekspor-impor.
              </p>
              <p>
                Kini, PIC semakin dipercaya oleh masyarakat. PIC selalu
                yang terdepan sebagai{" "}
                <span className="font-black text-slate-900">
                  Provider Training yang paling banyak meluluskan peserta dalam
                  ujian SAK.
                </span>
              </p>
            </div>
            <Button size="lg" variant="outline" asChild className="min-h-[48px] w-full sm:w-auto">
              <Link href="/contact" className="flex items-center justify-center gap-2">
                Mulai Konsultasi <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
