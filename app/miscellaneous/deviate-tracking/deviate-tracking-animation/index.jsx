"use client";
import css from "./index.module.scss";
import { useEffect, useRef, useState } from "react";
import gsap from "scripts/gsap/index.js";
import NoCodeSvg from "./noCode.svg";
import NoHassleSvg from "./noHassle.svg";
import NoServerSvg from "./noServer.svg";
import MorphSVGPlugin from "@/scripts/gsap/MorphSVGPlugin";
import CustomEase from "@/scripts/gsap/CustomEase";
import DrawSVGPlugin from "@/scripts/gsap/DrawSVGPlugin";
import TextPlugin from "@/scripts/gsap/TextPlugin";

export default function Morph() {
  const svg = useRef();

  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    gsap.registerPlugin(DrawSVGPlugin);
    gsap.registerPlugin(TextPlugin);

    const easeFlickerIn = CustomEase.create("custom", "M0,0,C0.052,0.103,0.154,1,0.256,1,0.358,1,0.652,0,0.752,0,0.856,0,0.905,1,1,1");

    function showSlogan(favored){
      let tl = gsap.timeline();
      //show slogan
      tl.set(`.${css.serverlessAnimation} .${css.intro} > *`, {color: "#000000", opacity: 1});
      tl.set(`.${css.serverlessAnimation} .${css.intro} > *:nth-child(1)`, {text: {value: "         ", preserveSpaces: true}});
      tl.set(`.${css.serverlessAnimation} .${css.intro} > *:nth-child(2)`, {text: {value: "       ", preserveSpaces: true}});
      tl.set(`.${css.serverlessAnimation} .${css.intro} > *:nth-child(3)`, {text: {value: "         ", preserveSpaces: true}});
      tl.fromTo(`.${css.serverlessAnimation} .${css.intro} > *:nth-child(1)`, {text: {value: "         ", preserveSpaces: true}}, {text: {value: "No server", preserveSpaces: true}, duration: 10 * 0.025, ease: "linear"});
      tl.fromTo(`.${css.serverlessAnimation} .${css.intro} > *:nth-child(2)`, {text: {value: "       ", preserveSpaces: true}}, {text: {value: "No code", preserveSpaces: true}, duration: 8 * 0.025, ease: "linear"});
      tl.fromTo(`.${css.serverlessAnimation} .${css.intro} > *:nth-child(3)`, {text: {value: "         ", preserveSpaces: true}}, {text: {value: "No hassle", preserveSpaces: true}, duration: 10 * 0.025, ease: "linear"});

      //show favored
      for (let i = 1; i <= 3; i++){
        if (i !== favored){
          tl.fromTo(`.${css.serverlessAnimation} .${css.intro} > *:nth-child(${i})`, {color: "#000000", opacity: 1}, {opacity: 0, duration: 0.2, ease: easeFlickerIn}, i === 1 ? ">0.5" : "<15%");
        } else {
          tl.fromTo(`.${css.serverlessAnimation} .${css.intro} > *:nth-child(${i})`, {color: "#000000", opacity: 1}, {color: "#42bafb", duration: 0.2, ease: easeFlickerIn}, i === 1 ? ">0.5" : "<15%");
        }
      }

      tl.fromTo(`.${css.serverlessAnimation} .${css.intro} > *:nth-child(${favored})`, {opacity: 1}, {opacity: 0, duration: 0.2, ease: "sine.inOut"}, ">0.5");

      return tl;
    }

    let tl = gsap.timeline({repeat: -1, repeatDelay: 2});
    tl.to(`.${css.serverlessAnimation} .initialInvis`, {visibility: "visible"});

    tl.add(showSlogan(1));


    //server icons drop in
    tl.fromTo(`.${css.serverlessAnimation} .${css.noServer} .server`, {
      translateY: "-200%",
      opacity: 0,
    }, {
      translateY: "0%",
      opacity: 1,
      duration: 0.2,
      ease: "quad.in",
      stagger: {
        each: 0.05,
      },
    });

    //cancel circle
    tl.fromTo(`.${css.serverlessAnimation} .${css.noServer} .circle`, {drawSVG: "0% 0%"}, {drawSVG: "0% 100%", ease: "sine.inOut", duration: 0.3});
    tl.fromTo(`.${css.serverlessAnimation} .${css.noServer} .cross`, {drawSVG: "0% 0%"}, {drawSVG: "0% 100%", ease: "sine.inOut", duration: 0.2});

    //show caption
    tl.fromTo(`.${css.serverlessAnimation} .${css.noServer} .${css.caption}`, {opacity: 0}, {opacity: 1, duration: 0.5, ease: "sine.inOut"});

    //fade out slide
    tl.fromTo(`.${css.serverlessAnimation} .${css.noServer}`, {opacity: 1}, {opacity: 0, duration: 0.2, ease: "sine.inOut"}, ">2");


    tl.add(showSlogan(2));

    tl.set(`.${css.serverlessAnimation} .${css.noCode} svg path`, {stroke: "#000000"});
    tl.fromTo(`.${css.serverlessAnimation} .${css.noCode} svg .code`, {
      drawSVG: "0% 0%",
    }, {
      drawSVG: "0% 100%",
      duration: 0.3,
      ease: "sine.inOut",
      stagger: {
        each: 0.25,
      },
    });
    tl.fromTo(`.${css.serverlessAnimation} .${css.noCode} svg path`, {stroke: "#000000"}, {stroke: "#42bafb", duration: 0.2, ease: easeFlickerIn}, ">0.1");
    tl.fromTo(`.${css.serverlessAnimation} .${css.noCode} svg .angle1`, {translateX: "0"}, {translateX: "-30%", duration: 0.2, ease: "sine.in"});
    tl.fromTo(`.${css.serverlessAnimation} .${css.noCode} svg .angle2`, {translateX: "0"}, {translateX: "30%", duration: 0.2, ease: "sine.in"}, "<");
    tl.to(`.${css.serverlessAnimation} .${css.noCode} svg .slash`, {drawSVG: "20% 80%", duration: 0.2, ease: "sine.in"}, "<");
    tl.fromTo(`.${css.serverlessAnimation} .${css.noCode} svg .circle`, {drawSVG: "0% 0%"}, {drawSVG: "0% 100%", duration: 0.2, ease: "sine.in"}, "<50%");


    //show caption
    tl.fromTo(`.${css.serverlessAnimation} .${css.noCode} .${css.caption}`, {opacity: 0}, {opacity: 1, duration: 0.5, ease: "sine.inOut"});

    //fade out slide
    tl.fromTo(`.${css.serverlessAnimation} .${css.noCode}`, {opacity: 1}, {opacity: 0, duration: 0.2, ease: "sine.inOut"}, ">2");


    tl.add(showSlogan(3));
    tl.set(`.${css.serverlessAnimation} .${css.noHassle} svg path`, {fill: "#000000"});

    tl.fromTo([`.${css.serverlessAnimation} .${css.noHassle} svg .counter0`, `.${css.serverlessAnimation} .${css.noHassle} svg .minutes`], {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.2,
      ease: "sine.inOut",
    }, "<");

    tl.fromTo(`.${css.serverlessAnimation} .${css.noHassle} svg .line`, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.1,
      ease: "sine.inOut",
      stagger: {
        amount: 2,
      },
    });


    //5 second count up
    let counterTl = gsap.timeline();
    counterTl.fromTo(`.${css.serverlessAnimation} .${css.noHassle} .counter0`, {opacity: 0}, {opacity: 1, duration: 0.2, ease: "sine.inOut"}, 0);

    counterTl.to(`.${css.serverlessAnimation} .${css.noHassle} .counter0`, {opacity: 0, duration: 0.2, ease: "sine.inOut"}, 0.4);
    counterTl.fromTo(`.${css.serverlessAnimation} .${css.noHassle} .counter1`, {opacity: 0}, {opacity: 1, duration: 0.2, ease: "sine.inOut"}, 0.4);

    counterTl.to(`.${css.serverlessAnimation} .${css.noHassle} .counter1`, {opacity: 0, duration: 0.2, ease: "sine.inOut"}, 0.8);
    counterTl.fromTo(`.${css.serverlessAnimation} .${css.noHassle} .counter2`, {opacity: 0}, {opacity: 1, duration: 0.2, ease: "sine.inOut"}, 0.8);

    counterTl.to(`.${css.serverlessAnimation} .${css.noHassle} .counter2`, {opacity: 0, duration: 0.2, ease: "sine.inOut"}, 1.2);
    counterTl.fromTo(`.${css.serverlessAnimation} .${css.noHassle} .counter3`, {opacity: 0}, {opacity: 1, duration: 0.2, ease: "sine.inOut"}, 1.2);

    counterTl.to(`.${css.serverlessAnimation} .${css.noHassle} .counter3`, {opacity: 0, duration: 0.2, ease: "sine.inOut"}, 1.6);
    counterTl.fromTo(`.${css.serverlessAnimation} .${css.noHassle} .counter4`, {opacity: 0}, {opacity: 1, duration: 0.2, ease: "sine.inOut"}, 1.6);

    counterTl.to(`.${css.serverlessAnimation} .${css.noHassle} .counter4`, {opacity: 0, duration: 0.2, ease: "sine.inOut"}, 2.0);
    counterTl.fromTo(`.${css.serverlessAnimation} .${css.noHassle} .counter5`, {opacity: 0}, {opacity: 1, duration: 0.2, ease: "sine.inOut"}, 2.0);

    tl.add(counterTl, "<");

    //flicker the timer to blue
    tl.fromTo(`.${css.serverlessAnimation} .${css.noHassle} svg path`, {fill: "#000000"}, {fill: "#42bafb", duration: 0.2, ease: easeFlickerIn});

    //show caption
    tl.fromTo(`.${css.serverlessAnimation} .${css.noHassle} .${css.caption}`, {opacity: 0}, {opacity: 1, duration: 0.5, ease: "sine.inOut"});

    return () => {
      tl.kill();
    };
  }, []);

  return <div ref={svg} className={css.deviateTrackingAnimation}>
    <div class={css.serverlessBlock}>
      <h2>True Serverless Setup</h2>
      <div class={css.row}>
        <div class={css.serverlessAnimation}>
          <div class={css.wrapper}>
            <div class={css.intro}>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </div>
            <div class={`invis initialInvis ${css.noServer}`}>
              <div class={css.servers}>
                <NoServerSvg/>
              </div>
              <div class={css.caption}>Data is sent directly to Deviate Tracking, negating the need for a server.</div>
            </div>
            <div class={`initialInvis ${css.noCode}`}>
              <div class={css.code}>
                <NoCodeSvg/>
              </div>
              <div class={css.caption}>No code required — installation is done through a graphical interface.</div>
            </div>
            <div class={`initialInvis ${css.noHassle}`}>
              <div class={css.hassle}>
                <NoHassleSvg/>
              </div>
              <div class={css.caption}>Installation takes just five minutes.</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>;
}
