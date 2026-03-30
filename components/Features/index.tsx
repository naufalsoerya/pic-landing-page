"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import featuresData from "./featuresData";

const Feature = () => {
  return (
    <section className="py-14 sm:py-18 px-4 sm:px-6 pb-10 sm:pb-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-2 sm:mb-4 tracking-tight uppercase">
              Layanan Kami
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-medium">
              Pilih layanan yang sesuai dengan kebutuhan perusahaan Anda.
            </p>
          </div>
          <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto min-h-[48px]" asChild>
            <Link href="/contact" className="flex items-center justify-center">
              Konsultasi Gratis <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {featuresData.map((feature) => (
            <Card
              key={feature.id}
              className="group overflow-hidden hover:shadow-2xl hover:-translate-y-2 active:translate-y-0 transition-all duration-300"
            >
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader className="pb-2">
                <span className="text-[11px] font-black text-gojek-green uppercase tracking-[3px]">
                  Layanan
                </span>
                <CardTitle className="line-clamp-2 text-lg sm:text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-500 line-clamp-3">{feature.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-end gap-4">
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 uppercase font-black mb-1">
                    Konsultasi
                  </p>
                  <p className="text-base sm:text-lg font-black text-slate-900 truncate">Hubungi Kami</p>
                </div>
                <Button size="icon-lg" className="rounded-2xl group-hover:rotate-12 transition-transform shrink-0 min-w-[48px] min-h-[48px]" asChild>
                  <Link href={feature.link}>
                    <ArrowRight size={24} />
                    <span className="sr-only">Info lengkap</span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
