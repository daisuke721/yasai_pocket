import { Input } from "@chakra-ui/react"

type Props = {
  placeholder?: string;
}

export const InputText: React.FC<Props> = (props) => {
  const { placeholder = "" } = props;
  return (
    <Input placeholder={placeholder}/>
  )
}
