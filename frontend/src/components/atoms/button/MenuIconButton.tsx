import { IconButton } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";


type Props = {
  onOpen: () => void;
}

export const MenuIconButton: React.FC<Props> = (props) => {
  const { onOpen } = props
  return (
    <IconButton aria-label='メニューボタン' icon={<AiOutlineMenu />} variant='unstyled' onClick={onOpen} />
  )
}
