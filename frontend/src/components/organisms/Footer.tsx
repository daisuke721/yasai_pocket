import { Center, Flex } from "@chakra-ui/react"

export const Footer: React.FC = () => {
  return (
    <Flex as='footer' justify='center' minWidth='max-content' h='100px' bg='gray.600'>
      <Center color='white'>©yasai pocket</Center>
    </Flex>
  )
}
