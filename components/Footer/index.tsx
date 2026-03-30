import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { site, footerLinks } from "@/config/site";

const Footer = () => {
  return (
    <footer className="py-12 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12">
        {/* Brand column */}
        <div className="col-span-1 md:col-span-2 space-y-4 sm:space-y-6">
          <div className="flex items-center">
            <Image
              src="/images/logo/logo-light.svg"
              alt="PIC Training"
              width={140}
              height={52}
              className="h-7 w-auto sm:h-12 min-w-[120px] sm:min-w-[160px] max-w-[200px] object-contain object-left shrink-0"
            />
          </div>
          <p className="text-slate-500 text-sm sm:text-base max-w-md">
            {site.description}
          </p>
          <p className="text-slate-500 font-medium max-w-md flex items-start gap-3 text-sm sm:text-base">
            <MapPin size={20} className="shrink-0 text-slate-400 mt-0.5" />
            {site.address}
          </p>
          <p className="text-slate-500 font-bold flex items-center gap-3 text-sm sm:text-base">
            <Phone size={18} className="text-slate-400 shrink-0" />
            <span>
              {site.phone} (Training) / {site.phone2} (Consulting)
            </span>
          </p>
          <p className="text-slate-500 font-bold flex items-center gap-3 text-sm sm:text-base break-all">
            <Mail size={18} className="text-slate-400 shrink-0" />
            <span>
              {site.email} / {site.email2}
            </span>
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4 pt-2">
            <Link
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-gojek-green transition-colors"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
              </svg>
            </Link>
            <Link
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-gojek-green transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </Link>
            <Link
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-gojek-green transition-colors"
              aria-label="YouTube"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Footer link groups */}
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-sm">
              {group.title}
            </h4>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              {group.links.map((link) => (
                <li key={`${group.title}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="hover:text-gojek-green transition-colors"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-50 text-slate-400 text-xs sm:text-sm font-bold text-center flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} PIC Training Indonesia. All rights reserved.</p>
        <p className="uppercase tracking-tighter">Your Professional Development Partner</p>
      </div>
    </footer>
  );
};

export default Footer;
