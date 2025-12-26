import AboutSection from "@/app/components/AboutSection/AboutSection";
import FoldSection from "@/app/components/FoldSection/FoldSection";
import ProjectsSection from "@/app/components/ProjectsSection/ProjectsSection";
import ResumeSection from "@/app/components/ResumeSection/ResumeSection";
import ExpandingHr from "@/components/ExpandingHr/ExpandingHr";
import css from "./page.module.scss";
import Footer from "@/sections/footer/main";

export const metadata = {
  title: "Raven Schultz",
  description: "Most teams have designers who can't code and developers who can't design. I do both. Design Engineer in Seattle.",
};

export default async function Home() {
  return <>
    <main className={css.main}>
      <FoldSection />

      <ProjectsSection />

      <ExpandingHr />

      <AboutSection />

      <ExpandingHr />

      <ResumeSection />

      <ExpandingHr />

    </main>
    <Footer />
  </>;
}
