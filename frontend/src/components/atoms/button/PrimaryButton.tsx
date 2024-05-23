import { Button } from "@chakra-ui/react"

type Props = {
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <Button>{children}</Button>
  )
}
