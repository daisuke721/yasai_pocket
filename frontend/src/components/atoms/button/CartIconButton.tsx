import { IconButton } from "@chakra-ui/react"
import { HiShoppingCart } from "react-icons/hi";

export const CartIconButton: React.FC = () => {
  return (
    <IconButton aria-label='カートボタン' icon={<HiShoppingCart />} variant='unstyled' />
  )
}
