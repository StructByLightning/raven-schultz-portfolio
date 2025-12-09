import Button from "@/components/button";
import css from "./page.module.scss";
import Footer from "@/sections/footer/main";
import Navbar from "@/sections/navbar";
import Card from "@/components/card";
import ContactForm from "@/components/form/contact/contactForm";
import SassSvg from "@/public/icons/sass.svg";
import ReactSvg from "@/public/icons/react.svg";
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

export const metadata = {
  title: "Raven Schultz | Portfolio",
  description: "I'm a Full-stack Design and React Engineer. I help companies eliminate the painful back-and-forth between designers and developers by handling both roles, ensuring fast delivery and pixel-perfect implementation.",
};

const PROJECTS = [
  {
    name: "SymbyAI",
    body: <>
      <p>I took on the challenge of designing SymbyAI&apos;s automated peer review platform. Scientific peer review is a notoriously complex process, but thanks to modern design techniques, I was able to streamline it into a set of four intuitive pages. And to explain how their cutting-edge AI works, I created a ten-second hero animation for the homepage. The SymbyAI team loved my designs so much that they hired me full-time to build their frontend.</p>
    </>,
    image: {
      base: "/images/cards/symby/symby", //adjust path as needed
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

const SKILLS = {
  DOCKER: {icon: <DockerSvg/>, label: "Docker"},
  GIT: {icon: <CodePullRequestSvg/>, label: "Git"},
  GSAP: {icon: <GsapSvg/>, label: "GSAP"},
  HTML: {icon: <Html5Svg/>, label: "HTML5"},
  JAVASCRIPT: {icon: <JavascriptSvg/>, label: "Javascript"},
  JEST: {icon: <JestSvg/>, label: "Jest"},
  LINUX: {icon: <UbuntuSvg/>, label: "Linux"},
  NEXTJS: {icon: <NextJsSvg/>, label: "NextJS"},
  REACT: {icon: <ReactSvg/>, label: "React"},
  SCSS: {icon: <SassSvg/>, label: "SCSS"},
  SQL: {icon: <DatabaseSvg/>, label: "SQL"},
  STRAPI: {icon: <StrapiSvg/>, label: "Strapi"},
  NODEJS: {icon: <NodeJsSvg/>, label: "NodeJs"},
  GCP: {icon: <GcpSvg/>, label: "GCP"},
};


const EXPERIENCE = [
  {
    title: "Frontend UI/UX Software Engineer",
    year: "2024-present",
    company: "SymbyAI (Remote)",
    body: <>
      <p>At SymbyAI, I&apos;m responsible for the design and implementation of the frontend for the Symby platform.</p>

      <ul>
        <li>Designed the first version of the SymbyAI platform for automating the scientific peer review process.</li>
      </ul>
    </>,
    skills: [
      SKILLS.REACT,
      SKILLS.NEXTJS,
      SKILLS.SCSS,
    ],
  },
  {
    title: "Software Engineer",
    year: "2024-2024",
    company: "Westland Real Estate Group (Remote)",
    body: <>
      <p>At Westland, I worked on high-value internal tools for real estate management and accounting.</p>

      <ul>
        <li>Saved $72,000/year by obfuscating apartment occupation status with NodeJS to reduce break-ins</li>
        <li>Increased development velocity by 60% by mentoring junior engineers on AI tools and best practices</li>
        <li>Migrated a React.js and Firebase web app from the Yardi CMS to the Entrata CMS</li>
      </ul>
    </>,
    skills: [
      SKILLS.REACT,
      SKILLS.NODEJS,
      SKILLS.SCSS,
      SKILLS.DOCKER,
      SKILLS.GIT,
      SKILLS.GCP,
    ],
  },
  {
    title: "Software Engineer",
    year: "2021-2023",
    company: "Deviate Labs (Remote)",
    body: <>
      <p>At Deviate Labs I worked on a variety of projects for many different clients an in-house projects. Here are some of the highlights:</p>

      <ul>
        <li>Created a comprehensive design library with Next.js and SCSS, cutting development time by 40%</li>
        <li>Designed and engineered an interactive puzzle game (80k+ users) with complex animation and state</li>
        <li>Increased marketplace sessions by 40% through UX research and implementation of an intuitive interface</li>
        <li>Built immersive, animated experiences using GSAP and custom React.js components</li>
        <li>Architected a full-stack AI marketplace in Next.js with focus on intuitive prompt discovery and management</li>
        <li>Reduced platform errors by 90% through Jest unit testing and performance optimization</li>
        <li>Saved $40,000 by automating business processes with Puppeteer</li>
        <li>Improved loading performance by 10% by optimizing the React.js/Next/js corporate website with Lighthouse</li>
      </ul>
      <p>In my time at Deviate Labs, I consistently advocated for user experience (UX) as a primary focus in all front-end work. I also pushed for software engineering best practices, such as source control, secure secrets management, containerization, and unit testing.</p>
    </>,
    skills: [
      SKILLS.REACT,
      SKILLS.NEXTJS,
      SKILLS.SCSS,
      SKILLS.GSAP,
      SKILLS.STRAPI,
      SKILLS.JEST,
      SKILLS.DOCKER,
      SKILLS.GIT,
      SKILLS.LINUX,
    ],
  },
  {
    title: "Software Engineering Intern",
    year: "2020-2020",
    company: "Multnomah Education Service District (Remote)",
    body: <>
      <p>During my six-month internship at the Multnomah Education Service District, I worked closely with back-end engineers to design and implement an internal user management webapp. As part of this project, I helped design SQL database schema, which was then made available through a GraphQL API. I also worked to improve data integrity by writing scripts to clean and consolidate data on a new server.</p>
    </>,
    skills: [
      SKILLS.REACT,
      SKILLS.NEXTJS,
      SKILLS.SCSS,
      SKILLS.GIT,
      SKILLS.LINUX,
    ],
  },
  {
    title: "Software Engineering Intern",
    year: "2019-2019",
    company: "ON Semiconductor (Gresham, Oregon)",
    body: <>
      <p>During my six-month internship at ON Semiconductor, I was primarily responsible for writing complex SQL queries and making small modifications to the 30 year old legacy codebase. I saved $80,000 by applying modern design practices to the outdated purchase order system and decreased app loading times by 90% with a SQL request cache for infrequently updated data.</p>
    </>,
    skills: [
      SKILLS.SQL,
      SKILLS.HTML,
      SKILLS.SCSS,
      SKILLS.JAVASCRIPT,
    ],
  },
];

export default async function Home() {
  return <>
    <Navbar/>
    <main className={css.main}>
      <section className={css.intro}>
        <div className="sectionInner">
          <h1><span>Hello, I&apos;m</span> <b>Raven Schultz</b></h1>
          <div className={css.subheadline}>Full-stack Design & React Engineer</div>
          <div className={css.description}>
            <span>I help companies eliminate the painful back-and-forth between designers and developers</span>
            <span>by handling both roles, ensuring fast delivery and pixel-perfect implementation.</span>
          </div>
          <div className={css.ctas}>
            <Button href="#projects">View Featured Work</Button>
            <Button href="#contact" ghost>Start a Project</Button>
          </div>
        </div>
      </section>

      <section className={css.experience}>
        <div className="sectionInner">
          <h2>Experience</h2>
          <div className={css.timeline}>
            {EXPERIENCE.map((entry) => <div className={css.entry} key={entry.company}>
              <div className={css.year}><span>{entry.year}</span></div>
              <div className={css.dot}></div>
              <div className={css.body}>
                <h3>{entry.title}</h3>
                <div className={css.subheadline}>{entry.company}</div>
                {entry.body}
                <div className={css.skills}>{entry.skills.map((skill) => <div key={skill.label} className={css.skillTag}>
                  {skill?.icon}
                  <span>{skill?.label}</span>
                </div>)}</div>
              </div>
              <div className={css.line}></div>
            </div>)}
          </div>
        </div>
      </section>

      <section className={css.about} id="about">
        <div className="sectionInner">
          <h2>About</h2>
          <div className={css.row}>
            <div className={css.text}>


              <p>I&apos;m a hybrid designer-developer who loves creating exceptional digital experiences. While most people are either designers or developers, I&apos;ve always been both - I get equally excited about perfecting a color palette and optimizing React page load times. This combination of technical expertise and strong design sensibility lets me build entire websites from scratch, handling  everything from initial Figma sketches to final AWS deployment.</p>

              <p>My coding journey started with making simple games in elementary school, evolved into building bots in high school (including a network of six game bots running in my garage!), and finally led to web development in college. These days, I pour that same enthusiasm into creating  websites that are both beautiful and blazing fast.</p>

              <p>I especially love working on complex animations and interactions - the kind that make users go &quot;wow, how did they do that?&quot; Whether it&apos;s morphing SVG paths, crafting pixel-perfect interfaces, or optimizing performance, I&apos;m always pushing to make things better and more interesting.</p>

            </div>
            <div className={css.form} id="contact">
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>

      <section className={css.projects} id="projects">
        <div className="sectionInner">
          <h2>Projects</h2>
          <p>From complex web applications to interactive experiences, here are some highlights from how I&apos;ve helped companies solve real problems through design and development:</p>
          <div className={css.cards}>
            {PROJECTS.map((project) => <Card
              key={project.name}
              label={project.name}
              picture={project.image}
            >{project.body}</Card>)}
          </div>
        </div>
      </section>
    </main>
    <Footer/>
  </>;
}
