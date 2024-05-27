import React from "react";
import SideBar from "./SideBar";
import "./PortFolio.scss";
import ProfilePic from "../Pictures/pic.png";
import SectionBody from "./SectionBody";

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
                    body={"jhgdhjgjhgdjkewhdkwejhdkjwehkdjwe,msnjsmsbsjdjdgdjhgdwkjqdhkjqwhdkjhdbjhbdjbjdhdjhdjewgcjygwdvhcsmdc"}
                    subHead={""}
                    id={"/portfolio/about"}
                />
                <SectionBody
                    head={"Experience"}
                    body={"jhgdhjgjhgdjkewhdkwejhdkjwehkdjwe,msnjsmsbsjdjdgdjhgdwkjqdhkjqwhdkjhdbjhbdjbjdhdjhdjewgcjygwdvhcsmdc"}
                    subHead={""}
                    id={"/portfolio/experience"}
                />
                <SectionBody
                    head={"Education"}
                    body={"jhgdhjgjhgdjkewhdkwejhdkjwehkdjwe,msnjsmsbsjdjdgdjhgdwkjqdhkjqwhdkjhdbjhbdjbjdhdjhdjewgcjygwdvhcsmdc"}
                    subHead={""}
                    id={"/portfolio/education"}
                />
                <SectionBody
                    head={"Skills"}
                    body={"jhgdhjgjhgdjkewhdkwejhdkjwehkdjwe,msnjsmsbsjdjdgdjhgdwkjqdhkjqwhdkjhdbjhbdjbjdhdjhdjewgcjygwdvhcsmdc"}
                    subHead={""}
                    id={"/portfolio/skills"}
                />
                <SectionBody
                    head={"Contact"}
                    body={"jhgdhjgjhgdjkewhdkwejhdkjwehkdjwe,msnjsmsbsjdjdgdjhgdwkjqdhkjqwhdkjhdbjhbdjbjdhdjhdjewgcjygwdvhcsmdc"}
                    subHead={""}
                    id={"/portfolio/contact"}
                />
            </div>
        </div>
    );
};

export default PortFolio;