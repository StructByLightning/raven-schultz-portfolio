import css from "./page.module.scss";
import Button from "@/components/button";
import Text from "./text.jsx";
import ArrowLeftSvg from "@/public/icons/arrow-left.svg";
import Navbar from "@/sections/navbar";
import Footer from "@/sections/footer/main";

export const metadata = {
  title: "Self Writing Text| Portfolio",
  description: "I wrote this animation for a friend's website. I first typed out the text as an SVG filled path, and then masked it with a stroked path. Then I animated the stroked path using the stroke-dashoffset technique to make it look like it's self-drawing.",
};

export default function SelfWritingText() {
  return <>
    <Navbar dark/>
    <main className={`dark ${css.main}`}>
      <section className={css.wrapper}>
        <div className="sectionInner">
          <Text/>
          <p>I wrote this animation for a friend&apos;s website. I first typed out the text as an SVG filled path, and then masked it with a stroked path. Then I animated the stroked path using the stroke-dashoffset technique to make it look like it&apos;s self-drawing.</p>
          <Button href="/#miscellaneous" ghost dark><ArrowLeftSvg/>Back</Button>
        </div>
      </section>
    </main>
    <Footer/>
  </>;
}
