import React, { createContext, useContext } from "react";
import { useDisclosure } from '@chakra-ui/react'
const CreateTask = createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

const CreateTaskContext = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <CreateTask.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </CreateTask.Provider>
  );
};

export default CreateTaskContext;

export const useCreateTask = ()=> useContext(CreateTask);
