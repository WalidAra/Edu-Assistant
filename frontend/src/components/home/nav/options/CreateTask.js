import React from "react";
import { Button } from "@chakra-ui/react";
import { TbSubtask } from "react-icons/tb";
import { useCreateTask } from "../../../../context/CreateTaskContext";

const CreateTask = () => {
  const u = useCreateTask();

  return (
    <Button onClick={u.onOpen} colorScheme="messenger" leftIcon={<TbSubtask />}>
      Create task for a room
    </Button>
  );
};

export default CreateTask;
