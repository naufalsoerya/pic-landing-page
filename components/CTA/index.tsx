import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="bg-gojek-green rounded-3xl sm:rounded-[64px] p-8 sm:p-14 lg:p-24 relative overflow-hidden shadow-2xl shadow-orange-900/30">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:24px_24px]" />
          <div className="relative z-10 space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight uppercase">
              Butuh Konsultasi? <br /> Hubungi Kami Sekarang.
            </h2>
            <p className="text-white text-base sm:text-xl font-medium max-w-2xl mx-auto">
              Dapatkan solusi terbaik untuk permasalahan kepabeanan dan cukai perusahaan Anda. Konsultasi pertama gratis!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 pt-4 sm:pt-6">
              <Button
                size="xl"
                variant="secondary"
                className="bg-white text-gojek-green font-black rounded-full shadow-xl hover:shadow-2xl hover:scale-105 min-h-[48px] w-full sm:w-auto"
                asChild
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Form Konsultasi <ArrowRight size={20} />
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline-white"
                className="font-black rounded-full min-h-[48px] w-full sm:w-auto"
                asChild
              >
                <Link href="https://wa.me/6281806121812" target="_blank" className="flex items-center justify-center gap-2">
                  WhatsApp Kami
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
