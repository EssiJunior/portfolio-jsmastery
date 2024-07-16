import Hero from "@/containers/Hero";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/containers/Grid";
import RecentProjects from "@/containers/RecentProjects";
import Clients from "@/containers/Clients";
import Experience from "@/containers/Experience";
import Approach from "@/containers/Approach";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
      </div>
    </main>
  );
}
