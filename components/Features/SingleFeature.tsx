import React from "react";
import { Feature } from "@/types/feature";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description, link } = feature;

  return (
    <>
      <Link href={link}>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -10,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="h-full animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-7.5"
        >
          <div>
            <Image
              className="rounded-t-lg ml-5"
              src={icon}
              alt=""
              width="260"
              height="64"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default SingleFeature;
