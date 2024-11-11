'use client';

import type { NextPage } from 'next';
import { motion } from 'framer-motion';

import { AnimatedWords } from './';
import { riseWithFade, videoAnimation } from '../utils/animations';

const HeroVideo: NextPage = () => {
  return (
    <motion.div
      className="px-12 max-sm:px-8 bg-cream"
      initial="initial"
      animate="animate"
    >
      <div className="grid grid-cols-[3fr_1fr] py-12 max-sm:grid-cols-1">
        <h1 className="text-7xl leading-[110%] font-bold max-w-[60rem] tracking-[-2px] max-sm:text-3xl">
          <AnimatedWords title="World Leading Down View Camera Technology" />
        </h1>
        <motion.div
          className="text-base leading-[150%] max-sm:text-sm self-end"
          variants={riseWithFade}
        >
          Revolutionary (Down-View Camera Technology) providing unparalleled,
          high-resolution top-down clarity to enhance safety, precision, and
          performance across automotive, drone, and surveillance applications.
        </motion.div>
      </div>
      <motion.video
        className="w-full py-12 max-sm:py-0"
        loop
        autoPlay
        muted
        playsInline
        variants={videoAnimation}
      >
        <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
      </motion.video>
    </motion.div>
  );
};

export default HeroVideo;
