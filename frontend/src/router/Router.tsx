import { Route, Routes } from "react-router-dom"

import Home from "../components/pages/Home"
import { UserSignIn } from "../components/pages/UserSignIn"

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/UserSingIn" element={<UserSignIn />} />
      </Route>
    </Routes>
  )
}
