"use client";

import { Zap, Award, Briefcase, GraduationCap, Eye, Target, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const whyUsItems = [
  {
    icon: "zap",
    title: "Konsultan Berpengalaman",
    desc: "Expert kami terdiri dari praktisi, dosen, dan eks widyaiswara Kepabeanan serta eks pejabat DJBC.",
    bg: "bg-yellow-400/20",
  },
  {
    icon: "award",
    title: "Terpercaya Sejak 2015",
    desc: "PIC telah berpengalaman sebagai provider training kepabeanan terbaik dan paling banyak meluluskan peserta ujian SAK.",
    bg: "bg-blue-400/20",
  },
  {
    icon: "briefcase",
    title: "Biaya Hemat & Bersaing",
    desc: "Tarif layanan yang kami tawarkan dapat dinegosiasikan, dijamin lebih hemat dan terjangkau.",
    bg: "bg-gojek-green/20",
  },
  {
    icon: "graduation-cap",
    title: "Fleksibel & Profesional",
    desc: "Konsultasi fleksibel mengikuti kesiapan Anda. Media konsultasi dapat dipilih sesuai kenyamanan Anda.",
    bg: "bg-purple-400/20",
  },
];

const iconMap = {
  zap: Zap,
  award: Award,
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
};

export default function WhyUs() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden rounded-t-3xl sm:rounded-t-[60px] md:rounded-t-[100px] -mt-12 sm:-mt-16 pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 shadow-[0_-20px_50px_rgba(15,23,42,0.1)]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gojek-green/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Why Us Cards */}
        <div className="grid lg:grid-cols-5 gap-10 sm:gap-16 items-center">
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black leading-tight uppercase">
              Kenapa Memilih{" "}
              <span className="text-gojek-green">PIC Consulting?</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
              Kami adalah lembaga konsultan kepabeanan dan cukai terpercaya dengan pengalaman lebih dari 10 tahun.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
              <div className="bg-white/5 backdrop-blur-lg p-4 sm:p-6 rounded-2xl sm:rounded-[32px] border border-white/10">
                <p className="text-3xl sm:text-4xl font-black text-gojek-green mb-1">100%</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter">
                  Kepuasan Client
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg p-4 sm:p-6 rounded-2xl sm:rounded-[32px] border border-white/10">
                <p className="text-2xl sm:text-2xl font-black text-blue-400 mb-1 uppercase">
                  Privasi
                </p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter">
                  Data Terjamin
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {whyUsItems.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Zap;
              return (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl sm:rounded-[36px] border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1 group"
                >
                  <div
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
                      item.bg
                    )}
                  >
                    <Icon
                      size={24}
                      className={cn(
                        item.icon === "zap" && "text-yellow-400",
                        item.icon === "award" && "text-blue-400",
                        item.icon === "briefcase" && "text-gojek-green",
                        item.icon === "graduation-cap" && "text-purple-400"
                      )}
                    />
                  </div>
                  <h4 className="text-xl font-black mb-3 uppercase tracking-tighter">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visi, Misi & Motto */}
        <div className="mt-16 sm:mt-24 pt-16 sm:pt-20 border-t border-white/10">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase leading-none">
              Visi, Misi &amp; <span className="text-gojek-green">Motto</span>
            </h3>
            <div className="w-24 h-2 bg-gojek-green mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl sm:rounded-[36px] border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-yellow-400/20">
                <Eye size={24} className="text-yellow-400" />
              </div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">Visi</h4>
              <p className="text-slate-400 font-medium leading-relaxed">
                Menjadi institusi bisnis unggulan dalam penyediaan jasa
                pelatihan dan konsultasi dalam bidang kepabeanan, perdagangan
                internasional, ekspor dan impor.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl sm:rounded-[36px] border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-blue-400/20">
                <Target size={24} className="text-blue-400" />
              </div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">Misi</h4>
              <ul className="space-y-3 text-slate-400 font-medium leading-relaxed">
                <li>Melayani jasa konsultasi di bidang kepabeanan, perdagangan
                  internasional, ekspor dan impor secara efektif dan solutif.</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl sm:rounded-[36px] border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gojek-green/20">
                <Lightbulb size={24} className="text-gojek-green" />
              </div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">Motto</h4>
              <ul className="space-y-4 text-slate-400 font-medium leading-relaxed">
                <li>
                  Bekerja dengan standar tinggi dan integritas dalam setiap layanan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
