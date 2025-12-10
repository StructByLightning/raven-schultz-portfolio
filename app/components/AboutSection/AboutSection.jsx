import ContactForm from "@/components/form/contact/contactForm";
import css from "./AboutSection.module.scss";

/**
 * About section with bio text and contact form.
 */
export default function AboutSection() {
  return <section className={css.about} id="about">
    <div className="sectionInner">
      <h2>About</h2>
      <div className={css.text}>

        <p>I have been building things since I was nine years old. Games in elementary school. A network of six game bots running in my garage in high school. Websites in college and after. Now brass-inlaid boxes, handbound books, metal tarot cards. The medium changes. The obsession remains the same.</p>
        <p>Craft is a discipline, whether you are making something out of bits or atoms. Interfaces should enhance your agency, not diminish it. A physical object should feel right in your hands. These are the same problem.</p>
        <p>I run a makerspace out of my laundry room. Laser cutters, 3D printers, metalworking tools. When something needs to exist, I will find a way to make it exist. Everything else is incidental. Bits or atoms, screen or steel: there is a vision and then there is the work of making it real.</p>
        <p>Every problem is a design problem. Every constraint is an invitation. The tools keep getting better and the problems keep getting harder and that is exactly how it should be. We are not done building. We will never be done building. That is not a burden. That is the point.</p>
      </div>

      <div className={css.contact}>
        <a href="mailto:msravenschultz@gmail.com">msravenschultz@gmail.com</a>
        <span>·</span>
        <a href="https://www.linkedin.com/in/ravenschultz/">linkedin.com/in/ravenschultz</a>
      </div>
    </div>
  </section>;
}
