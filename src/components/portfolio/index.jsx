import React, {useState} from  "react";

import "./style.scss";
import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";
import img from "../../images/portfolio/thumb-7.jpg";
import img1 from "../../images/portfolio/thumb-2.jpg";
import img2 from "../../images/portfolio/thumb-8.jpg";
import img3 from "../../images/portfolio/thumb-1.jpg";
import img4 from "../../images/portfolio/thumb-6.jpg";
import img5 from "../../images/portfolio/thumb-4.jpg";
import img6 from "../../images/portfolio/thumb-3.jpg";
import img7 from "../../images/portfolio/thumb-5.jpg";

const projectsData = [
    {
        id: 1,
        name: "Healthy Food Restraunt",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: img,
        },
    },
    {
        id: 2,
        name: "Anna & Daniel",
        tags: ["web-page"],
        media: {
            thumbnail: img1,
        },
    },
    {
        id: 3,
        name: "Web Design Landing Page",
        tags: ["web-page"],
        media: {
            thumbnail: img2,
        },
    },
    {
        id: 4,
        name: "Business Analytics Web App",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: img3,
        },
    },
    {
        id: 5,
        name: "Limitless",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: img4,
        },
    },
    {
        id: 6,
        name: "Dashboard",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: img5,
        },
    },
    {
        id: 7,
        name: "Digital Creative Agency",
        tags: ["web-app"],
        media: {
            thumbnail: img6,
        },
    },
    {
        id: 8,
        name: "Virtual Reality Experience",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: img7,
        },
    },

];



function Portfolio() {
    const [projects, setProject] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {};

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition} />


            </div>
        </Section>
    );
};

export default Portfolio;