import { IconButton } from "@chakra-ui/react"
import { BsCart } from "react-icons/bs"

export const CartIconButton: React.FC = () => {
  return (
    <IconButton aria-label='カートボタン' icon={<BsCart />} variant='unstyled' />
  )
}
