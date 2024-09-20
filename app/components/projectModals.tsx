"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface ProjectShowcaseProps {
  projects: Array<{
    title: string;
    description: string;
    src: string;
    ctaText?: string;
    ctaLink?: string;
    content: () => React.ReactNode;
  }>;
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [active, setActive] = useState<(typeof projects)[number] | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-blue-900/40 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          // Updated the modal wrapper to allow vertical scrolling on mobile devices
          <div className="fixed inset-0 z-[100] p-4 flex items-center justify-center overflow-y-auto">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              // Adjusted positioning for mobile screens
              className="flex absolute top-4 right-4 sm:top-6 sm:right-6 items-center justify-center bg-blue-500 text-white rounded-full h-10 w-10 z-10"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              // Adjusted max-width and added overflow-y-auto for responsiveness
              className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl h-auto max-h-[90vh] bg-white dark:bg-blue-900 rounded-3xl overflow-y-auto shadow-2xl"
            >
              {/* Reduced padding on smaller screens */}
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      // Adjusted font sizes for responsiveness
                      className="font-bold text-blue-600 dark:text-blue-300 text-2xl sm:text-3xl mb-3"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-gray-700 dark:text-gray-300 text-base sm:text-lg"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    // Adjusted padding and margin for mobile screens
                    className="text-gray-600 dark:text-gray-300 text-base flex-grow overflow-auto pr-2 sm:pr-4 mb-6"
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#3B82F6 #E5E7EB',
                    }}
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                  {active.ctaLink && (
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink}
                      target="_blank"
                      // Adjusted padding and font size for responsiveness
                      className="px-6 sm:px-8 py-2 sm:py-3 text-center text-base sm:text-lg rounded-full font-bold bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 self-start"
                    >
                      {active.ctaText}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-[1400px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <motion.li
            layoutId={`card-${project.title}-${id}`}
            key={project.title}
            onClick={() => setActive(project)}
            className="bg-white dark:bg-blue-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
          >
            <motion.div layoutId={`image-${project.title}-${id}`} className="relative h-48 overflow-hidden">
              <Image
                src={project.src}
                alt={project.title}
                width={400}
                height={300}
                className="absolute top-0 left-0 w-full h-full transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            <div className="p-6">
              <motion.h3
                layoutId={`title-${project.title}-${id}`}
                className="font-bold text-blue-600 dark:text-blue-300 text-xl mb-2 group-hover:text-blue-500 transition-colors duration-300"
              >
                {project.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${project.description}-${id}`}
                className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300"
              >
                {project.description}
              </motion.p>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
