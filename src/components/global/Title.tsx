import { Heading, Image } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <Heading
      color="white"
      position="relative"
      w="480px"
      fontSize={["2xl", "3xl", "3xl", "5xl"]}
      textTransform={"uppercase"}
    >
      <Image
        loading="lazy"
        src="/brush.png"
        display="inline"
        position="absolute"
        top={"-40px"}
        left={"-50px"}
        height={"150px"}
        width={"100%"}
        zIndex={-999}
      />
      {children}
    </Heading>
  );
}
