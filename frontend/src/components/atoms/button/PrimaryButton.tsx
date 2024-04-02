import { Button } from "@chakra-ui/react"

interface Props {
  children?: React.ReactNode;
}

export const PrimaryButton: React.FC<Props> = (props) => {
  // const { children } = props;
  return (
    <Button colorScheme='blue' variant='solid'></Button>
  )
}
