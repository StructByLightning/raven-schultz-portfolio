import css from "./index.module.scss";
import FilePdfSvg from "@/public/icons/file-pdf.svg";
import GithubLogoSvg from "@/public/icons/github-logo.svg";

export default function Footer({ }) {
  return <footer className={css.footer}>
    <div className="sectionInner">
      <div className={css.row}>
        <span>Raven Schultz · Seattle, WA</span>
        <a href="mailto:msravenschultz@gmail.com">msravenschultz@gmail.com</a>
      </div>
      <div className={css.row}>
        <a href="">
          <FilePdfSvg />
          <span>LinkedIn</span>
        </a>
        <a href="">
          <FilePdfSvg />
          <span>Github</span>
        </a>
        <a href="">
          <FilePdfSvg />
          <span>Resume</span>
        </a>
      </div>
    </div>
  </footer>;
}
