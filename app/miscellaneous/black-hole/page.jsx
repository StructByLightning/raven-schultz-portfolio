import css from "./page.module.scss";
import Stars from "./stars.jsx";
import Button, { BUTTON_VARIANTS } from "@/components/Button/Button";

export const metadata = {
  title: "Black Hole 404 | Portfolio",
  description: "This animation was made for a friend's website as an exercise in vanilla Canvas. Each star's position is recalculated with trigonometry each frame, using requestAnimationFrame to avoid overwhelming the browser.",
};

export default function FourOhFour() {
  return <>
    <title>404 | Voidgoddess</title>
    <main className={`dark ${css.main}`}>
      <Stars />
      <div className={css.inner}>
        <div className={css.code}>404</div>
        <div className={css.status}>who are you in the void?</div>

        <div className={css.buttons}>
          <Button className={css.button} dark href="/#miscellaneous" variant={BUTTON_VARIANTS.GHOST}>Return to &quot;reality&quot;</Button>
        </div>
      </div>
    </main>
  </>;
}
