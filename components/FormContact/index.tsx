"use client";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import Swal from "sweetalert2";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  media: string;
  place: string;
  service: string;
}

const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    media: "",
    place: "",
    service: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, options } = e.target;
    const selectedOptions = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: selectedOptions,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "/api/service",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          cache: "no-store",
        },
      );
      if (response.ok) {
        Swal.fire("Form berhasil dikirim!");
        router.push("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Form gagal dikirim",
        });
      }
      await fetch("/api/woowa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: formData.name, phone: formData.phone }),
        cache: "no-store",
      });
      await fetch("/api/woowa-seller", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        cache: "no-store",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error mengirim form",
      });
    }
  };

  return (
    <div>
      <div className="animate_right">
        {/* <!-- ===== Contact Start ===== --> */}
        <section id="support" className="px-0 md:px-4 2xl:px-0">
          <div className="relative mx-auto max-w-c-1390 pb-12 pt-6 md:px-7.5 md:pt-10 xl:px-20 xl:pt-14 lg:px-15 lg:pt-15">
            <div className="gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-10">
              <div className="animate_top w-full rounded-xl bg-blue-950 px-14 py-12 shadow-solid-8">
                <h2 className="mb-8 text-3xl font-bold text-white md:mb-15 xl:text-sectiontitle2">
                  Hubungi Kami
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-7">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nama Anda"
                      className="bg-white-200 rounded-lg px-6 py-2 pl-2 text-slate-600 focus:border-waterloo focus:placeholder:text-gray-600 focus-visible:outline-none lg:w-1/2"
                      onChange={handleChange}
                      value={formData.name}
                    />

                    <input
                      type="text"
                      name="company"
                      placeholder="Nama Perusahaan"
                      className="bg-white-200 rounded-lg px-6 py-2 pl-2 text-slate-600 focus:border-waterloo focus:placeholder:text-gray-600 focus-visible:outline-none lg:w-1/2"
                      onChange={handleChange}
                      value={formData.company}
                    />
                  </div>

                  <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-7">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-white-200 rounded-lg px-6 py-2 pl-2 text-slate-600 focus:border-waterloo focus:placeholder:text-gray-600 focus-visible:outline-none lg:w-1/2"
                      onChange={handleChange}
                      value={formData.email}
                    />

                    <input
                      type="text"
                      name="place"
                      placeholder="Kota Asal"
                      className="bg-white-200 rounded-lg px-6 py-2 pl-2 text-slate-600 focus:border-waterloo focus:placeholder:text-gray-600 focus-visible:outline-none lg:w-1/2"
                      onChange={handleChange}
                      value={formData.place}
                    />
                  </div>

                  <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-7">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Nomor Telepon"
                      className="bg-white-200 rounded-lg px-6 py-2 pl-2 text-slate-600 focus:border-waterloo focus:placeholder:text-gray-600 focus-visible:outline-none lg:w-1/2"
                      onChange={handleChange}
                      value={formData.phone}
                    />
                    <select
                      name="service"
                      className="bg-white-200 rounded-lg px-6 py-2 pl-2 text-slate-600 focus:border-waterloo focus:placeholder:text-gray-600 focus-visible:outline-none lg:w-1/2"
                      onChange={handleChangeSelect}
                      value={formData.service}
                    >
                      <option disabled value="">
                        Pilihan Layanan
                      </option>
                      <option value="Training Ahli Kepabeanan">
                        Training Ahli Kepabeanan
                      </option>
                      <option value="Request Penawaran">
                        Request Penawaran
                      </option>
                      <option value="Konsultasi Masalah KC">
                        Konsultasi Masalah KC
                      </option>
                      <option value="Penetapan Klasifikasi Barang">
                        Penetapan Klasifikasi Barang
                      </option>
                      <option value="Audit KC">Audit KC</option>
                      <option value="Review Kepatuhan dan Mitigasi Resiko">
                        Review Kepatuhan dan Mitigasi Resiko
                      </option>
                      <option value="Inhouse Training KC">
                        Inhouse Training KC
                      </option>
                      <option value="Asistensi Keberatan KC">
                        Asistensi Keberatan KC
                      </option>
                      <option value="Konsultasi Nilai Pabean">
                        Konsultasi Nilai Pabean
                      </option>
                      <option value="Kuasa Hukum Banding PP">
                        Kuasa Hukum Banding PP
                      </option>
                      <option value="Perizinan Fasilitas Kepabeanan">
                        Perizinan Fasilitas Kepabeanan
                      </option>
                    </select>
                  </div>

                  <div className="mb-12.5 flex">
                    <select
                      name="media"
                      className="bg-white-200 w-full rounded-lg px-6 py-3 pl-2 text-slate-600 focus:border-waterloo focus:placeholder:text-gray-600 focus-visible:outline-none"
                      onChange={handleChangeSelect}
                      value={formData.media}
                    >
                      <option disabled value="">
                        Media Konsultasi
                      </option>
                      <option value="Offline di kantor PIC">
                        Offline di kantor PIC
                      </option>
                      <option value="Offline di tempat lain">
                        Offline di tempat lain
                      </option>
                      <option value="Online via zoom">Online via zoom</option>
                      <option value="Konsultasi by WA/Email">
                        Konsultasi by WA/Email
                      </option>
                      <option value="Konsultasi by Phone">
                        Konsultasi by Phone
                      </option>
                    </select>
                  </div>

                  <div className="mb-11.5 flex">
                    <textarea
                      placeholder="Pesan"
                      rows={5}
                      name="message"
                      className="bg-white-200 w-full rounded-lg px-6 py-2 pl-2 text-slate-600 focus:border-waterloo focus:placeholder:text-gray-600 focus-visible:outline-none"
                      onChange={handleChange}
                      value={formData.message}
                    ></textarea>
                  </div>

                  <div className="flex flex-wrap gap-4 xl:justify-between ">
                    <button
                      aria-label="send message"
                      className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 font-medium text-black duration-300 ease-in-out hover:bg-blue-900 hover:text-white"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
