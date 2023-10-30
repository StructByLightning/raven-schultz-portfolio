import css from "./index.module.scss";
export default function Footer({}) {
  return <footer className={`dark ${css.footer}`}>
    <div className="sectionInner">
      <div className={css.headline}>Let&apos;s Connect</div>
      <a href="mailto:msravenschultz@gmail.com">msravenschultz@gmail.com</a>
      <hr />
      <div className={css.copyright}>Copyright © 2023, Raven Schultz</div>
    </div>
  </footer>;
}
