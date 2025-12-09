"use client";

import SignatureSvg from "./signature.svg";
import css from "./Signature.module.scss";
import gsap from "scripts/gsap/index.js";
import { useEffect, useRef } from "react";
import DrawSVGPlugin from "@/scripts/gsap/DrawSVGPlugin";
import CustomEase from "@/scripts/gsap/CustomEase";

export default function Signature({ className }) {
  let wrapperRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(CustomEase, DrawSVGPlugin);
    let letters = Array.from(wrapperRef.current.querySelectorAll(".letterStroke"));

    let totalLength = letters.reduce((sum, letter) => sum + letter.getTotalLength(), 0);

    CustomEase.create("subtleInOut", "M0,0 C0.02,0 0.98,1 1,1");

    let tl = gsap.timeline({ paused: true });
    tl.set(letters, { visibility: "visible" });

    for (let letter of letters) {
      let length = letter.getTotalLength();
      let duration = length / totalLength * letters.length;

      tl.fromTo(letter, {
        drawSVG: "0% 0%",
      }, {
        drawSVG: "0% 100%",
        duration,
        ease: "linear",
      });
    }

    gsap.to(tl, {
      time: tl.duration(),
      duration: 3,
      ease: "subtleEase",
    });

    //tl.to(pieTl, {time: pieTl.duration(), duration: pieTl.duration(), ease: "sine.inOut"});
  }, []);


  return <div className={`${css.signature} ${className}`} ref={wrapperRef}>
    <SignatureSvg />
  </div>;
}
