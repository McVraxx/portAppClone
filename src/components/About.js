import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20  lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 ">About me</h2>
            <h3 className="h3 mb-4">
              I'm freelance Front-end Developer with over 1 years of experience.
            </h3>
            <p className="mb-6">
              In January 2023, I completed a 9-month Front End Developer SDA
              Academy course. After that i started making my own projects which
              you can try on the MyPortfolio button beneath.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10- mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={-10} end={1} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Project <br />
                  completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={2} duration={3} /> : null}{" "}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <Link to="work" activeClass="active" smooth={true} spy={true}>
                <a href="#" className="text-gradient btn-link">
                  My Portfolio
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
