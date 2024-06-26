import { Metadata } from "next";
import Hero from "@/components/Hero";
import Jumbotron from "@/components/Jumbotron";
import Feature from "@/components/Features";
import Jumbotron2 from "@/components/Jumbotron2";

export const metadata: Metadata = {
  title: "PIC Training - Spesialis training kepabeanan, ekspor, dan impor",
  description: "PIC Training landing page",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <Hero />
      <Feature />
      <Jumbotron2 />
    </main>
  );
}
