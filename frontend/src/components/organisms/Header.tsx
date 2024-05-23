import { Box, Flex, Heading, Spacer, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { CartIconButton } from "../atoms/button/CartIconButton";
import { MenuIconButton } from "../atoms/button/MenuIconButton";
import { MenuDrawer } from "../molecules/MenuDrawer";
import { SearchInputButton } from "../molecules/SearchInputButton";

export const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex as='header' justify='center' minWidth='max-content' h='100px' alignItems='center' bg='gray.300'>
      <Box p='35px'>
        <Link to="/">
          <Heading as='h1' textAlign='center' color='white'>App Title</Heading>
        </Link>
      </Box>
      <Spacer />
      <Box p='10px'>
        <SearchInputButton />
      </Box>
      <Box pl='15px' display={{ base: 'block', md: 'flex' }}>
        <Link to="/cart">
          <CartIconButton />
        </Link>
      </Box>
      <Box pr='15px' display={{ base: 'block', md: 'flex' }}>
        <MenuIconButton onOpen={onOpen} />
      </Box>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </Flex>
  )
}
