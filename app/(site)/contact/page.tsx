import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import ContactForm from "@/components/FormContact";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us - Spesialis training kepabeanan, ekspor, dan impor",
  description: "PIC Training landing page",
};

const ContactPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gojek-green-light rounded-full blur-3xl opacity-70 -translate-y-1/4 translate-x-1/4 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <p className="text-gojek-green font-bold text-sm uppercase tracking-widest">
            Kontak
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900 tracking-tighter uppercase">
            Hubungi <span className="text-gojek-green">Kami</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed font-medium">
            Konsultasikan masalah kepabeanan dan cukai Anda kepada kami. Tim expert kami siap membantu.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-16 sm:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gojek-green/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-gojek-green" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black uppercase tracking-tighter">Telepon</p>
                    <p className="text-slate-500 font-medium text-sm">
                      {site.phone} (Training)
                      <br />
                      {site.phone2} (Consulting)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gojek-green/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-gojek-green" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black uppercase tracking-tighter">Email</p>
                    <p className="text-slate-500 font-medium text-sm">
                      {site.email}
                      <br />
                      {site.email2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gojek-green/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-gojek-green" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black uppercase tracking-tighter">Lokasi Kami</p>
                    <p className="text-slate-500 font-medium text-sm max-w-sm">
                      {site.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Image
                  src="/images/logo/logo-light.svg"
                  alt="PIC Training"
                  width={200}
                  height={60}
                  className="mb-6"
                />
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center hover:bg-gojek-green/10 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5 fill-current text-slate-500" viewBox="0 0 24 24">
                    <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
                  </svg>
                </Link>
                <Link
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center hover:bg-gojek-green/10 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5 fill-current text-slate-500" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </Link>
                <Link
                  href={site.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center hover:bg-gojek-green/10 transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="h-5 w-5 fill-current text-slate-500" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <div className="relative w-full h-[400px] md:h-[470px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1968724183907!2d106.93461579999999!3d-6.2377624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d448e5d2a95%3A0xcd22f05a4c7db3fc!2sPT.%20Ballast%20Graha!5e0!3m2!1sen!2sid!4v1715692808326!5m2!1sen!2sid"
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
