import { Box, IconButton, Text } from "@chakra-ui/react"
import { HiShoppingCart } from "react-icons/hi";

export const CartIconButton: React.FC = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <IconButton aria-label='カートボタン' icon={<HiShoppingCart />} w={6} h={6} variant='unstyled' />
      <Text fontSize='xs'>カート</Text>
    </Box>
  )
}
