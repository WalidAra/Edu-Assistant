import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  
  Button,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useCreateTask } from "../../../context/CreateTaskContext";
import { Textarea } from "@chakra-ui/react";

export default function CreateTaskLayer() {
  const cancelRef = React.useRef();
  const z = useCreateTask();
  return (
    <>
      <AlertDialog
        isOpen={z.isOpen}
        leastDestructiveRef={cancelRef}
        onClose={z.onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Create new Task for room
            </AlertDialogHeader>

            <AlertDialogBody>
              <div className="flex flex-col gap-5">
                <Input placeholder="Enter the name of the room" />
                <Textarea placeholder="Here is a sample placeholder" />
              </div>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={z.onClose}>
                Cancel
              </Button>
              <Button colorScheme="messenger" onClick={z.onClose} ml={3}>
                Create
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
