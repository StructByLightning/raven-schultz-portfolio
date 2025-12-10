import Button from "@/components/Button/Button";
import css from "./index.module.scss";
import FilePdfSvg from "@/public/icons/file-pdf.svg";
import GithubLogoSvg from "@/public/icons/github-logo.svg";

export default function Footer({ }) {
  return <footer className={css.footer}>
    <div className="sectionInner">
      <div className={css.row}>
        <span>Raven Schultz · Seattle, WA</span>
      </div>
      <div className={css.row}>

        <Button href="https://www.linkedin.com/in/ravenschultz/">LinkedIn</Button>
        <Button href="github.com/StructByLightning">Github</Button>
        <Button href="">Resume</Button>
        <Button href="mailto:msravenschultz@gmail.com">msravenschultz@gmail.com</Button>
      </div>
    </div>
  </footer>;
}
