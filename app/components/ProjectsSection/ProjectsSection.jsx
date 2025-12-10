"use client";
import css from "./ProjectsSection.module.scss";
import Card from "@/components/card";
import ScrollTriggeredAnimation from "@/components/ScrollTriggeredAnimation/ScrollTriggeredAnimation";
import {gsap} from "@/scripts/gsap";


const PROJECTS = [
  {
    name: "SymbyAI",
    body: <>
      <p>I took on the challenge of designing SymbyAI&apos;s automated peer review platform. Scientific peer review is a notoriously complex process, but thanks to modern design techniques, I was able to streamline it into a set of four intuitive pages. And to explain how their cutting-edge AI works, I created a ten-second hero animation for the homepage. The SymbyAI team loved my designs so much that they hired me full-time to build their frontend.</p>
    </>,
    image: {
      base: "/images/cards/symby/symby",
      widths: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      sizes: "max-width:1300px 50vw, max-width: 700px 100vw, 33vw",
      exts: ["webp", "png"],
      alt: "The SymbyAI platform interface.",
    },
  },
  {
    name: "Immersive Audio Album",
    body: <>
      <p>I crafted a completely new interface for this immersive music marketplace, building everything from custom audio visualizers to an intuitive preview system. By focusing on the unique needs of audio artists, the new design resonated so well it boosted traffic by 40% and caught the attention of major music labels who previously wouldn&apos;t give us the time of day.</p>
    </>,
    image: {
      base: "/images/cards/immersiveaudioalbum/immersiveaudioalbum",
      widths: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      sizes: "max-width:1300px 50vw, max-width: 700px 100vw, 33vw",
      exts: ["webp", "png"],
      alt: "The Immersive Audio Album homepage.",
    },
  },
  {
    name: "X Marks the Site",
    body: <>
      <p>I built an scavenger hunt puzzle game that became the cornerstone of a major marketing campaign. Using Next.js and GSAP, I created fluid animations and game mechanics that kept 80,000+ players engaged. The challenge of making it both fun and technically robust was incredibly satisfying - especially when we saw players sharing their victories on social media.</p>
    </>,
    image: {
      base: "/images/cards/xmarksthesite/xmarksthesite",
      widths: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      sizes: "max-width:1300px 50vw, max-width: 700px 100vw, 33vw",
      exts: ["webp", "png"],
      alt: "The X Marks the Site infinite art puzzle game.",
    },
  },
  {
    name: "The Guild of the ROSE",
    body: <>
      <p>This was my favorite kind of challenge: building something complex that looks simple. I created a full-stack community platform with a custom Canvas-based skill tree (think RPG-style character progression), integrated Stripe payments, and a content management system. It&apos;s been used by 2,000+ users to track their real-life improvement at everything from social skills to advanced memorization techniques.</p>
    </>,
    image: {
      base: "/images/cards/guildoftherose/guildoftherose",
      widths: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      sizes: "max-width:1300px 50vw, max-width: 700px 100vw, 33vw",
      exts: ["webp", "png"],
      alt: "The Guild of the ROSE homepage.",
    },
  },
  {
    name: "Deviate Labs",
    body: <>
      <p>I transformed this corporate site from basic HTML into a modern Next.js powerhouse. The fun part was building a library of reusable animations, components, and CSS classes that made creating new pages feel like playing with LEGOs. The system was so efficient it cut development time by 40% while making everything load 10% faster.</p>
    </>,
    image: {
      base: "/images/cards/deviateLabs/deviateLabs",
      widths: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      sizes: "max-width:1300px 50vw, max-width: 700px 100vw, 33vw",
      exts: ["webp", "png"],
      alt: "The Deviate Labs homepage.",
    },
  },
  {
    name: "Deviate Tracking",
    body: <>
      <p>This analytics platform launched as a minimum viable product and sorely needed both technical stability and intuitive design. I rebuilt it from scratch, focusing on a streamlined landing page and rock-steady backend to process user requests. The best part? Support tickets dropped by 90% because users could finally find what they needed without asking for help. It&apos;s satisfying when good design solves real problems.</p>
    </>,
    image: {
      base: "/images/cards/deviatetracking/deviatetracking",
      widths: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      sizes: "max-width:1300px 50vw, max-width: 700px 100vw, 33vw",
      exts: ["webp", "png"],
      alt: "The Deviate Tracking homepage.",
    },
  },
];

/**
 * Animates the projects section on scroll trigger.
 * @param root - The root element containing the section
 * @returns    The GSAP timeline
 */
function animate(root) {
  const tl = gsap.timeline();

  tl.set(root.querySelectorAll(".initialInvis"), {visibility: "visible"});

  //Fade in heading
  tl.fromTo(root.querySelector("h2"),
    {opacity: 0, translateY: "-15%"},
    {opacity: 1, translateY: "0%", ease: "sine.inOut", duration: 0.2});

  //Fade in description
  tl.fromTo(root.querySelector("p"),
    {opacity: 0, translateY: "-15%"},
    {opacity: 1, translateY: "0%", ease: "sine.inOut", duration: 0.2},
    "<70%");

  //Stagger in cards
  tl.fromTo(root.querySelectorAll(`.${css.cards} > *`),
    {opacity: 0, translateY: "10%"},
    {opacity: 1, translateY: "0%", ease: "sine.inOut", stagger: 0.05, duration: 0.3},
    "<70%");

  return tl;
}

/**
 * Projects section showcasing featured work with animated cards.
 */
export default function ProjectsSection() {
  return <section className={css.projects} id="projects">
    <ScrollTriggeredAnimation animation={animate} className="sectionInner" threshold={0.1}>
      <h2 className="initialInvis">Projects</h2>
      <p className="initialInvis">From complex web applications to interactive experiences, here are some highlights from how I&apos;ve helped companies solve real problems through design and development:</p>
      <div className={css.cards}>
        {PROJECTS.map((project) => <Card
          className="initialInvis"
          key={project.name}
          label={project.name}
          picture={project.image}
        >{project.body}</Card>)}
      </div>
    </ScrollTriggeredAnimation>
  </section>;
}
