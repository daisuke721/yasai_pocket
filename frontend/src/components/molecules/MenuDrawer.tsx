import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom";

type Props = {
  onClose: () => void;
  isOpen: boolean;
}

export const MenuDrawer: React.FC<Props> = (props) => {
  const { onClose, isOpen } = props;
  return (
    <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader>メニュー画面</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <Box>
              <Heading as='h5'>ユーザーの方</Heading>
              <Link to="/usersignup">
                <Button w='100%'>サインアップ</Button>
              </Link>
              <Link to="/usersignin">
                <Button w='100%'>サインイン</Button>
              </Link>
            </Box>
            <Box>
              <Heading as='h5'>管理者の方</Heading>
              <Link to="/adminsignup">
                <Button w='100%'>サインアップ</Button>
              </Link>
              <Link to="/adminsignin">
                <Button w='100%'>サインイン</Button>
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
