import { Box, Button, Flex, Image, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import ExpertModal from './ExpertModal'

export const AskNExpert = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <Flex 
        direction={{ base: 'column', md: 'row' }} // Stack vertically on small screens, horizontally on medium and up
        justifyContent={{ base: 'center', md: 'space-around' }} 
        alignItems="center"
        textAlign={{ base: 'center', md: 'left' }} // Center text on small screens
        bgColor={"#00204b"} 
        py={{ base: '20px', md: '50px' }} 
        px={{ base: '10px', md: '20px' }} 
        borderBottomRadius={'20px'}
      >
        <Box 
          p={'15px'} 
          color={'white'} 
          fontSize={{ base: 'lg', md: 'xl' }} // Adjust font size for responsiveness
        >
          <Image src='https://ezylegal-assets.s3.ap-south-1.amazonaws.com/quote_logo.svg'/>
        </Box>
        <Box 
          p={'20px'} 
          color={'white'} 
          fontSize={{ base: 'md', md: 'xl' }} // Adjust font size for responsiveness
          mb={{ base: '20px', md: '0' }} // Add margin bottom on small screens for spacing
        >
          If you have questions regarding our products, speak to our team of Legal Experts.
        </Box>
        <Button 
          onClick={onOpen} 
          border="2px solid white" 
          bgColor={"#00204b"} 
          borderRadius={'50px'} 
          p={'25px'} 
          color={'white'}
          fontSize={{ base: 'sm', md: '2xl' }} // Adjust font size for responsiveness
        >
          Speak to a Legal Expert
        </Button>
      </Flex>
      
      <ExpertModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
