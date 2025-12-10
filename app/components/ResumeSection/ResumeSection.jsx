import css from "./ResumeSection.module.scss";

export default function ResumeSection() {
  return <section className={css.resumeSection}>
    <div className="sectionInner">
      <h2>Experience</h2>
      <div className={css.verticalSeparator}></div>

      <h3>Lead Frontend Engineer</h3>
      <div className={css.subtitle}>SymbyAI · 2024 — Present</div>
      <div className={css.body}>

        <p>I joined as employee #3 to build the frontend for an AI-powered peer review platform. The pitch: peer review takes months to years. Our AI does a first pass in minutes, flagging potential fraud, catching statistical errors, noting when your image resolution is too low to publish. Researchers get faster feedback. Reviewers stop wasting hours confirming that yes, this claim contradicts the existing research.</p>
        <p>There was no app yet when I started. Now I own all frontend and design decisions for a platform with $800k in pre-launch ARR and 800+ researchers on the waitlist. I built the hero animation that explains the workflow in ten seconds, and the custom in-browser PDF renderer that displays papers with inline AI annotations. The publishing side too: org accounts, submission management, editor assignment, the whole workflow.</p>
      </div>
    </div>
  </section>;
}
