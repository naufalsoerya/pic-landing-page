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
        path: "",
      },
      {
        id: 34,
        title: "Penetapan Klasifikasi Barang",
        newTab: false,
        path: "",
      },
      {
        id: 35,
        title: "Audit Kepabeanan dan Cukai",
        newTab: false,
        path: "",
      },
      {
        id: 36,
        title: "Review Kepatuhan dan Mitigasi Risiko",
        newTab: false,
        path: "",
      },
      {
        id: 37,
        title: "Inhouse Training Kepabeanan dan Cukai",
        newTab: false,
        path: "",
      },
      {
        id: 38,
        title: "Keberatan dan Banding Kepabeanan dan Cukai",
        newTab: false,
        path: "",
      }
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
        path: "https://pictraining.net/kelas-offline-kepabeanan/",
      },
      {
        id: 45,
        title: "Retraining Alumni",
        newTab: false,
        path: "https://pictraining.net/retraining-alumnipic",
      },
    ],
  },
  {
    id: 5,
    title: "Contact Us",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
