import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { Quote } from "lucide-react";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="rounded-[28px] sm:rounded-[32px] bg-white p-6 sm:p-8 border border-slate-100 shadow-xl h-[320px] sm:h-[300px] flex flex-col transition-all hover:shadow-2xl hover:-translate-y-1">
      <div className="mb-6 flex justify-between items-center border-b border-dashed border-slate-100 pb-6 shrink-0">
        <div className="min-w-0 mr-4">
          <h3 className="mb-1 text-lg font-black text-slate-900 uppercase tracking-tighter truncate">
            {name}
          </h3>
          <p className="text-sm text-slate-500 font-bold truncate">{designation}</p>
        </div>
        <Image
          width={50}
          height={50}
          className="rounded-2xl object-cover shrink-0"
          src={image}
          alt={name}
        />
      </div>
      <div className="relative flex-1 overflow-hidden">
        <Quote className="h-8 w-8 text-gojek-green/20 absolute -top-1 -left-1" />
        <p className="text-slate-600 text-sm leading-relaxed pl-8 font-medium line-clamp-6">{content}</p>
      </div>
    </div>
  );
};

export default SingleTestimonial;
