import { Button, Grid, GridItem, Heading, Input, InputGroup, InputLeftElement, InputRightElement, useDisclosure } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import { CartIconButton } from "../../atoms/button/CartIconButton";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

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
          <InputGroup>
            <InputLeftElement pointerEvents={'none'}>
              <SearchIcon color={'gray.300'} />
            </InputLeftElement>
            <Input borderRadius='25px' bg={'white'} outline='none' placeholder='商品を探す' _placeholder={{ opacity: 1, color: "gray.400" }} />
            <InputRightElement width="4.5rem">
              <Button color={'gray'} colorScheme='gray' variant='unstyled' size="sm">検索</Button>
            </InputRightElement>
          </InputGroup>
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
