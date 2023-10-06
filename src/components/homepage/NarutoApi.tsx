import { Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

export default function NarutoApi() {
  return (
    <Marquee pauseOnHover speed={50}>
      <Text>Este site foi criado com https://www.narutodb.xyz/docs</Text>
    </Marquee>
  );
}
