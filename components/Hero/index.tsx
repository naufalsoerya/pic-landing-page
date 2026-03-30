"use client";

import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 lg:pt-32 lg:pb-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gojek-green-light rounded-full blur-3xl opacity-70 -translate-y-1/4 translate-x-1/4 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div className="space-y-5 sm:space-y-8 relative z-10 min-w-0">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-bold shadow-sm">
            <Building2 size={14} className="shrink-0 sm:w-4 sm:h-4" /> Mitra Bisnis Konsultasi Kepabeanan Anda
          </div>
          <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight text-slate-900 tracking-tighter uppercase break-words">
            Solusi <br />
            <span className="text-gojek-green">Kepabeanan</span> <br />
            dan Cukai.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed font-medium">
            Layanan konsultasi kepabeanan dan cukai untuk setiap masalah Anda.
            Didukung oleh expert terbaik yang sangat berpengalaman sejak tahun 2015.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="xl" asChild className="min-h-[48px] w-full sm:w-auto">
              <Link href="/contact" className="flex items-center justify-center gap-2">
                Mulai Konsultasi <ArrowRight size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline-white" asChild className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white min-h-[48px] w-full sm:w-auto">
              <Link href="https://wa.me/6281806121812" target="_blank" className="flex items-center justify-center">
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white transform hover:rotate-2 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1707378175150-faa2903feefc?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Pelabuhan - Kepabeanan Ekspor Impor"
              className="w-full h-[550px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4">
            <div className="w-14 h-14 bg-gojek-green rounded-2xl flex items-center justify-center text-white shadow-lg">
              <span className="font-black text-xl">10+</span>
            </div>
            <div>
              <p className="font-black text-2xl">10 Tahun+</p>
              <p className="text-sm font-bold text-slate-500 whitespace-nowrap">
                Pengalaman Konsultasi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
