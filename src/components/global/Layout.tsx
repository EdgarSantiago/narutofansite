import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import ThemeToggleButton from "./theme-toggle-button";
import Footer from "./Footer";
import { HTMLMotionProps, motion } from "framer-motion";
import MotionImg from "../homepage/motionimgs/MotionImg";

type PageTransitionProps = HTMLMotionProps<"div">;
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>;

interface LayoutProps extends PageTransitionProps {
  children: ReactNode;
}

export default function Layout(
  { children, ...rest }: LayoutProps,
  ref: PageTransitionRef
) {
  const onTheRight = { opacity: 0, y: -40 };
  const inTheCenter = { opacity: 1, y: 0 };
  const onTheLeft = { opacity: 0, y: 40 };

  const transition = { duration: 0.5, type: "spring" };

  return (
    <Container
      backdropFilter="auto"
      backdropBlur="8px"
      bg={useColorModeValue("#fafafa", "#fafafa")}
      pt={2}
      pb={5}
      maxW="5xl"
      borderLeft="6px solid black"
      borderRight="6px solid black"
      px={[2, 3, 4, 5, 10]}
      position="relative"
      minH="100vh"
      overflow={"hidden"}
    >
      <motion.div
        ref={ref}
        initial={onTheRight}
        animate={inTheCenter}
        exit={onTheLeft}
        transition={transition}
        {...rest}
      >
        <Flex position={"relative"} gap={[2, 3, 4, 5]} direction="column">
          <Navbar />
          {children}
          <Footer />
        </Flex>
      </motion.div>
    </Container>
  );
}
