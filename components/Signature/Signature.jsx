"use client";

import SignatureSvg from "./signature.svg";
import css from "./Signature.module.scss";
import gsap from "scripts/gsap/index.js";
import { useEffect, useRef } from "react";
import DrawSVGPlugin from "@/scripts/gsap/DrawSVGPlugin";

export default function Signature({ className }) {
  let wrapperRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);
    let letters = wrapperRef.current.querySelectorAll(".letterStroke");

    let tl = gsap.timeline({ paused: true });
    tl.fromTo(letters, {
      drawSVG: "0% 0%",
    }, {
      drawSVG: "0% 100%",
      duration: 1,
      ease: "linear",
      stagger: {
        each: 1,
        from: "end",
      },
    });

    gsap.to(tl, {
      time: tl.duration(),
      duration: 20,
      ease: "sine.inOut",
    });

    //tl.to(pieTl, {time: pieTl.duration(), duration: pieTl.duration(), ease: "sine.inOut"});
  }, []);


  return <div className={`${css.signature} ${className}`} ref={wrapperRef}>
    <SignatureSvg />
  </div>;
}
