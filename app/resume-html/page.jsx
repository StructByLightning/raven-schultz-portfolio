import { notFound } from "next/navigation";
import ExpandingHr from "@/components/ExpandingHr/ExpandingHr";
import css from "./page.module.scss";

export const metadata = {
  title: "Raven Schultz | Portfolio",
  description: "I'm a Full-stack Design and React Engineer. I help companies eliminate the painful back-and-forth between designers and developers by handling both roles, ensuring fast delivery and pixel-perfect implementation.",
};

export default async function Resume() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return <>
    <main className={css.main}>
      <div className={css.resume}>
        <div className={css.header}>
          <div className={css.name}>Raven Schultz</div>
          <div className={css.title}>Design Engineer · Seattle, WA</div>
          <div className={css.links}>
            <a href="mailto:msravenschultz@gmail.com">msravenschultz@gmail.com</a>
            <a href="https://linkedin.com/in/ravenschultz">linkedin.com/in/ravenschultz</a>
            <a href="https://github.com/StructByLightning">github.com/structbylightning</a>
            <a href="https://ravenschultz.com">ravenschultz.com</a>
          </div>

        </div>

        <div className={css.jobs}>


          <div className={css.job}>
            <div className={css.title}>Lead Design Engineer (Remote)</div>
            <div className={css.tenure}>
              <div className={css.company}>SymbyAI · August 2024—Present</div>

            </div>

            <div className={css.accomplishments}>
              <ul>
                <li>Built frontend for platform with $800k in signed pre-launch contracts and 800+ waitlisted researchers</li>
                <li>Full ownership of frontend (three-person team): technical direction, design standards, final call on all decisions</li>
                <li>Transformed dense, unusable concept sketches into a production Next.js app simple enough for researchers to self-onboard</li>
                <li>Mentored junior engineer from step-by-step direction to autonomous ownership of features, animations, and page design</li>
                <li>Engineered custom interactive PDF renderer for displaying and annotating AI-parsed academic papers</li>
                <li>Designed and animated homepage hero sequence demonstrating core product flow in eight seconds using SVG and GSAP</li>
              </ul>
            </div>

          </div>

          <div className={css.job}>
            <div className={css.title}>Frontend Engineer (Remote)</div>
            <div className={css.tenure}>
              <div className={css.company}>Westland Real Estate Group · 2024—2024</div>

            </div>

            <div className={css.accomplishments}>
              <ul>
                <li>Redesigned vacancy displays to stop exposing which apartments were empty; $72k/year estimated loss prevention</li>
                <li>Trained junior developers on prompt engineering and AI-assisted workflows (Claude, ChatGPT, Continue)</li>
                <li>Inherited nonfunctional React.js accounting app; rebuilt and migrated between incompatible backend platforms</li>
              </ul>
            </div>

          </div>


          <div className={css.job}>
            <div className={css.title}>Full Stack Engineer (Remote)</div>
            <div className={css.tenure}>
              <div className={css.company}>Deviate Labs · 2021—2023</div>

            </div>

            <div className={css.accomplishments}>
              <ul>
                <li>Created comprehensive design library with Next.js and SCSS, cutting development time for new landing pages by 40%</li>
                <li>Designed and engineered interactive puzzle game (80k users) with seamless infinite-zoom canvas animation</li>
                <li>Increased marketplace sessions by 40% through UX research and whole-site redesign</li>
                <li>Built automated lead scraping and list cleaning pipeline; saved $40k/year in acquisition costs</li>
                <li>Inherited spaghetti SaaS codebase; refactored and tested, reducing errors by 90% and improving performance</li>
                <li>Optimized corporate site to 95th percentile Lighthouse performance</li>

                {/*<li>Built immersive, animated experiences using GSAP and custom React.js components</li> */}
                {/*<li>Architected a full-stack AI marketplace in Next.js with focus on intuitive prompt discovery and management</li> */}
                {/*<li>Reduced platform errors by 90% through Jest unit testing and performance optimization</li> */}
                {/*<li>Saved $40,000 by automating business processes with Puppeteer</li> */}
                {/*<li>Improved loading performance by 10% by optimizing the React.js/Next.js corporate website with Lighthouse</li> */}
              </ul>
            </div>

          </div>


          <div className={css.job}>
            <div className={css.title}>Full Stack Engineer Intern</div>
            <div className={css.tenure}>
              <div className={css.company}>Multnomah ESD · ON Semiconductor · 2019-2020</div>

            </div>

            <div className={css.accomplishments}>
              <ul>

                <li>Decreased app loading times by 90% by implementing SQL request caching</li>
                <li>Saved $80,000 by adding a Javascript alert to unnecessary and expensive purchase orders</li>
              </ul>
            </div>
          </div>

          <ExpandingHr />

          <div className={css.ats}>
            <div>
              <div className={css.heading}>Education</div>
              <div>BS. Computer Science, Portland State University</div>
            </div>
            <div>
              <div className={css.heading}>Keywords</div>
              <div className={css.keywords}>AI-Augmented Development, AWS, Agentic AI Workflows, Agile, Animation, CSS, Canvas API, ChatGPT, Chrome DevTools Debugging, Claude Code, Continue, Cross-Browser Compatibility, Design Systems, Docker, Figma, Firebase, GCP, GSAP, Git, Git Workflows, Github, GraphQL, HTML5, Interaction Design, Javascript (ES6+), Jest, Lighthouse, Linear, Material Design, Midjourney, Mixpanel, Mobile First Design, NPM, Next.js, Node.js, Notion, Performance Optimization, Progressive Web Apps (PWA), Prompt Engineering, Puppeteer, REST APIs, React, Responsive Design, SCSS, SEO, SQL, SSR/SSG, Typescript, UI/UX, Vercel, Web Accessibility/A11y, Webpack</div>
            </div>
          </div>

        </div>
      </div>



    </main>
  </>;
}
