import { Box, Flex, Heading, Spacer, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { CartIconButton } from "../atoms/button/CartIconButton";
import { MenuIconButton } from "../atoms/button/MenuIconButton";
import { MenuDrawer } from "../molecules/MenuDrawer";
import { SearchInputGroup } from "../molecules/SearchInputGroup";

export const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex as='header' justify={{ base: "space-between", md: "center" }} w='100%' h='100px' alignItems='center' bg='gray.300' p={{ base: "10px", md: "20px" }}>
        <Box p={{ base: "10px", md: "35px" }}>
          <Link to="/">
            <Heading as='h1' textAlign='center' color='white'>App Title</Heading>
          </Link>
        </Box>
        <Spacer />
        <Box p='10px'>
          <SearchInputGroup />
        </Box>
        <Flex>
          <Box display="flex" pr={{ base: "10px", md: "15px" }}>
            <Link to="/cart">
              <CartIconButton />
            </Link>
          </Box>
          <Box pr='15px' display={{ base: 'block', md: 'flex' }}>
            <MenuIconButton onOpen={onOpen} />
          </Box>
          <MenuDrawer onClose={onClose} isOpen={isOpen} />
        </Flex>
      </Flex>
    </>
  )
}
