import React, { createContext, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

const Join = createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

const JoinContext = ({ children }) => {
      const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Join.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </Join.Provider>
  );
};

export default JoinContext;

export const useJoin = () => useContext(Join);
