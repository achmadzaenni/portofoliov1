"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const loadingTimer = setTimeout(() => {
      setIsLeaving(true);
    }, 3000);
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 3800);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: isLeaving ? "-100%" : 0,
      }}
      transition={{
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-zinc-950"
    >
      <div className="flex flex-col items-center">
        <div className="mt-8 flex items-center gap-2">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              className="h-2 w-2 rounded-full bg-zinc-900 dark:bg-white"
              animate={{
                y: [0, -6, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          className="mt-4 text-xs uppercase tracking-[0.35em] text-zinc-400"
        >
          Loading
        </motion.p>
      </div>
    </motion.div>
  );
}
