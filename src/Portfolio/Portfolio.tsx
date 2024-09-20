import React, { ReactElement, useState } from "react";
import SideBar from "./SideBar";
import "./PortFolio.scss";
import ProfilePic from "../Pictures/ProfilrPic.png";
import SectionBody from "./SectionBody";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import AboutSection from "./AboutSection";
import SkillSection from "./SkillSection";
import LinkSection from "./LinkSection";
import { Button, Modal, Switch } from "antd";
import {
  ProfileOutlined,
  BookOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Skills from "../Pictures/Skills.svg";
import { LinkedinFilled } from "@ant-design/icons";
import LinkedIn from "../Pictures/LinkedIn.svg";
import GitHub from "../Pictures/github-mark.svg";
import LeetCode from "../Pictures/LeetCode.svg";
import Instagram from "../Pictures/Instagram.svg";
import Twitter from "../Pictures/Twitter.svg";

const PortFolio: React.FC = (): ReactElement => {
  const [state, updateState] = useState<any>({
    modeSwitch: false,
    sideBar: true,
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
              <img src={ProfilePic} alt="Profile Pic" className="profilePic" />
            </div>
            <div className="iconLinks">
              <div className="codeIcons">
                <a
                  title="LinkedIn"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/abdur-rahman-shaik-55b88a202/"
                >
                  <img src={LinkedIn} alt="LinkedIn" className="width16" />
                </a>
                <a
                  title="LeetCode"
                  rel="noreferrer"
                  target="_blank"
                  href="https://leetcode.com/Abdur1/"
                >
                  <img src={LeetCode} alt="LeetCode" className="width14" />
                </a>
                <a
                  title="GitHub"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/Abdur1R"
                >
                  <img src={GitHub} alt="GitHub" className="width16" />
                </a>
              </div>
              <div className="mediaIcons">
                <a
                  title="Instagram"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/a.b.d.u.r.1/"
                >
                  <img src={Instagram} alt="Instagram" className="width20P5" />
                </a>
                <a
                  title="Twitter"
                  rel="noreferrer"
                  target="_blank"
                  href="https://x.com/AbdurRahmanSk11"
                >
                  <img src={Twitter} alt="Twitter" className="width20P5" />
                </a>
              </div>
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
              title: state.sideBar ? "About" : <ProfileOutlined alt="About" />,
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
            // {
            //   key: "links",
            //   href: "#/portfolio/links",
            //   title: state.sideBar ? "Links" : <ProfileOutlined alt="About" />,
            // },
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
      <div
        className={`${
          state.modeSwitch ? "portfolio-body darkMode" : "portfolio-body"
        } ${state.sideBar ? "sideOpen" : "sideClose"}`}
      >
        <SectionBody
          darkMode={state.modeSwitch}
          head={
            <div className="d-flex-row">
              <h2 style={{ marginBottom: "-12px" }}>Abdur Rahman Shaik</h2>
              <Button className="resumeBtn">
                <a
                  href="/Resume1909.pdf"
                  download="ABDUR RAHMAN RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Download Resume
                </a>
              </Button>
              {/*<Modal open={false}></Modal> */}
            </div>
          }
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
        {/* <SectionBody
          darkMode={state.modeSwitch}
          head={"Links"}
          body={<LinkSection />}
          subHead={""}
          id={"/portfolio/links"}
        /> */}
        <SectionBody
          darkMode={state.modeSwitch}
          head={"Contact"}
          body={
            <div className="contactSection">
              <h5>Phone:</h5>
              <div>+1 646 789 8871 - US</div>
              <h5>Whatsapp:</h5>
              <div>+91 9866868600 - IN</div>
              <h5>Personal Email ID:</h5>
              <div>abdurrahmanshaik111@gmail.com</div>
              <h5>University Email ID:</h5>
              <div>shaika4@mail.uc.edu</div>
              <h5>Study/University Address:</h5>
              <div>Cincinnati, Ohio, United States of America</div>
              <h5>Home Address:</h5>
              <div>Mahabubabad, Telangana, India</div>
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
