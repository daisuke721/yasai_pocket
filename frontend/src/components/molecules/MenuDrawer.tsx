import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react"

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
            <Button w='100%'>新規登録</Button>
            <Button w='100%'>ログイン</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
