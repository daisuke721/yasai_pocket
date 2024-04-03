import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";


type Props = {
  onOpen: () => void;
}

export const MenuIconButton: React.FC<Props> = (props) => {
  const { onOpen } = props
  return (
    <IconButton aria-label='メニューボタン' icon={<HamburgerIcon />} variant='unstyled' onClick={onOpen} />
  )
}
