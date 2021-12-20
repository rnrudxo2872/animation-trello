import { Variants } from "framer-motion";

export const DeleteItemWrapperVariant: Variants = {
  init: {
    opacity: 0,
    y: 100,
    scale: 0.3,
  },
  after: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    scale: 0.3,
    transition: {
      duration: 0.5,
    },
  },
};
