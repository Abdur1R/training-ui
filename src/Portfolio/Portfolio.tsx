import React from "react";
import SideBar from "./SideBar";
import "./PortFolio.scss";
import ProfilePic from "../Pictures/pic.png";
import SectionBody from "./SectionBody";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import AboutSection from "./AboutSection";

const PortFolio = () => {
    return (
        <div className="portFolio">
            <div className="portfolio-anchor">
                <div>
                    <img src={ProfilePic} alt="Profile Pic" className="profilePic" />
                </div>
                <SideBar
                    menuList={[
                        {
                            key: 'about',
                            href: '#/portfolio/about',
                            title: 'About',
                        },
                        {
                            key: 'experience',
                            href: '#/portfolio/experience',
                            title: 'Experience',
                        },
                        {
                            key: 'education',
                            href: '#/portfolio/education',
                            title: 'Education',
                        },
                        {
                            key: 'skills',
                            href: '#/portfolio/skills',
                            title: 'Skills',
                        },
                        {
                            key: 'contact',
                            href: '#/portfolio/contact',
                            title: 'Contact',
                        },
                    ]}
                />
            </div>
            <div className="portfolio-body">
                <SectionBody
                    head={"About"}
                    body={<AboutSection />}
                    subHead={""}
                    id={"/portfolio/about"}
                />
                <SectionBody
                    head={"Professional Experience (2+ years)"}
                    body={<ExperienceSection />}
                    subHead={"Product Development Engineer - 1 , PHENOM"}
                    id={"/portfolio/experience"}
                />
                <SectionBody
                    head={"Education"}
                    body={<EducationSection />}
                    subHead={""}
                    id={"/portfolio/education"}
                />
                <SectionBody
                    head={"Skills"}
                    body={<ExperienceSection />}
                    subHead={""}
                    id={"/portfolio/skills"}
                />
                <SectionBody
                    head={"Contact"}
                    body={<ExperienceSection />}
                    subHead={""}
                    id={"/portfolio/contact"}
                />
            </div>
        </div>
    );
};

export default PortFolio;