import { Flex, Text } from "@chakra-ui/react"

export const Footer: React.FC = () => {
  return (
    <Flex as='footer' justify='center' align='center' w='100%' h='100px' bg='gray.600'>
      <Text color='white'>©yasai pocket</Text>
    </Flex>
  )
}
