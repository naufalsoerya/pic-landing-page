import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan - PIC Training",
  description: "Halaman yang Anda cari tidak ditemukan",
};

const ErrorPage = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] py-24 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gojek-green-light rounded-full blur-3xl opacity-50 -translate-y-1/4 translate-x-1/4 -z-10" />
      <div className="mx-auto max-w-md text-center px-4 relative z-10">
        <Image
          src="/images/shape/404.svg"
          alt="404"
          className="mx-auto mb-10"
          width={300}
          height={300}
        />

        <h2 className="mb-4 text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter">
          Halaman Tidak Ditemukan
        </h2>
        <p className="mb-8 text-slate-500 font-medium">
          Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak ada.
        </p>

        <Button size="xl" asChild>
          <Link href="/" className="flex items-center justify-center gap-2">
            Kembali ke Beranda <ArrowRight size={20} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ErrorPage;
