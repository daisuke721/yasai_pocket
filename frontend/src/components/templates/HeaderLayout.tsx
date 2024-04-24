import type { ReactNode } from "react"
import { Header } from "../organisms/layout/Header"

type Props = {
  children: ReactNode;
}

export const HeaderLayout: React.FC<Props> = (props) => {
  const  { children } = props;
  return(
    <>
      <Header />
      {children}
    </>
  )
}
