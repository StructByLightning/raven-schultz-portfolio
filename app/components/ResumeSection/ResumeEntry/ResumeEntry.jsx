"use client";
import UbuntuSvg from "@/public/icons/ubuntu.svg";
import Html5Svg from "@/public/icons/html5.svg";
import CodePullRequestSvg from "@/public/icons/code-pull-request.svg";
import DockerSvg from "@/public/icons/docker.svg";
import GsapSvg from "@/public/icons/gsap.svg";
import NextJsSvg from "@/public/icons/next-js.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import DatabaseSvg from "@/public/icons/database.svg";
import StrapiSvg from "@/public/icons/strapi.svg";
import JestSvg from "@/public/icons/jest.svg";
import GcpSvg from "@/public/icons/gcp.svg";
import NodeJsSvg from "@/public/icons/node-js.svg";
import css from "./ResumeEntry.module.scss";
import Chip from "@/app/components/Chip/Chip";
import SassSvg from "@/public/icons/sass.svg";
import ReactSvg from "@/public/icons/react.svg";
import ScrollTriggeredAnimation from "@/components/ScrollTriggeredAnimation/ScrollTriggeredAnimation";
import { gsap } from "@/scripts/gsap";

function animate(root) {
  let tl = gsap.timeline();


  //Draw separator line
  tl.set(root.querySelectorAll(".initialInvis"), { visibility: "visible" });
  tl.fromTo(root.querySelector(`.${css.verticalSeparator}`), { scaleY: 0, transformOrigin: "50% 0%" }, { scaleY: 1, ease: "sine.inOut", duration: 0.2 });
  tl.fromTo(root.querySelector("h3"), { opacity: 0, translateY: "-15%" }, { opacity: 1, translateY: "0%", ease: "sine.inOut", duration: 0.2 }, "<90%");
  tl.fromTo(root.querySelector(`.${css.subtitle}`), { opacity: 0, translateY: "-15%" }, { opacity: 1, translateY: "0%", ease: "sine.inOut", duration: 0.2 }, "<70%");

  tl.fromTo(root.querySelector(`.${css.body} span`), {
    opacity: 0,
    translateY: "-15%",
  }, {
    opacity: 1,
    translateY: "0%",
    ease: "sine.inOut",
    stagger: 0.1,
    duration: 0.2,
  }, "<70%");

  return tl;
}

export default function ResumeEntry({
  title,
  subtitle,
  children,
  techs,
}) {
  return <ScrollTriggeredAnimation animation={animate} className={css.resumeEntry} threshold={0.5}>
    <div className={`initialInvis ${css.verticalSeparator}`}></div>

    <h3>{title}</h3>
    <div className={css.subtitle}>{subtitle}</div>
    <div className={css.body}>
      {children}
    </div>

    <div className={css.tech}>
      {techs.map((tech) => <Chip icon={tech.icon} text={tech.text} key={tech.text} />)}
    </div>
  </ScrollTriggeredAnimation>;
}
