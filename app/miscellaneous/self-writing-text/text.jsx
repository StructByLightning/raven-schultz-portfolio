"use client";

import CourseWarningSvg from "./courseWarning.svg";
import { useEffect, useRef } from "react";
import gsap from "@/scripts/gsap";
import DrawSVGPlugin from "@/scripts/gsap/DrawSVGPlugin";

export default function CourseWarning({css}){
  const courseWarning = useRef();
  useEffect(() => {
    //coursewarning svg was made with Romantically, 14px, 0.75 stroke
    gsap.registerPlugin(DrawSVGPlugin);

    let strokes = courseWarning.current.querySelectorAll(".stroke");

    let tl = gsap.timeline({delay: 0});
    tl.set(strokes, {visibility: "visible"});

    tl.fromTo(strokes, {drawSVG: "0% 0%"}, {drawSVG: "0% 100%", duration: 4, ease: "none"});

    return () => {
      tl.kill();
    };
  }, []);
  return <div ref={courseWarning}>
    <CourseWarningSvg/>
  </div>;
}
