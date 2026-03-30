"use client";

import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";

const Testimonial = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter">
            Testimonials
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">
            Beberapa testimonial dari client yang telah bekerja sama dengan kami.
          </p>
          <div className="w-24 h-2 bg-gojek-green mx-auto rounded-full" />
        </div>

        <div className="swiper testimonial-01 pb-16">
          <Swiper
            spaceBetween={24}
            slidesPerView={2}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
          >
            {testimonialData.map((review) => (
              <SwiperSlide key={review?.id}>
                <SingleTestimonial review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
