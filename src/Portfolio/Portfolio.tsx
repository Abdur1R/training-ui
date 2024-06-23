import React, { ReactElement, useState } from "react";
import SideBar from "./SideBar";
import "./PortFolio.scss";
import ProfilePic from "../Pictures/pic.png";
import SectionBody from "./SectionBody";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import AboutSection from "./AboutSection";
import SkillSection from "./SkillSection";
import LinkSection from "./LinkSection";
import { Switch } from "antd";

const PortFolio: React.FC = (): ReactElement => {
    const [state, updateState] = useState<any>({ modeSwitch: false });

    const ModeSwitchChange = (enabled: boolean) => {
        updateState((prev: any) => ({ ...prev, modeSwitch: enabled }));
    };

    return (
        <div className="portFolio">
            <div className="portfolio-anchor">
                <div>
                    <img src={ProfilePic} alt="Profile Pic" className="profilePic" />
                </div>
                <Switch
                    style={{ backgroundColor: state.modeSwitch ? "green" : "grey" }}
                    size="default"
                    onChange={ModeSwitchChange}
                    checked={state.modeSwitch}
                />
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
                            key: 'links',
                            href: '#/portfolio/links',
                            title: 'Links',
                        },
                        {
                            key: 'contact',
                            href: '#/portfolio/contact',
                            title: 'Contact',
                        },
                    ]}
                />
            </div>
            <div className={state.modeSwitch ? "portfolio-body darkMode" : "portfolio-body"}>
                <SectionBody
                    darkMode={state.modeSwitch}
                    head={"About"}
                    body={<AboutSection />}
                    subHead={""}
                    id={"/portfolio/about"}
                />
                <SectionBody
                    darkMode={state.modeSwitch}
                    head={"Professional Experience (2+ years)"}
                    body={<ExperienceSection />}
                    subHead={"Product Development Engineer - 1 , PHENOM"}
                    id={"/portfolio/experience"}
                />
                <SectionBody
                    darkMode={state.modeSwitch}
                    head={"Education"}
                    body={<EducationSection />}
                    subHead={""}
                    id={"/portfolio/education"}
                />
                <SectionBody
                    darkMode={state.modeSwitch}
                    head={"Skills"}
                    body={<SkillSection />}
                    subHead={""}
                    id={"/portfolio/skills"}
                />
                <SectionBody
                    darkMode={state.modeSwitch}
                    head={"Links"}
                    body={<LinkSection />}
                    subHead={""}
                    id={"/portfolio/links"}
                />
                <SectionBody
                    darkMode={state.modeSwitch}
                    head={"Contact"}
                    body={<>+919866868600 | abdurrahmanshaik111@gmail.com | Hyderabad India</>}
                    subHead={""}
                    id={"/portfolio/contact"}
                />
            </div>
        </div>
    );
};

export default PortFolio;