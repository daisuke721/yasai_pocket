import { useState } from "react"
import { SearchIcon } from "@chakra-ui/icons"
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"

export const SearchInputGroup: React.FC = () => {
  const [ searchTerm, setSearchTerm ] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  }

  const handleSearch = (): void => {
    console.log(`検索語: ${searchTerm}`)
  }

  return (
    <>
      <InputGroup w={{ base: '100%', md: '400px' }}>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.300' />
        </InputLeftElement>
        <Input borderRadius='10px' bg='white' placeholder='商品を探す' _placeholder={{ opacity: 1, color: "gray.400" }} value={searchTerm} onChange={handleInputChange} />
        <Button color='gray' colorScheme='gray' borderRadius='10px' marginLeft='5px' onClick={handleSearch}>検索</Button>
      </InputGroup>
    </>
  )
}
