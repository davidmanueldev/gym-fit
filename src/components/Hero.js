import HeroImg from "../../public/assets/img/hero/dumbell.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlideLeft } from "../utility/animation";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* info */}
        <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
          <div className="text-center md:text-left space-y-6">
            <h1
              variants={SlideLeft(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
            >
              Los buenos hábitos son cheveres pa que quedes{" "}
              <span className="text-primary">chochito</span>
            </h1>
            <p className="text-gray-600 xl:max-w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos
              illo possimus vero facilis odit nulla eligendi? Eum amet
              obcaecati, molestiae provident sapiente, consectetur fugiat ut,
              minima repudiandae doloremque delectus.
            </p>
            {/* Button Section */}
            <div className="flex justify-center items-center gap-8 md:justify-start !mt-4">
              <button className="primary-btn flex items-center gap-2">
                Ver Planes
              </button>
              <button className="flex justify-center items-center gap-2">
                Contactar
              </button>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <Image
            src={HeroImg}
            alt=""
            className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
