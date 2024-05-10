import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Spesialis training kepabeanan, ekspor, dan impor",
  description: "About us page",
  // other metadata
};

const aboutPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default aboutPage;
