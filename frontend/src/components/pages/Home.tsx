import { Link } from "react-router-dom";

import { HeaderTemplate } from "../templates/HeaderTemplate";
import { FooterTemplate } from "../templates/FooterTemplate";

export const Home: React.FC = () => {
  return(
    <>
      <HeaderTemplate />
      <div>
        <p>topページ</p>
      </div>
      <div>
        <Link to="/product">商品詳細ページへ</Link>
      </div>
      <div>
        <Link to="/productlist">商品一覧ページへ</Link>
      </div>
      <FooterTemplate/>
    </>
  )
}
