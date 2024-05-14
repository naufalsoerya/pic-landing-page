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
}

const ServiceForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    media: "",
    place: "",
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
      const response = await fetch("http://localhost:3000/api/service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        cache: "no-store",
      });
      console.log(response.body, "<<<<<<<<<<<<<<<<");
      if (response.ok) {
        // Proses jika pengiriman form berhasil
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success").then(() => {
              router.push("/");
            });
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info").then(() => {
              router.push("/");
            });
          }
        });
      } else {
        // Proses jika pengiriman Form gagal
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Form gagal dikirim",
        });
      }
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
      <div className="animate_right hidden lg:block">
        {/* <!-- ===== Contact Start ===== --> */}
        <section id="support" className="px-4 md:px-8 2xl:px-0">
          <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-14">
            <div className="gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-10">
              <div className="animate_top w-full rounded-xl bg-blue-950 px-14 py-12 shadow-solid-8">
                <h2 className="mb-15 text-3xl font-bold text-white xl:text-sectiontitle2">
                  Form Konsultasi
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

                  <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-7">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Nomor Telepon"
                      className="bg-white-200 rounded-lg px-6 py-2 pl-2 text-slate-600 focus:border-waterloo focus:placeholder:text-gray-600 focus-visible:outline-none lg:w-1/2"
                      onChange={handleChange}
                      value={formData.phone}
                    />
                    <select
                      name="media"
                      className="bg-white-200 rounded-lg px-6 py-2 pl-2 text-slate-600 focus:border-waterloo focus:placeholder:text-gray-600 focus-visible:outline-none lg:w-1/2"
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
        {/* <!-- ===== Contact End ===== --> */}
      </div>
    </div>
  );
};

export default ServiceForm;
