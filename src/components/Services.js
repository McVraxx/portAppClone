import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const services = [
  {
    name: "CSS, Bootstrap, Tailwind Design",
    description:
      "I am using Tailwind, Bootstrap or even CSS to make best visual experience for customers.",
    link: "Learn more",
    href: "https://getbootstrap.com/",
  },
  {
    name: "React, Typescript",
    description:
      "Using React I create interactive and dynamic applications that are easy and intuitive to use.",
    link: "Learn more",
    href: "https://react.dev/",
  },
  {
    name: "Product Branding",
    description:
      "I help in designing the website and in branding a given product in order to maximize sales.",
    link: "Learn more",
    href: "https://www.shopify.com/retail/product-branding",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 mb-6">What i Do. </h2>
            <h3 className="h3 max-w-[455px] mb-16 ">
              I'm freelance Front-end Developer with over 1 years of experience.
            </h3>
            <Link to="work" activeClass="active" smooth={true} spy={true}>
              <button className="btn btn-sm">See my work</button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link, href } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px]  mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href={href}
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a className="text-gradient text-sm" href={href}>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
