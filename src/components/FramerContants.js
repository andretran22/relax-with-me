export const defaultVariant = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1,
  },
};

export const defualtTransition = {
  // transition: "linear",
  // type: "spring",
  // stiffness: 100,
  type: "tween",
  ease: "anticipate",
  duration: 1,
};

export const styleAbsolute = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw"
}