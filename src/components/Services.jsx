import { services } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Services = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Discover the range of services <br className="sm:block hidden" /> DSAT provides.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Apart from app development, DSAT offers an extensive selection of services such as web development, digital marketing, UX/UI design, and more. Our diverse expertise guarantees the most effective solutions for your business growth and success.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={services} alt="services" className="w-[100%] h-[100%] rounded-[30px] white-glow" />
    </div>
  </section>
);

export default Services;
