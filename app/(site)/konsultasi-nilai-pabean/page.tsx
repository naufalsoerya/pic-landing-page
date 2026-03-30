import ServiceForm from "@/components/FormService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Konsultasi Nilai Pabean - Spesialis training kepabeanan, ekspor, dan impor",
  description: "PIC Training landing page",
};

const KonsultasiNilaiPabeanPage = () => {
  return (
    <div>
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gojek-green-light rounded-full blur-3xl opacity-70 -translate-y-1/4 translate-x-1/4 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <p className="text-gojek-green font-bold text-sm uppercase tracking-widest">Layanan</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900 tracking-tighter uppercase">
            Konsultasi <br /><span className="text-gojek-green">Nilai Pabean</span>
          </h1>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
            <div className="space-y-8">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img className="w-full h-auto object-cover" src="/images/icon/icon-8.jpg" alt="Konsultasi Nilai Pabean" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tighter">
                Konsultasi Nilai Pabean
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
                <p>
                  Notul atas pemberitahuan impor barang karena nilai pabean
                  seringkali menjadi masalah yang dialami oleh importir.
                </p>
                <p>
                  Perbedaan pemahaman importir dengan regulasi sistem nilai pabean
                  yang diterapkan Bea dan Cukai menjadi pokok utama permasalahan.
                  Ada 6 metode penetapan nilai pabean yang digunakan secara hirarki oleh Pejabat Bea dan Cukai.
                </p>
                <p>
                  <span className="font-black text-slate-900">
                    Apakah Anda memiliki masalah terkena notul karena nilai
                    pabean? Hindari potensi masalah nilai pabean ini dengan konsultasi kepada expert kami!
                  </span>
                </p>
                <p>
                  Kami memaklumi kesibukan dan menghargai waktu Anda yang sangat
                  berharga. Untuk itu, konsultasi yang kami berikan sangat
                  fleksibel mengikuti kesiapan Anda.
                </p>
              </div>
            </div>
            <div>
              <ServiceForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KonsultasiNilaiPabeanPage;
