"use client";

import React from "react";
import dynamic from "next/dynamic";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import Image from "next/image";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <div id="about" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
            ref={ref}
          ></motion.div>
          <motion.div 
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>7+
            <h3 className="h3 mb-4">I am a Developer with over 2 years of experience.</h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quis
              vitae officia minima nemo praesentium excepturi fuga aliquam saepe
              molestias? Voluptatum deserunt a quas ipsa maxime reiciendis. Quo,
              eveniet consectetur.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 mt-6">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={6} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={17} duration={6} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={6} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Used <br />
                  Languages
                </div>
              </div>
              <div>
                <button className="btn btn-lg">
                  <a href="#contact">Contact me</a>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
