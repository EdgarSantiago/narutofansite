import { Heading, Image } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <Heading
      color="white"
      position="relative"
      fontSize={["4xl", "4xl", "5xl", "4xl"]}
      textTransform={"uppercase"}
      w="100%"
    >
      <Image
        loading="lazy"
        src="/brush.png"
        display="inline"
        position="absolute"
        top={"-40px"}
        left={"-50px"}
        height={["125px", "150px", "150px"]}
        w={["380px", "480px", "500px"]}
        zIndex={-999}
      />
      {children}
    </Heading>
  );
}
