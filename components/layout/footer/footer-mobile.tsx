"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { footNavLinks } from "@/data/footNavData";

const AccordionItem = ({ fn }: { fn: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3
        onClick={() => setIsOpen(!isOpen)}
        className="my-3 text-xs font-bold cursor-pointer"
      >
        {fn.maintitle}
      </h3>
      <hr className="my-3" />
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <ul className=" ms-3 gap-2 flex flex-col">
          {fn.childTitle.map((child: string, idx: number) => (
            <li key={idx}>
              <p className=" hover:underline text-xs font-medium inline cursor-pointer">
                {child}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const FooterMobile = () => {
  return (
    <div>
      {footNavLinks.map((footNav: any, idx: number) => (
        <div key={idx}>
          {footNav.main.map((fn: any, idx: number) => (
            <AccordionItem key={idx} fn={fn} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterMobile;
