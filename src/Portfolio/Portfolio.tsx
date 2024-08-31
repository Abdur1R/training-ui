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
import { Button, Switch } from "antd";
import {
  ProfileOutlined,
  BookOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Skills from "../Pictures/Skills.svg";

const PortFolio: React.FC = (): ReactElement => {
  const [state, updateState] = useState<any>({
    modeSwitch: false,
    sideBar: false,
  });

  const ModeSwitchChange = (enabled: boolean) => {
    updateState((prev: any) => ({ ...prev, modeSwitch: enabled }));
  };

  //   const onMouseEnter = () => {
  //     updateState((prev: any) => ({
  //       ...prev,
  //       sideBar: true,
  //     }));
  //   };

  const onOpenClose = () => {
    updateState((prev: any) => ({
      ...prev,
      sideBar: !state.sideBar,
    }));
  };

  const OpenorClose = state.sideBar ? LeftOutlined : RightOutlined;

  return (
    <div className="portFolio">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          //   onMouseEnter={onMouseEnter}
          //   onMouseLeave={onMouseLeave}
          className={`portfolio-anchor ${state.sideBar ? "width20" : "width0"}`}
        >
          {/* <div className="openCloseDiv"> */}
          <Button className="openCloseDiv" onClick={onOpenClose}>
            <OpenorClose className="openCloseIcon" />
          </Button>
          {/* </div> */}
          {state.sideBar && (
            <>
              <div>
                <img
                  src={ProfilePic}
                  alt="Profile Pic"
                  className="profilePic"
                />
              </div>
              <Switch
                style={{ backgroundColor: state.modeSwitch ? "green" : "grey" }}
                size="default"
                onChange={ModeSwitchChange}
                checked={state.modeSwitch}
              />
            </>
          )}
          {/* <ProfileOutlined alt="About" />
          <BookOutlined alt="Education" /> */}
          <SideBar
            menuList={[
              {
                key: "about",
                href: "#/portfolio/about",
                title: state.sideBar ? (
                  "About"
                ) : (
                  <ProfileOutlined alt="About" />
                ),
              },
              {
                key: "experience",
                href: "#/portfolio/experience",
                title: state.sideBar ? (
                  "Experience"
                ) : (
                  <ProfileOutlined alt="About" />
                ),
                //   title: "Experience",
              },
              {
                key: "education",
                href: "#/portfolio/education",
                title: state.sideBar ? (
                  "Education"
                ) : (
                  <BookOutlined alt="Education" />
                ),
              },
              {
                key: "skills",
                href: "#/portfolio/skills",
                title: state.sideBar ? (
                  "Skills"
                ) : (
                  <img
                    src={Skills}
                    alt="About"
                    style={{ width: "26px", height: "26px", fontWeight: "600" }}
                  />
                ),
              },
              {
                key: "links",
                href: "#/portfolio/links",
                title: state.sideBar ? (
                  "Links"
                ) : (
                  <ProfileOutlined alt="About" />
                ),
              },
              {
                key: "contact",
                href: "#/portfolio/contact",
                title: state.sideBar ? (
                  "Contact"
                ) : (
                  <ProfileOutlined alt="About" />
                ),
              },
            ]}
          />
          {/* </> */}
          {/* )} */}
        </div>
      </div>
      <div
        className={`${
          state.modeSwitch ? "portfolio-body darkMode" : "portfolio-body"
        } ${state.sideBar ? "sideOpen" : "sideClose"}`}
      >
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
          body={
            <div className="contactSection">
              <div>+919866868600</div>
              <div>abdurrahmanshaik111@gmail.com</div>
              <div>Hyderabad India</div>{" "}
            </div>
          }
          subHead={""}
          id={"/portfolio/contact"}
        />
      </div>
    </div>
  );
};

export default PortFolio;
