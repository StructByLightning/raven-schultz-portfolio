"use client";
import css from "./AboutSection.module.scss";
import { gsap } from "@/scripts/gsap";
import ScrollTriggeredAnimation from "@/components/ScrollTriggeredAnimation/ScrollTriggeredAnimation";
import splitIntoAnimatedSpans from "@/scripts/utils/splitIntoAnimatedSpans";
import Button from "@/components/Button/Button";


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

  //Fade in email button
  tl.fromTo(root.querySelectorAll(`.${css.button}`),
    { opacity: 0 },
    { opacity: 1, ease: "sine.inOut", duration: 0.2 }, "<90%");

  return tl;
}

/**
 * About section with bio text and contact form.
 */
const paragraphs = [
  "I have been building things since I was nine years old. Games in elementary school. A network of six game bots running in my garage in high school. Websites in college and after. Now brass-inlaid boxes, handbound books, and SaaS webapps. The medium changes. The obsession remains the same.",
  "Craft is a discipline, whether you are making something out of bits or atoms. Interfaces should enhance your agency, not diminish it. A physical object should feel right in your hands. These are the same problem.",
  "If you are building something interesting, I would like to hear about it.",
];


export default function AboutSection() {
  return <section className={css.about} id="about">
    <ScrollTriggeredAnimation animation={animate} className="sectionInner" threshold={0.3}>
      <h2 className="initialInvis">About</h2>
      <div className={`initialInvis ${css.text}`}>
        {paragraphs.map((text, i) => <p key={i}>{splitIntoAnimatedSpans(text)}</p>)}
      </div>
      <Button className={`initialInvis ${css.button}`} href="mailto:msravenschultz@gmail.com">msravenschultz@gmail.com</Button>

    </ScrollTriggeredAnimation>
  </section>;
}
