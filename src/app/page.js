import Image from "next/image";
import HeroSection from "./component/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col " >
        <h1 className="text-white"></h1>
        <HeroSection />
      </main>
  );
}
