import AboutUs from "@/components/sections/about/AboutUs";
import OurJourney from "@/components/sections/about/OurJourney";
import OurAchievements from "@/components/sections/about/OurAchievements";
import { Team } from "@/components/sections/about/Team";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about GDSC Fayoum University's journey, achievements, tracks, and community team.",
};

export default function AboutPage() {
    return (
        <section className="flex w-full flex-col items-center pt-[123px]">
            <AboutUs />
            <OurJourney />
            <OurAchievements />
            <Team />
        </section>
    );
}