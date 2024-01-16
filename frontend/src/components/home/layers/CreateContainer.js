import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
} from "@chakra-ui/react";

import { useCreate } from "../../../context/CreateContext";
import { Input } from "@chakra-ui/react";
import { fetchers } from "../../../lib/fetch";

const CreateContainer = () => {
  const u = useCreate();
  const cancelRef = React.useRef();
  const [room_name, setRoom_name] = useState("");
  const id = localStorage.getItem("id");

  const HandleCreateRoom = async () => {
    const result = await fetchers.CreateRoom(room_name, id);

    if (result.success) {
      u.onClose();
    } 
  };
  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={u.onClose}
        isOpen={u.isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Enter the name of the room</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <Input
              onClick={(e) => setRoom_name(e.target.value)}
              placeholder="title of the room"
            />
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={u.onClose}>
              Cancel
            </Button>
            <Button onClick={HandleCreateRoom} colorScheme="whatsapp" ml={3}>
              Create
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CreateContainer;
