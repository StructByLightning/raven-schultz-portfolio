import { notFound } from "next/navigation";
import ExpandingHr from "@/components/ExpandingHr/ExpandingHr";
import css from "./page.module.scss";

export const metadata = {
  title: "Raven Schultz | Portfolio",
  description: "I'm a Full-stack Design and React Engineer. I help companies eliminate the painful back-and-forth between designers and developers by handling both roles, ensuring fast delivery and pixel-perfect implementation.",
};

export default async function FioraResume() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return <>
    <main className={css.main}>
      <article className={css.resume} aria-label="Resume of Raven Schultz">
        <header className={css.header}>
          <h1 className={css.name}>Raven Schultz</h1>
          <p className={css.title}>Design Engineer · Seattle, WA</p>
          <nav className={css.links} aria-label="Contact information">
            <a href="mailto:msravenschultz@gmail.com">msravenschultz@gmail.com</a>
            <a href="https://linkedin.com/in/ravenschultz">linkedin.com/in/ravenschultz</a>
            <a href="https://github.com/StructByLightning">github.com/structbylightning</a>
            <a href="https://ravenschultz.com">ravenschultz.com</a>
          </nav>
        </header>

        <section className={css.jobs} aria-labelledby="experience-heading">


          <article className={css.job}>
            <h2 id="experience-heading" className={css.atsText}>Work History</h2>
            <header>
              <h3 className={css.title}>Lead Design Engineer (Remote)</h3>
              <p className={css.tenure}>
                <span className={css.company}>SymbyAI · 08/2024 — Present</span>
              </p>
            </header>
            <ul className={css.accomplishments}>
              <li>Built frontend for platform with $800k in signed pre-launch contracts and 800+ waitlisted researchers</li>
              <li>Full ownership of frontend (three-person team): technical direction, design standards, final call on all decisions</li>
              <li>Transformed dense, unusable concept sketches into a production Next.js app simple enough for researchers to self-onboard</li>
              <li>Mentored junior engineer from step-by-step direction to autonomous ownership of features, animations, and page design</li>
              <li>Engineered custom interactive PDF renderer for displaying and annotating AI-parsed academic papers</li>
              <li>Designed and animated homepage hero sequence demonstrating core product flow in eight seconds using SVG and GSAP</li>
            </ul>
          </article>

          <article className={css.job}>
            <header>
              <h3 className={css.title}>Frontend Engineer (Remote)</h3>
              <p className={css.tenure}>
                <span className={css.company}>Westland Real Estate Group · 01/2024 — 08/2024</span>
              </p>
            </header>
            <ul className={css.accomplishments}>
              <li>Redesigned vacancy displays to stop exposing which apartments were empty; $72k/year estimated loss prevention</li>
              <li>Trained junior developers on prompt engineering and AI-assisted workflows (Claude, ChatGPT, Continue)</li>
              <li>Inherited nonfunctional React.js accounting app; rebuilt and migrated between incompatible backend platforms</li>
            </ul>
          </article>


          <article className={css.job}>
            <header>
              <h3 className={css.title}>Full Stack Engineer (Remote)</h3>
              <p className={css.tenure}>
                <span className={css.company}>Deviate Labs · 03/2021 — 11/2023</span>
              </p>
            </header>
            <ul className={css.accomplishments}>
              {/*<li>Created comprehensive design library with Next.js and SCSS, cutting development time for new landing pages by 40%</li> */}
              <li>Rebuilt unstructured corporate site into modular Next.js component library; engineers could assemble new marketing pages from templated sections instead of copy-pasting raw HTML</li>
              <li>Designed and engineered interactive puzzle game (80k users) with seamless infinite-zoom canvas animation</li>
              {/*<li>Increased marketplace sessions by 40% through UX research and whole-site redesign</li> */}
              <li>Redesigned marketplace from stock WordPress template into a polished storefront matching premium audiophile audience; 40% increase in sessions</li>
              <li>Built automated lead scraping and list cleaning pipeline; saved $40k/year in acquisition costs</li>
              {/*<li>Inherited spaghetti SaaS codebase; refactored and tested, reducing errors by 90% and improving performance</li> */}
              <li>Rewrote analytics SaaS plugin and server pipeline with comprehensive unit and integration testing; customer error tickets dropped 90%, enabling 10x revenue growth</li>
              <li>Optimized corporate site to 95th percentile Lighthouse performance</li>
            </ul>
          </article>


          <article className={css.job}>
            <header>
              <h3 className={css.title}>Full Stack Engineer Intern</h3>
              <p className={css.tenure}>
                <span className={css.company}>Multnomah ESD · ON Semiconductor · 03/2019 — 09/2020</span>
              </p>
            </header>
            <ul className={css.accomplishments}>
              <li>Decreased app loading times by 90% by implementing SQL request caching</li>
              <li>Built purchase-order validation against existing inventory, preventing duplicate orders on high-cost fab parts; ~$80k savings</li>
            </ul>
          </article>
        </section>

        <hr />

        <footer className={css.ats}>
          <div className={css.row}>
            <section aria-labelledby="education-heading">
              <h2 id="education-heading" className={css.heading}>Education</h2>
              <p>BS. Computer Science, Portland State University · US Citizen</p>
            </section>
          </div>
          <section aria-labelledby="skills-heading">
            <h2 id="skills-heading" className={css.heading}>Keywords</h2>
            <p className={css.keywords}>AI-Augmented Development, AWS, Agentic AI Workflows, Agile, Animation, CSS, Canvas API, ChatGPT, Chrome DevTools Debugging, Claude Code, Continue, Cross-Browser Compatibility, Design Systems, Docker, Figma, Firebase, GCP, GSAP, Git, Git Workflows, Github, GraphQL, HTML5, Interaction Design, Javascript (ES6+), Jest, Lighthouse, Linear, LLMs, Material Design, Midjourney, Mixpanel, Mobile First Design, NPM, Next.js, Node.js, Notion, Performance Optimization, Progressive Web Apps (PWA), Prompt Engineering, Puppeteer, REST APIs, React, Responsive Design, SCSS, SEO, SQL, SSR/SSG, Typescript, User Experience (UX), User Interface (UI), Vercel, Web Accessibility/A11y, Webpack</p>
          </section>
        </footer>
      </article>



    </main>
  </>;
}
