import type { ReactNode } from "react"

import { Header } from "../organisms/Header"

type Props = {
  children?: ReactNode;
}

export const HeaderTemplate: React.FC<Props> = (props) => {
  const  { children } = props;
  return(
    <>
      <Header />
      {children}
    </>
  )
}
