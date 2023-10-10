import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import ThemeToggleButton from "./theme-toggle-button";
import Footer from "./Footer";
import { HTMLMotionProps, motion } from "framer-motion";

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

  const transition = { duration: 0.8, type: "spring" };

  return (
    <Container
      zIndex={999}
      backdropFilter="auto"
      backdropBlur="8px"
      bg={useColorModeValue("#fafafa", "#111111ec")}
      pt={2}
      pb={5}
      maxW="4xl"
      borderLeft="6px solid black"
      borderRight="6px solid black"
      px={[2, 3, 4, 5, 10]}
      position="relative"
      minH="100vh"
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
