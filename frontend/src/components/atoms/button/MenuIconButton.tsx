import { Box, IconButton, Text } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";


type Props = {
  onOpen: () => void;
}

export const MenuIconButton: React.FC<Props> = (props) => {
  const { onOpen } = props
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <IconButton aria-label='メニューボタン' icon={<AiOutlineMenu />} w={6} h={6} variant='unstyled' onClick={onOpen} />
      <Text fontSize='xs'>メニュー</Text>
    </Box>
  )
}
