export interface TopSpeakers{
    image:string,
    role: string,
    name:string,
}

export interface WhatHappenCards{
    icon:string,
    title:string,
    description:string,
}
export interface LatestGallery{
    image:string,
}

export interface EventItem {
    year: string,
    span: string,
    description: string,
    image:string,
    speakers: TopSpeakers[],
    whatHappen: WhatHappenCards[],
    latestGallery: LatestGallery[],
    SHOW_TOP_SPEAKERS: boolean,
    SHOW_WHAT_HAPPENED: boolean,
    SHOW_LATEST_GALLERY: boolean,
}



export const eventItem: EventItem[] = [
    {
        year:"2023",
        span:"GDSC Scope Game",
        description:"was an interactive career-focused event organized by GDSC Fayoum University. Inspired by video games, the event turned different tech career paths, skills, and challenges into game-like levels to make career exploration more engaging for students.",
        image:"/events/Event2023.png",
        speakers:[
            {
                image:"/speakers/2023/Eng.MohamedAmr.png",
                role: "Head of full stack instructors at Amit foundeder of itrax",
                name:"Eng.Mohamed Amr"
            },
            {
                image:"/speakers/2023/Eng.AhmedNabil.png",
                role: "FOUNDER OF KOTLIN EGYPT SOFTWARE TECHNICAL LEAD AT VOIS TRAINED OVER 100K",
                name:"Eng.Ahmed Nabil"
            },
            {
                image:"/speakers/2023/Eng.EHAB KHATER.png",
                role: "FOUNDER SCIENCE LAND",
                name:"Eng.EHAB KHATER"
            },
            {
                image:"/speakers/2023/DR. DOAA HOSSNI.png",
                role: "PSYCHOLOGICAL AND EDUCATIONAL CONSULTANT",
                name:"DR. DOAA HOSSNI"
            },
            {
                image:"/speakers/2023/Eng.YASMIN MOHAMED.png",
                role: "HUMAN RESOURCES & TALENT ACQUISITION SPECEIALIST",
                name:"Eng.YASMIN MOHAMED"
            },
        ],
        whatHappen:[
            {
                icon:"search",
                title:"Explore Career Paths",
                description:"Discover different career paths and opportunities in the tech industry.",
            },
            {
                icon:"rocket",
                title:"Level Up Your Skills",
                description:"Learn about the skills and knowledge needed to grow academically and professionally.",
            },
            {
                icon:"lightbulb",
                title:"Learn from Professionals",
                description:"Gain real-world insights through talks and discussions with industry professionals.",
            },
        ],
        latestGallery:[],
        SHOW_TOP_SPEAKERS:true,
        SHOW_WHAT_HAPPENED:true,
        SHOW_LATEST_GALLERY:false,
    },
    {
        year:"2024",
        span:"GDSC Sketch",
        description:"transformed tech education into an immersive theatrical experience, where real-world stories, social situations, and emerging technology came together through a series of engaging sketches.",
        image:"/events/Event2024.png",
        speakers:[
            {
                image:"/speakers/2024/MohammedDarwish.png",
                role: "Digital Marketing & Freelancing Turning digital marketing into the art of telling a great story.",
                name:"Mohammed Darwish"
            },
            {
                image:"/speakers/2024/Eng. Ahmed Montasser.png",
                role: "Business Management & Startups From an idea to a real business — understanding how to build and manage a startup.",
                name:"Eng. Ahmed Montasser"
            },
            {
                image:"/speakers/2024/Dr. Mariam William.png",
                role: "HR & Career Development Understanding the HR interview and how recruiters really think.",
                name:"Dr. Mariam William"
            },
            {
                image:"/speakers/2024/Dr. Mohamed Farouk.png",
                role: "Rational Management & Leadership Learning how to make smart decisions and manage resources with clarity.Rational Management & Leadership Learning how to make smart decisions and manage resources with clarity.",
                name:"Dr. Mohamed Farouk"
            },
            {
                image:"/speakers/2024/Eng.Bahaa Othman.png",
                role: "Cybersecurity Exploring the world of cybersecurity and protecting the digital realm.",
                name:"Eng.Bahaa Othman"
            },
        ],
        whatHappen:[],
        latestGallery:[
            {
                image:"/latestGallery/2024/image1.jpg",
            },
            {
                image:"/latestGallery/2024/image2.jpg",
            },
            {
                image:"/latestGallery/2024/image3.jpg",
            },
            {
                image:"/latestGallery/2024/image4.jpg",
            },
            {
                image:"/latestGallery/2024/image5.jpg",
            },
            {
                image:"/latestGallery/2024/image6.jpg",
            },
            {
                image:"/latestGallery/2024/image7.jpg",
            },
            {
                image:"/latestGallery/2024/image8.jpg",
            },
            {
                image:"/latestGallery/2024/image9.jpg",
            },
            {
                image:"/latestGallery/2024/image10.jpg",
            },
            {
                image:"/latestGallery/2024/image11.jpg",
            },
            {
                image:"/latestGallery/2024/image12.jpg",
            },
        ],
        SHOW_TOP_SPEAKERS:true,
        SHOW_WHAT_HAPPENED:false,
        SHOW_LATEST_GALLERY:true,
    },
    {
        year:"2022",
        span:"GDSC Multiverse",
        description:"was an immersive kickoff and tech exploration event organized by GDSC Fayoum University, designed around the concept of parallel universes to make discovering various tech fields more engaging and expansive for students.",
        image:"/events/Event2022.png",
        speakers:[
            {
                image:"/speakers/2022/Eng.Abdelhady Mohamed.jpg",
                role: "Founder & Lead of GDSC Fayoum University Topic:Discovering the GDSC Ecosystem",
                name:"Eng.Abdelhady Mohamed"
            },
            {
                image:"/speakers/2022/Eng.Hazem Zidan.jpg",
                role: "Founder of HZ Dot · Web Developer & Coach Topic: Freelancing & Web Development",
                name:"Eng.Hazem Zidan"
            },
            {
                image:"/speakers/2022/Eng.Mohamed Nagy.jpg",
                role: "Leader of GDG Cairo · Senior Technical Consultant Topic: Process Automation, Digital Transformation & Hackathons",
                name:"Eng.Mohamed Nagy"
            },
            {
                image:"/speakers/2022/Eng.Ahmed Nabil.jpg",
                role: "Founder of Kotlin Egypt · Software Technical Lead at _VOIS Topic: Mobile Development & Career Growth",
                name:"Eng.Ahmed Nabil"
            },
            {
                image:"/speakers/2022/Eng.Mohammed Amr.jpg",
                role: "Head of Full Stack Instructors at AMIT · Founder of ITRAX Topic: Backend Development & Career Growth",
                name:"Eng.Mohammed Amr"
            },
            {
                image:"/speakers/2022/DR.Mostafa Kandil.jpg",
                role: "Dentist · Teaching Assistant · Content Creator Topic: Personal Development & Life Skil",
                name:"DR.Mostafa Kandil"
            },
        ],
        whatHappen:[],
        latestGallery:[
            {
                image:"/latestGallery/2022/image1.jpg",
            },
            {
                image:"/latestGallery/2022/image2.jpg",
            },
            {
                image:"/latestGallery/2022/image3.jpg",
            },
            {
                image:"/latestGallery/2022/image4.jpg",
            },
            {
                image:"/latestGallery/2022/image5.jpg",
            },
            {
                image:"/latestGallery/2022/image6.jpg",
            },
            {
                image:"/latestGallery/2022/image7.jpg",
            },
            {
                image:"/latestGallery/2022/image8.jpg",
            },
            {
                image:"/latestGallery/2022/image9.jpg",
            },
            {
                image:"/latestGallery/2022/image10.jpg",
            },
            {
                image:"/latestGallery/2022/image11.jpg",
            },
            {
                image:"/latestGallery/2022/image12.jpg",
            },
        ],
        SHOW_TOP_SPEAKERS:true,
        SHOW_WHAT_HAPPENED:false,
        SHOW_LATEST_GALLERY:true,
    },



];