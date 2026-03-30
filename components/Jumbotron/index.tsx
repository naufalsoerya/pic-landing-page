import Link from "next/link";
import { Button } from "@/components/ui/button";

const Jumbotron = () => {
  return (
    <section className="relative h-[620px] overflow-hidden bg-[url('/images/about/banner.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
        <div className="max-w-2xl pt-20 md:pt-0">
          <h2 className="text-xl sm:text-2xl font-bold text-white/90">
            Mitra bisnis terbaik untuk
          </h2>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Solusi Kepabeanan
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl">dan Cukai</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-lg">
            Layanan Konsultasi Kepabeanan dan Cukai untuk setiap masalah Anda. Didukung oleh Expert terbaik yang sangat berpengalaman.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              asChild
              className="bg-white text-slate-900 hover:bg-slate-100 font-extrabold"
            >
              <Link href="/contact">Mulai Konsultasi !</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white/10 font-bold"
            >
              <Link href="https://wa.me/6281806121812" target="_blank">
                WhatsApp Kami
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
