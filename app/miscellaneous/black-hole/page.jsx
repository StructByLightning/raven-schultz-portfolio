import css from "./page.module.scss";
import Stars from "./stars.jsx";
import Button from "@/components/button";

export const metadata = {
  title: "Black Hole 404 | Portfolio",
  description: "This animation was made for a friend's website as an exercise in vanilla Canvas. Each star's position is recalculated with trigonometry each frame, using requestAnimationFrame to avoid overwhelming the browser.",
};

export default function FourOhFour() {
  return <>
    <title>404 | Voidgoddess</title>
    <main className={`dark ${css.main}`}>
      <Stars/>
      <div className={css.inner}>
        <div className={css.code}>404</div>
        <div className={css.status}>who are you in the void?</div>

        <div className={css.buttons}>
          <Button href="/#miscellaneous" className={css.button} dark ghost>Return to &quot;reality&quot;</Button>
        </div>
      </div>
    </main>
  </>;
}
