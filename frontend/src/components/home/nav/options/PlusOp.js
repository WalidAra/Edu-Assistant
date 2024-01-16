/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { IconButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaPlus } from "react-icons/fa";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useJoin } from "../../../../context/JoinContext";
import { useCreate } from "../../../../context/CreateContext";

export default function PlusOp() {
  const u = useJoin();
  const j = useCreate();
  return (
    <>
      <Menu>
        <MenuButton rightIcon={<ChevronDownIcon />}>
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="gray"
            aria-label="Done"
            fontSize="20px"
            icon={<FaPlus />}
          />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={u.onOpen}>Join</MenuItem>
          <MenuItem onClick={j.onOpen}>Create</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
