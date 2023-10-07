import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";

export default function Pointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      style={{ zIndex: 999999, position: "absolute", top: 0 }}
      ref={ref}
      className="box"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 50,
        restDelta: 0.1,
      }}
    />
  );
}
