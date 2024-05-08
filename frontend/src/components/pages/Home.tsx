import { Link } from "react-router-dom";

import { Footer } from "../organisms/layout/Footer";
import { Header } from "../organisms/layout/Header";

export const Home: React.FC = () => {
  return(
    <>
      <Header />
      <div>
        <p>topページ</p>
      </div>
      <div>
        <Link to="/product">商品詳細ページへ</Link>
      </div>
      <div>
        <Link to="/productlist">商品一覧ページへ</Link>
      </div>
      <Footer />
    </>
  )
}
