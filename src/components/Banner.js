import React from "react";
import Image from "../assets/avatar.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              KAROL <span>CZOCH</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className=" text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  " and above all human... ",
                  2000,
                ]}
                speed={50}
                className="h2"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Hi! I am a freelancer making mostly React application for small
              companies. I heartily invites you to check my portfolio app which
              one i made especially to sharing my works. I really like to know
              that you are enyoing it so in the end you can tell me your
              opinion. Thanks for your time.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-lg">Contact Me</button>
              </Link>
              <Link to="work" activeClass="active" smooth={true} spy={true}>
                <a href="" className="text-gradient btn-link">
                  My Portfolio
                </a>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text0-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.instagram.com/karolczoch/">
                <FaInstagram />
              </a>
              <a href="https://github.com/McVraxx?tab=repositories">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/karol-czoch-69a238218/">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.9)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
