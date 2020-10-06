export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
};
export const containerWork = {
  hidden: { opacity: 0 },
  show: {
    background: "white",
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
};

export const titleAnim = {
  hidden: { y: 100 },
  show: {
    y: 0,
    transition: { type: "tween", ease: "circOut", duration: 0.75 },
  },
};
export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: "tween", ease: "circOut", duration: 0.75 },
  },
};
export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "circOut",
      duration: 1,
      delay: 0.75,
    },
  },
};
