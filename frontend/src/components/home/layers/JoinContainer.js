/* eslint-disable no-unused-vars */
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
import { useJoin } from "../../../context/JoinContext";
import { Input } from "@chakra-ui/react";
import { fetchers } from "../../../lib/fetch";

const JoinContainer = () => {
  const [isFalse, setIsFalse] = useState(false);
  const u = useJoin();
  const cancelRef = React.useRef();
  const id = localStorage.getItem("");
  const [code, setCode] = useState("");

  const HandleJoinRoom = async () => {
    const result = await fetchers.joinNewRoom(id, code);

    if (result) {
      u.onClose();
    } else {
      setIsFalse(true);
    }
  };

  const Close = () => {
    u.onClose();
    setIsFalse(false);
  };

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={Close}
        isOpen={u.isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Enter the code of room</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <div className="flex flex-col gap-3">
              <Input
                onChange={(e) => setCode(e.target.value)}
                placeholder="123456"
              />

              {isFalse && (
                <p className="text-center w-full text-red-600 text-sm font-medium">
                  Wrong code try again
                </p>
              )}
            </div>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={Close}>
              Cancel
            </Button>
            <Button onClick={HandleJoinRoom} colorScheme="messenger" ml={3}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default JoinContainer;
