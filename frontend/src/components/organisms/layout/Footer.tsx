import { Center, Grid, GridItem } from "@chakra-ui/react"

export const Footer: React.FC = () => {
  return (
    <Grid as='footer' bg='orange.300' h='100px'>
      <GridItem p='35px'>
        <Center color='white'>©yasai pocket</Center>
      </GridItem>
    </Grid>
  )
}
