import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img3 from "../assets/portfolio-img2.png";
import Img2 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-24 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight ">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                There is some of my latest projects. Feel free to check it all!
                <p className="max-w-sm mb-16">
                  New ones will appear here when they are finished.
                </p>
              </p>
            </div>
            <a href="https://alapaca-app.vercel.app/">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300"></div>

                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img1}
                  alt=""
                />

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50">
                  <span className="text-gradient">alpacaApp</span>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3x1 text-white">
                    Project for alapaca farm
                  </span>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <a href="https://flinstone-c12052.netlify.app/">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300"></div>

                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img2}
                  alt=""
                />

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50">
                  <span className="text-gradient">flinstoneApp</span>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3x1 text-white">
                    Website made for my friend, whose job is to lay stone covers
                    on fences by hand.
                  </span>
                </div>
              </div>
            </a>
            <a href="https://wedding-app-ten.vercel.app/">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300"></div>

                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img3}
                  alt=""
                />

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50">
                  <span className="text-gradient">weddingApp</span>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3x1 text-white">
                    This site was created before my wedding to invite guests who
                    are far from where I live.
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
