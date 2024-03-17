import React from "react";
import { motion } from "framer-motion";
import { AiOutlineInfoCircle } from "react-icons/ai";
import rajImg from "../assets/self.png";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <motion.div
      initial={{ y: "50%", opacity: 0 }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ ease: "easeIn", duration: "0.5", type: "spring" }}
      exit={{ x: "-100%" }}
    >
      <Helmet>
        <title>About Me - Dheeraj Maske</title>
        <meta
          name="description"
          content="|  |  | | "
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="About Me - Dheeraj maske" />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:image" content={rajImg} />
        <meta property="og:url" content="Your page URL here" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me" />
        <meta
          name="twitter:description"
          content=""/>
        <meta name="twitter:image" content={rajImg} />
      </Helmet>
      <div className="md:w-[70vw] w-[90vw] md:h-[80vh] h-[100vh] p-5 lg:p-10">
        <h1 className="text-center text-white md:text-5xl sm:text-3xl text-xl font-bold mb-5">
          About Me:
        </h1>
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="about-me-text lg:px-10 p-2 py-10 md:text-2xl sm:text-xl text-sm font-mono text-white/70">
            <p className=" ">
             
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#EF4444] text-ellipsis">
                
              </span>
               Welcome to my portfolio! I am Dheeraj Maske, a passionate individual with a diverse range of interests spanning technology, management, and sports. With a background in engineering and a keen interest in exploring the intersection of technology and management, I am dedicated to continuous learning and personal growth.

Throughout my journey, I have had the privilege of gaining valuable experiences, from internships at prestigious institutions like ISRO and TRDDC to leadership roles in student organizations. My dedication to innovation and problem-solving has fueled my ambition to make a meaningful impact in the techno-management industry.

Outside of my professional pursuits, I am an avid sports enthusiast, finding joy and discipline in activities like soccer. Balancing work and play is essential to me, and I believe in fostering a healthy work-life equilibrium. <br /> 
              <br />
              
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className=" border-b-2 border-[#EF4444] border-opacity-25 transition ease-in hover:border-opacity-75 "
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#2f2e41] text-ellipsis">
                  
                </span>
              </a>
              
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className=" border-b-2 border-[#EF4444] border-opacity-25 transition ease-in hover:border-opacity-75 "
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#EF4444] to-[#2f2e41] text-ellipsis">
                 
                </span>
              </a>
              
            </p>
          </div>

          <div className="sm:w-[500px] w-full m-auto">
            <img
              src={rajImg}
              className=" w-full ease-in aspect-square object-cover rounded-[50%]"
              alt=""
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
