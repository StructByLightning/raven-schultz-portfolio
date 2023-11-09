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

export const metadata = {
  title: "Raven Schultz | Portfolio",
  description: "I build beautiful, high-performance websites.",
};

const PROJECTS = [
  {
    name: "Deviate Labs",
    body: <>
      <p>Deviate Labs is a marketing agency. I migrated their corporate website from vanilla HTML/CSS/Javascript to NextJS, greatly reducing the time it took to build new pages and improving design consistency across their existing pages.</p>
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
      <p>Deviate Tracking is a SaaS that helps marketers track their users. I improved the stability of the Deviate Tracking API backend by refactoring and unit testing the code (which was originally all in a single, untested file), reducing customer complaints to almost zero. I also wrote a custom homepage with vanilla HTML/CSS/Javascript.</p>
    </>,
    image: {
      base: "/images/cards/deviatetracking/deviatetracking",
      widths: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      sizes: "max-width:1300px 50vw, max-width: 700px 100vw, 33vw",
      exts: ["webp", "png"],
      alt: "The Deviate Tracking homepage.",
    },
  },
  {
    name: "Immersive Audio Album",
    body: <>
      <p>Immersive Audio Album is marketplace for artists to sell immersive music. I designed and implemented an entirely new appearance for the website after it took off in 2022, boosting overall traffic by 40% and securing several deals with labels who previously didn&apos;t consider us a serious business.</p>
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
    name: "The Guild of the ROSE",
    body: <>
      <p>The Guild of the ROSE is a self-improvement community. I designed and wrote an ecommerce website with NextJS and Strapi that handles subscription payments (via Stripe), showcases blog articles, and has a complex &quot;skill tree&quot; that the Guild uses to encourage members to improve their lives. The skill tree is an interactive webapp built with Canvas and PixiJS for performance.</p>
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
    name: "Stax Chrome Extension",
    body: <>
      <p>Stax is a Chrome extension written in React that helps Amazon Mechanical Turk workers find the best paying gigs. It automatically scraped the Amazon Mechanical Turk website and analyzed the available gigs before displaying them in a more user-friendly list. It was also capable of automatically accepting gigs and breaking captchas. I wrote it in college as a side project and it had over a thousand real users before I stopped maintaining it in 2021.</p>
    </>,
    image: {
      base: "/images/cards/amazon/amazon",
      widths: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      sizes: "max-width:1300px 50vw, max-width: 700px 100vw, 33vw",
      exts: ["webp", "png"],
      alt: "The Amazon logo.",
    },
  },
  {
    name: "Video Game Bot",
    body: <>
      <p>This bot was a project I wrote in high school with Java and C++. It could automatically play a multiplayer game (Forsaken World) and coordinate with six other bot instances running on computers networked together in my garage. The bots gathered virtual resources that could be sold for virtual currency. I then sold the virtual currency to other players for real world dollars — making this project the first time I got paid for my work.</p>
    </>,
    image: {
      base: "/images/cards/forsakenWorld/forsakenWorld",
      widths: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      sizes: "max-width:1300px 50vw, max-width: 700px 100vw, 33vw",
      exts: ["webp", "png"],
      alt: "A screenshot of the Forsaken World game.",
    },
  },
];

const MISCELLANEOUS = [
  {
    name: "Black Hole 404",
    body: <>
      <p>This animation was made for a friend&apos;s website as an exercise in vanilla Canvas. Each star&apos;s position is recalculated with trigonometry using requestAnimationFrame to avoid overwhelming the browser.</p>
    </>,
    href: "/miscellaneous/black-hole",
    image: {
      base: "/images/cards/blackHole/blackHole",
      widths: [100, 200, 300, 400, 500],
      sizes: "max-width:1300px 33vw, max-width: 1000px 50vw, max-width: 600px 100vw, 25vw",
      exts: ["webp", "png"],
      alt: "A black hole with purple stars falling into it.",
    },
  },
  {
    name: "Stained Glass Morph",
    body: <>
      <p>This animation was a proof-of-concept for a client at Deviate Labs. I drew the stained glass images with Midjourney, and then converted them into SVGs by hand. Then, I used GSAP&apos;s MorphSVG plugin to animate the transition between the two images.</p>
    </>,
    href: "/miscellaneous/stained-glass-morph",
    image: {
      base: "/images/cards/stainedGlassMorph/stainedGlassMorph",
      widths: [100, 200, 300, 400, 500],
      sizes: "max-width:1300px 33vw, max-width: 1000px 50vw, max-width: 600px 100vw, 25vw",
      exts: ["webp", "png"],
      alt: "A stained glass mountain morphing into a stained glass tree.",
    },
  },
  {
    name: "Self Writing Text",
    body: <>
      <p>I wrote this animation for a friend&apos;s website. I first typed out the text as an SVG filled path, and then masked it with a stroked path. Then I animated the stroked path using the stroke-dashoffset technique to make it look like it&apos;s self-drawing.</p>
    </>,
    href: "/miscellaneous/self-writing-text",
    image: {
      base: "/images/cards/selfWritingText/selfWritingText",
      widths: [100, 200, 300, 400, 500],
      sizes: "max-width:1300px 33vw, max-width: 1000px 50vw, max-width: 600px 100vw, 25vw",
      exts: ["webp", "png"],
      alt: "Handwritten text that's in the process of being written.",
    },
  },
  {
    name: "Glitch Effect",
    body: <>
      <p>This glitch effect is done entirely with SVG filters and the &lt;animate&gt; tag. I made it for a friend&apos;s website as a way to practice using SVG filters. It uses 20 sub-filters to create the full glitch effect.</p>
    </>,
    href: null,
    image: {
      base: "/images/cards/glitchEffect/glitchEffect",
      widths: [100, 200, 300, 400, 500],
      sizes: "max-width:1300px 33vw, max-width: 1000px 50vw, max-width: 600px 100vw, 25vw",
      exts: ["webp", "png"],
      alt: "A glitchy cyberpunk effect.",
    },
  },
  {
    name: "Deviate Tracking",
    body: <>
      <p>I wrote this little animation for an in-house SaaS project at Deviate Labs. It was a compact, eye-catching way to introduce the basic concepts of the product, and was inspired by the the Dome Keeper videogame trailer.</p>
    </>,
    href: "/miscellaneous/deviate-tracking",
    image: {
      base: "/images/cards/deviateTracking/deviateTracking",
      widths: [100, 200, 300, 400, 500],
      sizes: "max-width:1300px 33vw, max-width: 1000px 50vw, max-width: 600px 100vw, 25vw",
      exts: ["webp", "png"],
      alt: "A complex animation introducing a SaaS product.",
    },
  },
  {
    name: "Sonic Button",
    body: <>
      <p>This button was made for an in-house music marketplace run by Deviate Labs. The button is used for the primary CTA on several pages and is constructed from seven SVG paths that are then scaled and morphed to look like pulsating sound waves.</p>
    </>,
    href: null,
    image: {
      base: "/images/cards/sonicButton/sonicButton",
      widths: [100, 200, 300, 400, 500],
      sizes: "max-width:1300px 33vw, max-width: 1000px 50vw, max-width: 600px 100vw, 25vw",
      exts: ["webp", "png"],
      alt: "A button surrounded by pulsing sound waves.",
    },
  },
  {
    name: "Deviate Tracking Ad",
    body: <>
      <p>This ad was a proof-of-concept for a client at Deviate Labs to demonstrate what an animated HTML5 ad could look like.</p>
    </>,
    href: null,
    image: {
      base: "/images/cards/deviateTrackingAd/deviateTrackingAd",
      widths: [100, 200, 300, 400, 500],
      sizes: "max-width:1300px 33vw, max-width: 1000px 50vw, max-width: 600px 100vw, 25vw",
      exts: ["webp", "png"],
      alt: "An animated HTML5 ad for a SaaS client.",
    },
  },
  {
    name: "Growing Rose",
    body: <>
      <p>This cute little rose animation was made as an experiment to see if I could simulate a growth effect by sequencing scale animations. It&apos;s surprisingly elegant for how low-tech it is.</p>
    </>,
    href: null,
    image: {
      base: "/images/cards/growingRose/growingRose",
      widths: [100, 200, 300, 400, 500],
      sizes: "max-width:1300px 33vw, max-width: 1000px 50vw, max-width: 600px 100vw, 25vw",
      exts: ["webp", "png"],
      alt: "An elegant black, gold, and red rose.",
    },
  },
  {
    name: "Circuitry 404",
    body: <>
      <p>This high-tech circuitry animation was made for a friend&apos;s website. I found a circuitry image online and traced it into SVG so I could animate the lines using GSAP&apos;s DrawSVG plugin.</p>
    </>,
    href: null,
    image: {
      base: "/images/cards/circuitry/circuitry",
      widths: [100, 200, 300, 400, 500],
      sizes: "max-width:1300px 33vw, max-width: 1000px 50vw, max-width: 600px 100vw, 25vw",
      exts: ["webp", "png"],
      alt: "A circuit board with glowing lines.",
    },
  },
  {
    name: "Calculator Game",
    body: <>
      <p>This simple game was made for an education client at Deviate Labs. My team gave me the basic concept, and I brought it to life with GSAP animations.</p>
    </>,
    href: null,
    image: {
      base: "/images/cards/calculatorGame/calculatorGame",
      widths: [100, 200, 300, 400, 500],
      sizes: "max-width:1300px 33vw, max-width: 1000px 50vw, max-width: 600px 100vw, 25vw",
      exts: ["webp", "png"],
      alt: "A simple mathematics-based game for kids.",
    },
  },
  {
    name: "Confetti",
    body: <>
      <p>This confetti animation was a proof of concept for a client at Deviate Labs. It was made with PixiJS (a canvas rendering engine) and some basic skew animations to simulate the effect of the confetti particles twirling as they fall down the screen.</p>
    </>,
    href: null,
    image: {
      base: "/images/cards/confetti/confetti",
      widths: [100, 200, 300, 400, 500],
      sizes: "max-width:1300px 33vw, max-width: 1000px 50vw, max-width: 600px 100vw, 25vw",
      exts: ["webp", "png"],
      alt: "Swirling confetti falling down.",
    },
  },
  {
    name: "Zen Timer",
    body: <>
      <p>This breathing timer was a vanity project for a client at Deviate Labs. The border is animated with a rotating SVG gradient used as a mask, while the lungs and text are a scale and fade animations.</p>
    </>,
    href: null,
    image: {
      base: "/images/cards/zenTimer/zenTimer",
      widths: [100, 200, 300, 400, 500],
      sizes: "max-width:1300px 33vw, max-width: 1000px 50vw, max-width: 600px 100vw, 25vw",
      exts: ["webp", "png"],
      alt: "A breathing timer.",
    },
  },
];

const SKILLS = {
  DOCKER: {icon: <DockerSvg/>, label: "Docker"},
  GIT: {icon: <CodePullRequestSvg/>, label: "Git"},
  GSAP: {icon: <GsapSvg/>, label: "GSAP"},
  HTML: {icon: <Html5Svg/>, label: "HTML5"},
  LINUX: {icon: <UbuntuSvg/>, label: "Linux"},
  REACT: {icon: <ReactSvg/>, label: "React"},
  SCSS: {icon: <SassSvg/>, label: "SCSS"},
  NEXTJS: {icon: <NextJsSvg/>, label: "NextJS"},
  JAVASCRIPT: {icon: <JavascriptSvg/>, label: "Javascript"},
  JEST: {icon: <JestSvg/>, label: "Jest"},
  SQL: {icon: <DatabaseSvg/>, label: "SQL"},
  STRAPI: {icon: <StrapiSvg/>, label: "Strapi"},
};


const EXPERIENCE = [
  {
    title: "Software Engineer",
    year: "2021-2023",
    company: "Deviate Labs (Remote)",
    body: <>
      <p>At Deviate Labs I worked on a variety of projects for many different clients an in-house projects. Here are some of the highlights:</p>

      <ul>
        <li>Created X Marks the Site, a puzzle game, with NextJS and Strapi for a marketing campaign with 80k+ users.</li>
        <li>Improved traffic by 40% for Immersive Audio Album, an immersive music marketplace, by redesigning the front-end.</li>
        <li>Reduced request errors by 90% by writing Jest unit tests for Deviate Tracking, an analytics SaaS.</li>
        <li>Boosted ad engagement by creating animated HTML5 ads with GSAP and SCSS.</li>
        <li>Built a noise monitoring site for classrooms (1.2k monthly users) with NextJS, SCSS, and GSAP.</li>
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
      <p>During my six-month internship at the Multnomah Education Service District, I worked closely with a back-end engineer to design an internal user management webapp. As part of this project, I helped design SQL database schema, which was then made available through a GraphQL API. I also worked to improve data integrity by writing scripts to clean and consolidate data on a new server.</p>
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
      <p>During my six-month internship at ON Semiconductor, I was primarily responsible for writing complex SQL queries and making small modifications to the 30 year old legacy codebase. Towards the end of the internship, I also wrote a webapp to streamline internal purchases. Here are some of the highlights:</p>
      <ul>
        <li>Saved $80,000 by adding a confirmation alert to unnecessary and expensive purchase orders.</li>
        <li>Decreased internal app loading times by 90% by implementing a SQL request cache.</li>
        <li>Analyzed and delivered complex SQL reports to aid management strategy.</li>
      </ul>
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
          <div className={css.subheadline}>I build beautiful, high-performance websites.</div>
          <Button href="#about" ghost>Contact Me</Button>
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
              <p>I&apos;m Raven Schultz, a professional full-stack software engineer with a focus on the frontend. I&apos;ve been programming since elementary school, starting with platformer videogames, then moving on to videogame bots in high school, and finally getting into web development in college. Now I use those skills and more to design and write complex, beautiful, high-performing websites and webapps.</p>

              <p>Programming is my passion and I&apos;m always interested in a challenge. You can check out some of my projects and work below or get in touch with me at <a href="mailto:msravenschultz@gmail.com">msravenschultz@gmail.com</a>.</p>
            </div>
            <div className={css.form}>
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>

      <section className={css.projects}>
        <div className="sectionInner">
          <h2>Projects</h2>
          <p>Here are some of the larger projects I&apos;ve worked on over the years, whether in a professional capacity or on my own time.</p>
          <div className={css.cards}>
            {PROJECTS.map((project) => <Card
              key={project.name}
              label={project.name}
              picture={project.image}
            >{project.body}</Card>)}
          </div>
        </div>
      </section>

      <section className={css.miscellaneous} id="miscellaneous">
        <div className="sectionInner">
          <h2>Miscellaneous</h2>
          <p>These are some of the smaller animation projects I&apos;ve worked on.</p>
          <div className={css.cards}>
            {MISCELLANEOUS.map((item) => <Card
              key={item.name}
              label={item.name}
              picture={item.image}
              href={item.href}
              className={`dark ${css.card}`}
            >
              {item.body}
              {item.href && <Button ghost dark className={css.button}>View Animation</Button>}
            </Card>)}
          </div>
        </div>
      </section>
    </main>
    <Footer/>
  </>;
}
