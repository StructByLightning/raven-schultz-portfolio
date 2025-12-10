import css from "./ResumeSection.module.scss";
import Chip from "@/app/components/Chip/Chip";
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
import ResumeEntry from "@/app/components/ResumeSection/ResumeEntry/ResumeEntry";


export default function ResumeSection() {
  return <section className={css.resumeSection}>
    <div className="sectionInner">
      <h2>Experience</h2>
      <ResumeEntry
        title="Lead Frontend Engineer"
        subtitle="SymbyAI · 2024 — Present"
        techs={[
          { icon: <ReactSvg />, text: "React" },
          { icon: <NextJsSvg />, text: "Next.js" },
          { icon: <SassSvg />, text: "SCSS" },
        ]}
        body={[
          "I joined as employee #3 to build the frontend for an AI-powered peer review platform. The pitch: peer review takes months to years. Our AI does a first pass in minutes, flagging potential fraud, catching statistical errors, and detecting plagiarism. Researchers get faster feedback. Reviewers stop wasting hours confirming that yes, this claim contradicts the existing research.",
          "There was no app yet when I started. Now I own all frontend and design decisions for a platform with $800k in pre-launch ARR and 800+ researchers on the waitlist. I built the hero animation that explains the workflow in ten seconds, and the custom in-browser PDF renderer that displays papers with inline AI annotations. The publishing side too: org accounts, submission management, editor assignment, the whole workflow.",
        ]}
      />

      <div className={css.company}>
        <div className={css.verticalSeparator}></div>

        <h3>Lead Frontend Engineer</h3>
        <div className={css.subtitle}>SymbyAI · 2024 — Present</div>
        <div className={css.body}>


        </div>

        <div className={css.tech}>
          <Chip icon={<ReactSvg />} text="React" />
          <Chip icon={<NextJsSvg />} text="Next" />
          <Chip icon={<SassSvg />} text="SCSS" />
        </div>
      </div>

      <div className={css.company}>
        <div className={css.verticalSeparator}></div>

        <h3>Full Stack Engineer</h3>
        <div className={css.subtitle}>Westland Real Estate Group · 2024 — 2024</div>
        <div className={css.body}>

          <p>Eight months at a real estate company. The most interesting problem: their website was basically telling burglars which apartments were empty. I redesigned how availability was displayed, which cut break-in risk and saved $72k/year.</p>
          <p>Also spent time mentoring junior devs on prompt engineering and migrating a React app between third-party CMSes. Useful work, but not very interesting.</p>
        </div>

        <div className={css.tech}>
          <Chip icon={<ReactSvg />} text="React" />
          <Chip icon={<NodeJsSvg />} text="Node" />
          <Chip icon={<SassSvg />} text="SCSS" />
        </div>
      </div>

      <div className={css.company}>
        <div className={css.verticalSeparator}></div>

        <h3>Full Stack Engineer</h3>
        <div className={css.subtitle}>Deviate Labs · 2021 — 2023</div>
        <div className={css.body}>

          <p>Two and a half years as the web engineer generalist. Whatever needed building, I built.</p>
          <p>The highlights: a puzzle game that hit 80k users, with complex animation and state management. A music marketplace redesign that boosted sessions by 40%. An AI prompt ecommerce marketplace from scratch. A component library that cut dev time by 40%. Business process automation that saved $40k.</p>
          <p>This is where I learned to ship fast and still care about craft.</p>
        </div>

        <div className={css.tech}>
          <Chip icon={<ReactSvg />} text="React" />
          <Chip icon={<NextJsSvg />} text="Next" />
          <Chip icon={<NodeJsSvg />} text="Node" />
          <Chip icon={<SassSvg />} text="SCSS" />
        </div>
      </div>

      <div className={css.company}>
        <div className={css.verticalSeparator}></div>

        <h3>Full Stack Engineer Intern</h3>
        <div className={css.subtitle}>Multnomah ESD · ON Semiconductor · 2019 — 2020</div>
        <div className={css.body}>

          <p>At ON Semi, I saved $80k by adding a single JavaScript alert that stopped accidental purchase orders. Sometimes the best solutions are dumb.</p>
          <p>At Multnomah, I built internal webapps with minimal supervision. Good training for figuring things out alone.</p>
        </div>

        <div className={css.tech}>
          <Chip icon={<ReactSvg />} text="React" />
          <Chip icon={<NextJsSvg />} text="Next" />
          <Chip icon={<SassSvg />} text="SCSS" />
        </div>
      </div>
    </div>
  </section>;
}
