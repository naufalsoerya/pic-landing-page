export const site = {
  name: "PIC Training",
  tagline: "Spesialis Training Kepabeanan, Ekspor, dan Impor",
  description:
    "Platform belajar dan konsultasi spesialis kepabeanan dan cukai milik PT Pro Insani Cendekia",
  url: "https://picconsulting.id",
  address:
    "Komplek Rukan Taman (Ruko Medical) Pondok Kelapa. Jl. Pondok Kelapa Raya, Blok D/6 Pondok Kelapa, Duren Sawit, JAKARTA TIMUR 13450",
  email: "info@pictraining.co.id",
  email2: "Konsultasi@picconsulting.id",
  phone: "0812 8484 1223",
  phone2: "0818 0612 1812",
  whatsapp: "https://wa.me/6281806121812",
  social: {
    facebook: "http://facebook.com/kelaskepabeanan",
    instagram: "http://instagram.com/trainingkepabeanan",
    youtube: "https://www.youtube.com/@trainingkepabeanan9506",
  },
};

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  submenu?: NavLink[];
};

export const navLinks: NavLink[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Layanan",
    href: "#",
    submenu: [
      { label: "Konsultasi Masalah Kepabeanan & Cukai", href: "/konsultasi-masalah-kepabeanan-cukai" },
      { label: "Penetapan Klasifikasi Barang", href: "/penetapan-klasifikasi-barang" },
      { label: "Konsultasi Nilai Pabean", href: "/konsultasi-nilai-pabean" },
      { label: "Audit Kepabeanan & Cukai", href: "/audit-kepabeanan-dan-cukai" },
      { label: "Review Kepatuhan & Mitigasi Risiko", href: "/review-kepatuhan-dan-mitigasi-risiko" },
      { label: "Inhouse Training Kepabeanan & Cukai", href: "/inhouse-training-kepabeanan-dan-cukai" },
      { label: "Keberatan Kepabeanan & Cukai", href: "/keberatan-banding-kepabeanan-dan-cukai" },
      { label: "Kuasa Hukum Banding Pengadilan Pajak", href: "/kuasa-hukum-banding-pengadilan-pajak" },
      { label: "Perizinan Fasilitas Kepabeanan", href: "/perizinan-fasilitas-kepabeanan" },
    ],
  },
  {
    label: "Training Kepabeanan",
    href: "#",
    submenu: [
      { label: "Kelas Online Kepabeanan", href: "https://pictraining.co.id/online", external: true },
      { label: "Kelas Offline Kepabeanan", href: "https://pictraining.co.id/offline", external: true },
      { label: "eCourse PIC", href: "https://pictraining.id", external: true },
      { label: "Kelas Kepabeanan Advanced", href: "https://pictraining.co.id/advanced", external: true },
      { label: "Inhouse Training", href: "https://pictraining.co.id/inhouse", external: true },
    ],
  },
  { label: "Hubungi Kami", href: "/contact" },
];

export type FooterLinkGroup = {
  title: string;
  links: { label: string; href: string }[];
};

export const footerLinks: FooterLinkGroup[] = [
  {
    title: "Layanan",
    links: [
      { label: "Konsultasi Masalah Kepabeanan & Cukai", href: "/konsultasi-masalah-kepabeanan-cukai" },
      { label: "Penetapan Klasifikasi Barang", href: "/penetapan-klasifikasi-barang" },
      { label: "Audit Kepabeanan & Cukai", href: "/audit-kepabeanan-dan-cukai" },
      { label: "Review Kepatuhan & Mitigasi Risiko", href: "/review-kepatuhan-dan-mitigasi-risiko" },
      { label: "Inhouse Training Kepabeanan & Cukai", href: "/inhouse-training-kepabeanan-dan-cukai" },
      { label: "Keberatan & Banding Kepabeanan", href: "/keberatan-banding-kepabeanan-dan-cukai" },
    ],
  },
  {
    title: "Informasi",
    links: [
      { label: "Hubungi Kami", href: "/contact" },
      { label: "Training Kepabeanan", href: "https://pictraining.net/" },
      { label: "eCourse PIC", href: "http://pictraining.co.id/ecourse" },
    ],
  },
];
