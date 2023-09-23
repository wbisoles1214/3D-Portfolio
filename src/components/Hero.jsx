import { BsArrowRight } from 'react-icons/bs';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full" />
          <div className="w-1 sm:h-80 h-40 " />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white-500`}>
            Hi, I'm <span className="text-[#5eb7ff]">Webster</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-cyan-500`}>
            I'm a FullStack Web Developer <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="https://websters-portfolio.vercel.app/">
          <div>
            <button className="bg-blue-500 bg-opacity-50 text-white font-semibold py-2 px-4 rounded-full relative overflow-hidden transform transition-transform hover:scale-105">
              <span className="absolute top-0 left-0 w-full h-full bg-opacity-25 bg-white rounded-full transform scale-105 translate-x-2 translate-y-2"></span>
              Profile <BsArrowRight className="ml-3 text-[#f1f0f3] text-lg" />
            </button>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
