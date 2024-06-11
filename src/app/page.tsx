import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Roadmap from "@/components/Roadmap";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-between bg-gradient-to-t from-gray-900 to-gray-700">
      <Navbar />
      <Hero/>
      <Features />
      <Roadmap/>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </main>
  );
}
