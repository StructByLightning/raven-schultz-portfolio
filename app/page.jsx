import AboutSection from "@/app/components/AboutSection/AboutSection";
import FoldSection from "@/app/components/FoldSection/FoldSection";
import ProjectsSection from "@/app/components/ProjectsSection/ProjectsSection";
import ResumeSection from "@/app/components/ResumeSection/ResumeSection";
import ExpandingHr from "@/components/ExpandingHr/ExpandingHr";
import css from "./page.module.scss";
import Footer from "@/sections/footer/main";
import Navbar from "@/sections/navbar";

export const metadata = {
  title: "Raven Schultz | Portfolio",
  description: "I'm a Full-stack Design and React Engineer. I help companies eliminate the painful back-and-forth between designers and developers by handling both roles, ensuring fast delivery and pixel-perfect implementation.",
};

export default async function Home() {
  return <>
    <Navbar />
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
