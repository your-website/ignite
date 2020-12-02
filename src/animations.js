export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, ease: "easeOut" },
  },
};

export const slideText = {
  hidden: { opacity: 1, x: 300 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75 },
  },
};

export const animSlideFromLeft = {
  hidden: { opacity: 1, x: -300 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
