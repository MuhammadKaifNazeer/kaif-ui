'use client';

// Visit https://kaif-ui.vercel.app/ for more components like this

import { motion } from "framer-motion";
import {cn} from "@/lib/utils";

interface PendulumProps {
  className?: string;
}

const Pendulum: React.FC<PendulumProps> = ({ className }) => {
  return (
    <div className={cn("w-full max-w-screen overflow-hidden h-screen flex items-start justify-center", className)}>
       <div className="relative flex flex-col items-center justify-center">
        {/* Pendulum */}
        <motion.div
          className="pendulum flex flex-col items-center justify-center"
          style={{
            transformOrigin: "50% 0%",
          }}
          animate={{
            rotate: [60, -60, 60],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: [0.6, 0, 0.4, 1],
          }}
        >
          {/* Stick */}
          <div className="w-[1px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-white"></div>

          {/* Ball */}
          <motion.div
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white"
            style={{
              boxShadow:
                "inset 0 0 60px white, inset 20px 0 60px violet, inset -20px 0 60px rgb(0, 255, 255), 0 0 20px white, -20px 0 60px violet, 20px 0 60px rgb(0, 255, 255)",
            }}
            animate={{
              boxShadow: [
                "inset 0 0 30px white, inset 10px 0 30px violet, inset -10px 0 30px rgb(0, 255, 255), 0 0 10px white, -10px 0 30px violet, 10px 0 30px rgb(0, 255, 255)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Pendulum;