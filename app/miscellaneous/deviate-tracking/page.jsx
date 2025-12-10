import css from "./page.module.scss";
import Button, { BUTTON_VARIANTS } from "@/components/Button/Button";
import DeviateTrackingAnimation from "./deviate-tracking-animation/index.jsx";
import ArrowLeftSvg from "@/public/icons/arrow-left.svg";
import Navbar from "@/sections/navbar";
import Footer from "@/sections/footer/main";

export const metadata = {
  title: "Deviate Tracking | Portfolio",
  description: "I wrote this little animation for an in-house SaaS project at Deviate Labs. It was a compact, eye-catching way to introduce the basic concepts of the product, and was inspired by the the Dome Keeper videogame trailer.",
};

export default function DeviateTracking() {
  return <>
    <Navbar />
    <main className={css.main}>
      <section className={css.stainedGlass}>
        <div className="sectionInner">
          <DeviateTrackingAnimation />
          <p>I wrote this little animation for an in-house project at Deviate Labs. It was a compact, eye-catching way to introduce the basic concepts of the product, and was inspired by the the Dome Keeper videogame trailer.</p>
          <Button href="/#miscellaneous" iconLeft={<ArrowLeftSvg />} variant={BUTTON_VARIANTS.GHOST}>Back</Button>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
