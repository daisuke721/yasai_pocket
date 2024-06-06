import { Link } from "react-router-dom";

import { HeaderTemplate } from "../templates/HeaderTemplate";
import { FooterTemplate } from "../templates/FooterTemplate";
import { Box, Button, Image, Text } from "@chakra-ui/react";

export const Home: React.FC = () => {

  return(
    <>
      <HeaderTemplate />
      {/* メインビジュアル */}
      <Box position="relative" h={{ base: "300px", md: "500px" }} w="100%" overflow="hidden">
        <Image src="" alt="Main visual" objectFit="cover" w="100%" h="100%" bg="gray.600" />
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
          <Text fontSize={{ base: "2xl", md: "4xl" }} color="white" fontWeight="bold">メインビジュアル</Text>
          <Link to="/productlist">
            <Button mt={4} size="lg" colorScheme="teal" bg="teal.400" _hover={{ bg: 'teal.300' }} fontSize={{ base: "sm", md: "md" }}>
              もっと見る
            </Button>
          </Link>
        </Box>
      </Box>
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
