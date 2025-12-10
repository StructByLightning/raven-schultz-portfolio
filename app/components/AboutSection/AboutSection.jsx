"use client";
import css from "./AboutSection.module.scss";
import { gsap } from "@/scripts/gsap";
import ScrollTriggeredAnimation from "@/components/ScrollTriggeredAnimation/ScrollTriggeredAnimation";
import splitIntoAnimatedSpans from "@/scripts/utils/splitIntoAnimatedSpans";


function animate(root) {
  const tl = gsap.timeline();

  tl.set(root.querySelectorAll(".initialInvis"), { visibility: "visible" });

  //Fade in heading
  tl.fromTo(root.querySelector("h2"),
    { opacity: 0, translateY: "-15%" },
    { opacity: 1, translateY: "0%", ease: "sine.inOut", duration: 0.2 });

  //Stagger in text spans
  tl.fromTo(root.querySelectorAll(`.${css.text} span`),
    { opacity: 0, translateY: "-15%" },
    { opacity: 1, translateY: "0%", ease: "sine.inOut", stagger: 0.01, duration: 0.1 },
    "<70%");

  //Fade in contact links
  tl.fromTo(root.querySelectorAll(`.${css.contact} > *`),
    { opacity: 0 },
    { opacity: 1, ease: "sine.inOut", duration: 0.2, stagger: 0.05 });

  return tl;
}

/**
 * About section with bio text and contact form.
 */
const paragraphs = [
  "I have been building things since I was nine years old. Games in elementary school. A network of six game bots running in my garage in high school. Websites in college and after. Now brass-inlaid boxes, handbound books, metal tarot cards. The medium changes. The obsession remains the same.",
  "Craft is a discipline, whether you are making something out of bits or atoms. Interfaces should enhance your agency, not diminish it. A physical object should feel right in your hands. These are the same problem.",
  "I run a makerspace out of my laundry room. Laser cutters, 3D printers, metalworking tools. When something needs to exist, I will find a way to make it exist. Everything else is incidental. Bits or atoms, screen or steel: there is a vision and then there is the work of making it real.",
  "Every problem is a design problem. Every constraint is an invitation. The tools keep getting better and the problems keep getting harder and that is exactly how it should be. We are not done building. We will never be done building. That is not a burden. That is the point.",
];


export default function AboutSection() {
  return <section className={css.about} id="about">
    <ScrollTriggeredAnimation animation={animate} className="sectionInner" threshold={0.3}>
      <h2 className="initialInvis">About</h2>
      <div className={`initialInvis ${css.text}`}>
        {paragraphs.map((text, i) => <p key={i}>{splitIntoAnimatedSpans(text)}</p>)}
      </div>
    </ScrollTriggeredAnimation>
  </section>;
}
