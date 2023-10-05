import { AnimatePresence, motion } from "framer-motion";
import {
  Box,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  BsMoonStarsFill,
  BsFillMoonFill,
  BsSun,
  BsSunFill,
} from "react-icons/bs";

interface ThemeToggleButtonProps {
  color?: string;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ color }) => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <IconButton
        aria-label="Change theme"
        fontSize={"18px"}
        fontWeight={"400"}
        icon={useColorModeValue(<BsFillMoonFill />, <BsSunFill />)}
        onClick={toggleColorMode}
      />
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
