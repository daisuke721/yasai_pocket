import { Grid, GridItem, Heading, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { CartIconButton } from "../atoms/button/CartIconButton";
import { MenuIconButton } from "../atoms/button/MenuIconButton";
import { MenuDrawer } from "../molecules/MenuDrawer";
import { SearchInputButton } from "../molecules/SearchInputButton";

export const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Grid as='header' templateColumns='150px repeat(2, 1fr) 80px' gap={10} h='100px' p='25px' bg='orange.300'>
        <Link to="/">
          <GridItem as='a' _hover={{ cursor: 'pointer' }}>
            <Heading as='h1' textAlign='center' color='white'>App Title</Heading>
          </GridItem>
        </Link>
        <GridItem colSpan={2}>
          <SearchInputButton />
        </GridItem>
        <GridItem justifyContent='end'>
          <Link to="/cart">
            <CartIconButton />
          </Link>
          <MenuIconButton onOpen={onOpen} />
        </GridItem>
        <MenuDrawer onClose={onClose} isOpen={isOpen} />
      </Grid>
    </>
  )
}
