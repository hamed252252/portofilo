import Intro from "@/components/ui/intro";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <section className="py-24">
      <div className="max-w-3x container">
        <h1 className="text-3xl font-bold"> Portofilo</h1>
      </div>
      <div className="container">
        <Intro />
      </div>
    </section>
  );
}
