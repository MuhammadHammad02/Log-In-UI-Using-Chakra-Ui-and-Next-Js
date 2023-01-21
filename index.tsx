import { Flex, Heading, Input, Button } from "@chakra-ui/react"
export default function Home() {
  return (
    <Flex
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}

    >
      <Flex direction={"column"} 
      background={"blue.100"}
      p={12}
      rounded={6}
      position={"relative"}
    >
      <Heading mb={6}>Log In</Heading>
      <Input placeholder="Your email.."
       variant={"filled"}
       mb={3}
       type = "email"
       />
       <Input placeholder="*********"
       variant={"filled"}
       type="password"
       mb={6}/>
       <Button colorScheme={"twitter"}> Log in</Button>
    </Flex>
    </Flex>
  )

}