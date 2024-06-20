import { Box, Grid, GridItem, Image, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import React from "react";
import ExpertModal from "./ExpertModal";

const AdvicePage = () => {
  const imageWidth = useBreakpointValue({ base: "100%", md: "auto" }); // Adjust image width responsively
  const isMobile = useBreakpointValue({ base: true, md: false }); // Check if mobile view (base)
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} mx={{ base: "10px", md: "30px" }} mt={'40px'}>
        <GridItem p={4}>
          <Box display="flex" justifyContent="center" p={4}>
            <Image
              src="https://img.freepik.com/free-photo/close-up-business-people-shaking-hands_23-2149271695.jpg?t=st=1718371253~exp=1718374853~hmac=7a48005bd6313e1041a88e6d540878b87656aaaa119bbc4787a089863a569fbe&w=360"
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.8)"
              borderRadius="2xl"
              width={imageWidth}
            />
          </Box>
        </GridItem>
        <GridItem p={4}>
          <Box p={10}>
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
              Lorem ipsum dolor sit amet consectetur.
            </Text>
            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="400" mt={4} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aut repudiandae mollitia assumenda
              modi officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, earum. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dolor at quod ratione earum nesciunt iste aspernatur molestias
              eveniet odio dignissimos!
            </Text>
            <Box display="flex" justifyContent="center" mt={4}>
              <Box
                width="200px"
                p={2}
                borderRadius="50px"
                bgColor="#00204b"
                color="white"
                fontSize={{ base: "xl", md: "2xl" }}
                textAlign="center"
                onClick={onOpen} 
                cursor={'pointer'}
              >
                Consult Now
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      {isMobile && (
        <Grid templateColumns="1fr" gap={4} mx="30px" mt={4}>
          <GridItem p={4}>
            <Box display="flex" justifyContent="center" p={4}>
              <Image
                src="https://img.freepik.com/free-photo/close-up-business-people-shaking-hands_23-2149271695.jpg?t=st=1718371253~exp=1718374853~hmac=7a48005bd6313e1041a88e6d540878b87656aaaa119bbc4787a089863a569fbe&w=360"
                boxShadow="0px 4px 6px rgba(0, 0, 0, 0.8)"
                borderRadius="2xl"
                width={imageWidth}
              />
            </Box>
          </GridItem>
          <GridItem p={4}>
            <Box p={5}>
              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="400" mt={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aut repudiandae mollitia assumenda
                modi officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, earum. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Repudiandae dolore iure omnis. Quis esse minima culpa accusantium,
                eaque fugit ipsam?
              </Text>
              <Box display="flex" justifyContent="center" mt={4}>
                <Box
                  width="200px"
                  p={2}
                  borderRadius="50px"
                  bgColor="#00204b"
                  color="white"
                  fontSize={{ base: "xl", md: "2xl" }}
                  textAlign="center"
                  onClick={onOpen} 
                  cursor={'pointer'}
                >
                  Consult Now
                </Box>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      )}
      {!isMobile && (
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} mx={{ base: "10px", md: "30px" }} mt={4}>
        
          <GridItem p={4}>
            <Box p={10}>
              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="400" mt={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aut repudiandae mollitia assumenda
                modi officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, earum. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Repudiandae dolore iure omnis. Quis esse minima culpa accusantium,
                eaque fugit ipsam?
              </Text>
              <Box display="flex" justifyContent="center" mt={4}>
                <Box
                  width="200px"
                  p={2}
                  borderRadius="50px"
                  bgColor="#00204b"
                  color="white"
                  fontSize={{ base: "xl", md: "2xl" }}
                  textAlign="center"
                  onClick={onOpen}
                  cursor={'pointer'}
                >
                  Consult Now
                </Box>
              </Box>
            </Box>
          </GridItem>
          <GridItem p={4}>
            <Box display="flex" justifyContent="center" p={4}>
              <Image
                src="https://img.freepik.com/free-photo/close-up-business-people-shaking-hands_23-2149271695.jpg?t=st=1718371253~exp=1718374853~hmac=7a48005bd6313e1041a88e6d540878b87656aaaa119bbc4787a089863a569fbe&w=360"
                boxShadow="0px 4px 6px rgba(0, 0, 0, 0.8)"
                borderRadius="2xl"
                width={imageWidth}
              />
            </Box>
          </GridItem>
        </Grid>
      )}
       <ExpertModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AdvicePage;
