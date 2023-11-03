"use client";
import css from "./morph.module.scss";
import { useEffect, useRef, useState } from "react";
import gsap from "scripts/gsap/index.js";
import StainedGlassSvg from "./glass.svg";
import MorphSVGPlugin from "@/scripts/gsap/MorphSVGPlugin";

export default function Morph() {
  const svg = useRef();

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin);

    //these two arrays contain all the shards that make up both images
    //there are an equal number of shards in each image
    let mountainShards = Array.from(svg.current.querySelectorAll("g.mountain path"))
      .sort((a, b) => a.getBBox().y - b.getBBox().y);
    let treeShards = Array.from(svg.current.querySelectorAll("g.tree path"))
      .sort((a, b) => a.getBBox().y - b.getBBox().y);


    //animate the morph from one image to another by changing each shard individually
    let tl = gsap.timeline({repeat: -1, yoyo: true, repeatDelay: 1});
    for (let i = 0; i < mountainShards.length; i++){
      tl.fromTo(treeShards[i], {
        morphSVG: treeShards[i].getAttribute("d"),
        fill: treeShards[i].getAttribute("fill"),
      }, {
        morphSVG: mountainShards[i].getAttribute("d"),
        fill: mountainShards[i].getAttribute("fill"),
        duration: 0.5,
        ease: "sine.inOut",
      }, "<.1%");
    }

    return () => {
      tl.kill();
    };
  }, []);

  return <div ref={svg} className={css.morph}>
    <StainedGlassSvg />
  </div>;
}
