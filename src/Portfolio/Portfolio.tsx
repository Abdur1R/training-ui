import React from "react";
import SideBar from "./SideBar";
import "./PortFolio.scss";
import ProfilePic from "../Pictures/pic.png";

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
                <div className="section" id="/portfolio/about">
                    About
                </div>
                <div className="section" id="/portfolio/experience">
                    Experience
                </div>
                <div className="section" id="/portfolio/education">
                    Education
                </div>
                <div className="section" id="/portfolio/skills">
                    Skills
                </div>
                <div className="section" id="/portfolio/contact">
                    Contact
                </div>
            </div>
        </div>
    );
};

export default PortFolio;