import { Route, Routes } from "react-router-dom"

import { Home } from "../components/pages/Home"
import { ProductDetail } from "../components/pages/ProductDetail"
import { ProductList } from "../components/pages/ProductList"
import { CartItem } from "../components/pages/CartItem"

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="product" element={<ProductDetail />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="cart" element={<CartItem />} />
      </Route>
    </Routes>
  )
}
