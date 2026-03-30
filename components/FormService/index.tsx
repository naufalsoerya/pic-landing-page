"use client";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Send } from "lucide-react";

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

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        cache: "no-store",
      });
      if (response.ok) {
        Swal.fire("Form berhasil dikirim!");
        router.push("/");
      } else {
        Swal.fire({ icon: "error", title: "Oops...", text: "Form gagal dikirim" });
      }
      await fetch("/api/woowa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, phone: formData.phone }),
        cache: "no-store",
      });
      await fetch("/api/woowa-seller", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        cache: "no-store",
      });
    } catch (error) {
      Swal.fire({ icon: "error", title: "Oops...", text: "Error mengirim form" });
    }
  };

  const inputClass =
    "w-full rounded-2xl border border-orange-200 bg-white px-5 py-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-gojek-green focus:outline-none focus:ring-2 focus:ring-gojek-green/20 transition-all";

  return (
    <div className="w-full">
      <div className="rounded-[32px] sm:rounded-[40px] bg-gojek-green p-8 sm:p-10 shadow-2xl shadow-orange-900/30 sticky top-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:24px_24px]" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/10 blur-[100px] rounded-full -translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="relative z-10">
          <h2 className="mb-8 text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter">
            Form Konsultasi
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Nama Anda" className={inputClass} onChange={handleChange} value={formData.name} />
              <input type="text" name="company" placeholder="Nama Perusahaan" className={inputClass} onChange={handleChange} value={formData.company} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="email" name="email" placeholder="Email" className={inputClass} onChange={handleChange} value={formData.email} />
              <input type="text" name="place" placeholder="Kota Asal" className={inputClass} onChange={handleChange} value={formData.place} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="phone" placeholder="Nomor Telepon" className={inputClass} onChange={handleChange} value={formData.phone} />
              <Select value={formData.media} onValueChange={(val) => handleSelectChange("media", val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Media Konsultasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Offline di kantor PIC">Offline di kantor PIC</SelectItem>
                  <SelectItem value="Offline di tempat lain">Offline di tempat lain</SelectItem>
                  <SelectItem value="Online via zoom">Online via zoom</SelectItem>
                  <SelectItem value="Konsultasi by WA/Email">Konsultasi by WA/Email</SelectItem>
                  <SelectItem value="Konsultasi by Phone">Konsultasi by Phone</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Select value={formData.service} onValueChange={(val) => handleSelectChange("service", val)}>
              <SelectTrigger>
                <SelectValue placeholder="Pilihan Layanan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Training Ahli Kepabeanan">Training Ahli Kepabeanan</SelectItem>
                <SelectItem value="Konsultasi Masalah KC">Konsultasi Masalah KC</SelectItem>
                <SelectItem value="Penetapan Klasifikasi Barang">Penetapan Klasifikasi Barang</SelectItem>
                <SelectItem value="Audit KC">Audit KC</SelectItem>
                <SelectItem value="Review Kepatuhan dan Mitigasi Resiko">Review Kepatuhan dan Mitigasi Resiko</SelectItem>
                <SelectItem value="Inhouse Training KC">Inhouse Training KC</SelectItem>
                <SelectItem value="Asistensi Keberatan KC">Asistensi Keberatan KC</SelectItem>
                <SelectItem value="Konsultasi Nilai Pabean">Konsultasi Nilai Pabean</SelectItem>
                <SelectItem value="Kuasa Hukum Banding PP">Kuasa Hukum Banding PP</SelectItem>
                <SelectItem value="Perizinan Fasilitas Kepabeanan">Perizinan Fasilitas Kepabeanan</SelectItem>
              </SelectContent>
            </Select>

            <textarea
              placeholder="Pesan"
              rows={5}
              name="message"
              className={`${inputClass} resize-none`}
              onChange={handleChange}
              value={formData.message}
            />

            <Button
              type="submit"
              size="lg"
              className="bg-white text-gojek-green hover:bg-white/90 font-black w-full sm:w-auto transition-all"
            >
              <Send className="mr-2 h-4 w-4" />
              Kirim Pesan
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
