import AboutUs from "@/components/sections/about/aboutus";
import OurJourney from "@/components/sections/about/ourjourney";
import OurAchievements from "@/components/sections/about/ourachievements";
import OurTracks from "@/components/sections/about/ourtracks";

export default function AboutPage() {
    return (
        <section className="flex w-full flex-col items-center">
            <AboutUs />
            <OurJourney />
            <OurAchievements />
            <OurTracks />
        </section>
    );
}