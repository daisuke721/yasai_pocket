import type { ReactNode } from "react"

import { Footer } from "../organisms/Footer";

type Props = {
  children: ReactNode;
}

export const HeaderLayout: React.FC<Props> = (props) => {
  const  { children } = props;
  return(
    <>
      <Footer />
      {children}
    </>
  )
}
