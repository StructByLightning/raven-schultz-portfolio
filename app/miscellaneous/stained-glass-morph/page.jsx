import css from "./page.module.scss";
import Button from "@/components/button";
import Morph from "./morph/morph.jsx";
import ArrowLeftSvg from "@/public/icons/arrow-left.svg";
import Navbar from "@/sections/navbar";
import Footer from "@/sections/footer/main";

export const metadata = {
  title: "Stained Glass Morph | Portfolio",
  description: "This animation was a proof-of-concept for a client at Deviate Labs. I drew the stained glass images with Midjourney, and then converted them into SVGs by hand. Then, I used GSAP's MorphSVG plugin to animate the transition between the two images.",
};

export default function FourOhFour() {
  return <>
    <Navbar/>
    <main className={css.main}>
      <section className={css.stainedGlass}>
        <div className="sectionInner">
          <Morph/>
          <p>This animation was a proof-of-concept for a client at Deviate Labs. I drew the stained glass images with Midjourney, and then converted them into SVGs by hand. Then, I used GSAP&apos;s MorphSVG plugin to animate the transition between the two images.</p>
          <Button href="/#miscellaneous" ghost><ArrowLeftSvg/>Back</Button>
        </div>
      </section>
    </main>
    <Footer/>
  </>;
}
