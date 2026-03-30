"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "Apa saja layanan yang disediakan oleh PIC Consulting?",
    answer:
      "PIC Consulting menyediakan layanan konsultasi masalah kepabeanan & cukai, penetapan klasifikasi barang, audit kepabeanan & cukai, review kepatuhan & mitigasi risiko, inhouse training, asistensi keberatan, kuasa hukum banding pengadilan pajak, konsultasi nilai pabean, dan perizinan fasilitas kepabeanan.",
  },
  {
    question: "Bagaimana cara memulai konsultasi?",
    answer:
      "Anda bisa langsung menghubungi kami melalui form konsultasi di website, atau melalui WhatsApp. Tim kami akan menghubungi Anda untuk membahas kebutuhan lebih lanjut.",
  },
  {
    question: "Berapa biaya konsultasi?",
    answer:
      "Tarif layanan jasa yang kami tawarkan dapat dinegosiasikan. Dijamin lebih hemat dan terjangkau! Silakan hubungi kami untuk penawaran khusus.",
  },
  {
    question: "Apakah konsultasi bisa dilakukan secara online?",
    answer:
      "Ya, kami menyediakan berbagai media konsultasi yang fleksibel mengikuti kesiapan Anda: offline di kantor PIC, offline di tempat lain, online via Zoom, konsultasi via WA/Email, maupun via telepon.",
  },
  {
    question: "Apakah PIC juga menyediakan training kepabeanan?",
    answer:
      "Ya, PIC telah berpengalaman sebagai provider training kepabeanan terbaik sejak tahun 2015. Kami menyediakan kelas online, kelas offline, eCourse, kelas advanced, dan inhouse training. Kunjungi pictraining.net untuk info lengkap.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-24 space-y-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-none">
            Punya <br /> Pertanyaan?
          </h2>
          <div className="w-24 h-2 bg-gojek-green mx-auto rounded-full" />
        </div>

        <div className="space-y-2">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-slate-100 py-4 sm:py-6 transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="group flex flex-1 w-full items-center justify-between text-left font-medium transition-all hover:text-gojek-green"
              >
                <span className="text-base sm:text-xl font-black uppercase tracking-tighter">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ml-4",
                    openIndex === i && "rotate-180 text-gojek-green"
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="mt-4 pb-4 text-slate-500 font-medium leading-relaxed overflow-hidden animate-in fade-in duration-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-6 border-2 border-dashed border-slate-200 rounded-2xl sm:rounded-[32px]">
            <p className="font-bold text-slate-400 uppercase tracking-widest text-xs italic">
              Masih bingung?
            </p>
            <Button size="default" className="rounded-2xl min-h-[48px] w-full sm:w-auto" asChild>
              <a href="https://wa.me/6281806121812" target="_blank" rel="noopener noreferrer">
                Hubungi Support
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
