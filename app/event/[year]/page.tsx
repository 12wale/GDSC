import type { Metadata } from "next";
import { eventItem } from "@/content/event";
import { redirect } from "next/navigation";
import { Hero } from "@/components/sections/event/hero";
import { TopSpeakers } from "@/components/sections/event/TopSpeakers";
import { WhatHappened } from "@/components/sections/event/WhatHappen";
import { Gallery } from "@/components/sections/event/Gallery";


export const metadata: Metadata = {
    title: "Events",
    description:
        "Discover GDSC Fayoum events, workshops, tech talks, and community activities designed to inspire innovation, develop technical skills, and connect passionate students with the world of technology.",
};

interface EventPageProps {
    params: Promise<{ year: string }>;
};

export default async function EventPage({ params }: EventPageProps) {

    const { year } = await params;

    const event = eventItem.find((item) => item.year === year);

    return (

        <section className="flex w-full flex-col items-center pt-[123px]">
            {
                event ?
                <>
                    <Hero span={event.span} description={event.description} image={event.image}></Hero>
                    {event.SHOW_TOP_SPEAKERS && <TopSpeakers speakers={event.speakers}></TopSpeakers>}
                    {event.SHOW_WHAT_HAPPENED && <WhatHappened cards={event.whatHappen}></WhatHappened>}
                    {event.SHOW_LATEST_GALLERY && (<Gallery images={event.latestGallery} />)}
                </> 
                : redirect("/")
            }   
        </section>
    );
}