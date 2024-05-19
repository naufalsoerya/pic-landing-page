import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    path: "/about",
  },
  {
    id: 3,
    title: "Layanan",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Konsultasi Masalah Kepabeanan dan Cukai",
        newTab: false,
        path: "/konsultasi-masalah-kepabeanan-cukai",
      },
      {
        id: 34,
        title: "Penetapan Klasifikasi Barang Ekspor dan Impor",
        newTab: false,
        path: "/penetapan-klasifikasi-barang",
      },
      {
        id: 35,
        title: "Audit Kepabeanan dan Cukai",
        newTab: false,
        path: "/audit-kepabeanan-dan-cukai",
      },
      {
        id: 36,
        title: "Review Kepatuhan dan Mitigasi Risiko",
        newTab: false,
        path: "/review-kepatuhan-dan-mitigasi-risiko",
      },
      {
        id: 37,
        title: "Inhouse Training Kepabeanan dan Cukai",
        newTab: false,
        path: "/inhouse-training-kepabeanan-dan-cukai",
      },
      {
        id: 38,
        title: "Asistensi Keberatan Kepabeanan dan Cukai",
        newTab: false,
        path: "/keberatan-banding-kepabeanan-dan-cukai",
      },
      {
        id: 31,
        title: "Konsultasi Nilai Pabean",
        newTab: false,
        path: "/konsultasi-masalah-kepabeanan-cukai",
      },
      {
        id: 31,
        title: "Kuasa Hukum Banding Pengadilan Pajak",
        newTab: false,
        path: "/konsultasi-masalah-kepabeanan-cukai",
      },
      {
        id: 31,
        title: "Perizinan Fasilitas Kepabeanan",
        newTab: false,
        path: "/konsultasi-masalah-kepabeanan-cukai",
      },
    ],
  },
  {
    id: 4,
    title: "Training Kepabeanan",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Kelas Online Kepabeanan",
        newTab: false,
        path: "https://pictraining.net/",
      },
      {
        id: 44,
        title: "Kelas Offline Kepabeanan",
        newTab: false,
        path: "https://pictraining.net/kelas-offline-kepabeanan/",
      },
      {
        id: 45,
        title: "eCourse Ahli Kepabeanan",
        newTab: false,
        path: "https://pictraining.net/ecourse-ahli-kepabeanan/",
      },
      {
        id: 46,
        title: "eCourse PIC",
        newTab: false,
        path: "http://pictraining.co.id/ecourse",
      },
      {
        id: 47,
        title: "Kelas Kepabeanan Advanced",
        newTab: false,
        path: "https://pictraining.net/advanced/",
      },
      {
        id: 48,
        title: "Kelas Kuasa Hukum Kepabeanan",
        newTab: false,
        path: "https://pictraining.net/kuasakepabeanan",
      },
      {
        id: 49,
        title: "Retraining Alumni",
        newTab: false,
        path: "https://pictraining.net/retraining-alumnipic",
      },
      {
        id: 50,
        title: "Inhouse Training",
        newTab: false,
        path: "https://pictraining.net/inhousekerjasama/",
      },
    ],
  },
  {
    id: 5,
    title: "Contact Us",
    newTab: false,
    path: "/contact",
  },
];

export default menuData;
