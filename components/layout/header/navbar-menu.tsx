/* eslint-disable no-unused-vars */
"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import Container from "../container";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

interface MenuItemProps {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  nav: {
    mainlabel: string;
    Link: string;
    childLabel: {
      maintitle: string;
      childTitle: string[];
    }[];
  };
}

const MenuItem: FC<MenuItemProps> = ({ setActive, active, item, nav }) => {
  return (
    <li onMouseEnter={() => setActive(item)}>
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white  text-[12px] hover:opacity-[0.9] "
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div
              style={{
                top: "calc(50% + 1rem)",
              }}
              className="absolute left-1/2 transform -translate-x-1/2 "
            >
              <motion.div
                transition={transition}
                layoutId="active"
                className=" dark:bg-black backdrop-blur-sm  bg-black text-white w-screen overflow-hidden  dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout>
                  <Container className=" py-5">
                    <div className=" grid grid-cols-3 gap-5">
                      {nav.childLabel.map((child, idx) => (
                        <div key={idx}>
                          <h4 className=" font-sm p-2">{child.maintitle}</h4>
                          {child.childTitle.map((ch, idx) => (
                            <div key={idx}>
                              <p className=" cursor-pointer p-2 text-sm   transition-colors duration-150  ">
                                {ch}
                              </p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </Container>
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </li>
  );
};

export default MenuItem;
