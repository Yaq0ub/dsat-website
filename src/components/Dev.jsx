import { apple, google } from "../assets";
import styles, { layout } from "../style";
import Carousel from "./Carousel";

const Dev = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      {/* Carousel Wrapper */}
      <div className="relative w-full pb-[100%] mx-2">
        <Carousel />
      </div>
      
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        App design mockups for <br className="sm:block hidden" /> informed decisions
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our app development process starts with providing you design mockups
        to help visualize your app's interface. Choose from various designs
        tailored to your needs and preferences, ensuring a seamless user
        experience before we proceed with the development. Check some applications
        created by our team at the Apple or Google store:
      </p>


      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="app_store" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
      
    </div>
  </section>
);

export default Dev;
