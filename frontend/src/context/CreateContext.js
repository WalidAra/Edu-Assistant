import React, { createContext, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

const Create = createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

const CreateContext = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Create.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </Create.Provider>
  );
};

export default CreateContext;

export const useCreate = () => useContext(Create);
