import { Hero } from "../components/sections/home/Hero";
import { About } from "../components/sections/home/About";
import { Events } from "../components/sections/home/Events";
import { Team } from "../components/sections/home/Team";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Events />
      <Team />
    </div>
  );
}
