import css from "./ResumeSection.module.scss";
import NextJsSvg from "@/public/icons/next-js.svg";
import NodeJsSvg from "@/public/icons/node-js.svg";
import ReactSvg from "@/public/icons/react.svg";
import SassSvg from "@/public/icons/sass.svg";
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

      <ResumeEntry
        title="Full Stack Engineer"
        subtitle="Westland Real Estate Group · 2024 — 2024"
        techs={[
          { icon: <ReactSvg />, text: "React" },
          { icon: <NodeJsSvg />, text: "Node" },
          { icon: <SassSvg />, text: "SCSS" },
        ]}
        body={[
          "Eight months at a real estate company. The most interesting problem: their website was basically telling burglars which apartments were empty. I redesigned how availability was displayed, which cut break-in risk and saved $72k/year.",
          "Also spent time mentoring junior devs on prompt engineering and migrating a React app between third-party CMSes. Useful work, but not very interesting.",
        ]}
      />

      <ResumeEntry
        title="Full Stack Engineer"
        subtitle="Deviate Labs · 2021 — 2023"
        techs={[
          { icon: <ReactSvg />, text: "React" },
          { icon: <NextJsSvg />, text: "Next" },
          { icon: <NodeJsSvg />, text: "Node" },
          { icon: <SassSvg />, text: "SCSS" },
        ]}
        body={[
          "Two and a half years as the web engineer generalist. Whatever needed building, I built.",
          "The highlights: a puzzle game that hit 80k users, with complex animation and state management. A music marketplace redesign that boosted sessions by 40%. An AI prompt ecommerce marketplace from scratch. A component library that cut dev time by 40%. Business process automation that saved $40k.",
          "This is where I learned to ship fast and still care about craft.",
        ]}
      />

      <ResumeEntry
        title="Full Stack Engineer Intern"
        subtitle="Multnomah ESD · ON Semiconductor · 2019 — 2020"
        techs={[
          { icon: <ReactSvg />, text: "React" },
          { icon: <NextJsSvg />, text: "Next" },
          { icon: <SassSvg />, text: "SCSS" },
        ]}
        body={[
          "At ON Semi, I saved $80k by adding a single JavaScript alert that stopped accidental purchase orders. Sometimes the best solutions are dumb.",
          "At Multnomah, I built internal webapps with minimal supervision. Good training for figuring things out alone.",
        ]}
      />
    </div>
  </section>;
}
