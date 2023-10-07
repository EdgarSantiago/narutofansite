import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CSSProperties } from "react";

interface MotionImg {
  src?: string;
  transition?: any;
  animate?: any;
  style?: CSSProperties;
  width?: string;
  height?: string;
}

export default function MotionImg({
  src,
  animate,
  transition,
  style,
  width = "100px",
  height = "100px",
}: MotionImg) {
  return (
    <motion.div animate={animate} transition={transition} style={style}>
      <Image zIndex={-99999} width={width} height={height} src={src} />
    </motion.div>
  );
}
