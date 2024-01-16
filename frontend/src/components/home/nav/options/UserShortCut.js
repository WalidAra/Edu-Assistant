import React from "react";
import { Menu, MenuButton, MenuList, Button } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

export default function UserShortCut() {
  return (
    <>
      <Menu>
        <MenuButton>
          <div className="flex items-center gap-2">
            <div className="p-0.5 border-2 border-solid border-gray-400 rounded-full">
              <Avatar name="Dan Abrahmov" size="sm" />
            </div>

            <span>
              {" "}
              <FaChevronDown />{" "}
            </span>
          </div>
        </MenuButton>
        <MenuList className="flex flex-col gap-3 p-3 w-72">
          <p className="font-medium text-center w-full">
            {" "}
            arawalid90@gmail.com{" "}
          </p>

          <div className="center_div w-full ">
            <Avatar name="Dan Abrahmov" size="xl" />
          </div>

          <p className="font-medium text-center w-full text-xl"> ExoticAra </p>

          <Button colorScheme="messenger" width="100%">
            {" "}
            Log out
          </Button>
        </MenuList>
      </Menu>
    </>
  );
}
