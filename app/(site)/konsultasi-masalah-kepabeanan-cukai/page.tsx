import ServiceForm from "@/components/FormService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Konsultasi Masalah Kepabeanan dan Cukai - Spesialis training kepabeanan, ekspor, dan impor",
  description: "PIC Training landing page",
};

const KonsultasiKepabeananPage = () => {
  return (
    <div>
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gojek-green-light rounded-full blur-3xl opacity-70 -translate-y-1/4 translate-x-1/4 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <p className="text-gojek-green font-bold text-sm uppercase tracking-widest">Layanan</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900 tracking-tighter uppercase">
            Konsultasi Masalah <br />
            <span className="text-gojek-green">Kepabeanan & Cukai</span>
          </h1>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
            <div className="space-y-8">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img className="w-full h-auto object-cover" src="/images/about/service1.jpg" alt="Konsultasi Masalah Kepabeanan dan Cukai" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tighter">
                Konsultasi Masalah Kepabeanan dan Cukai
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
                <p>
                  Ketentuan regulasi kepabeanan dan cukai yang semakin dinamis
                  seringkali tidak dapat diikuti oleh stakeholder dengan cepat.
                  Sebagai akibatnya, timbul masalah-masalah kepabeanan dan cukai
                  yang berpotensi merugikan baik secara finansiil maupun
                  inefisiensi waktu layanan bagi stake holder.
                </p>
                <p>
                  PIC hadir untuk memberikan advis dan solusi terhadap gap
                  informasi terkait dinamika regulasi kepabeanan dan cukai.{" "}
                  <span className="font-black text-slate-900">
                    Konsultasikan masalah Kepabeanan dan Cukai Anda kepada kami
                    dan temukan solusi terbaik dari para Expert kami.
                  </span>
                </p>
                <p>
                  Kami memaklumi kesibukan dan menghargai waktu Anda yang sangat
                  berharga. Untuk itu, konsultasi yang kami berikan sangat
                  fleksibel mengikuti kesiapan Anda. Media konsultasi dapat
                  dipilih sesuai kenyamanan Anda.
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

export default KonsultasiKepabeananPage;
