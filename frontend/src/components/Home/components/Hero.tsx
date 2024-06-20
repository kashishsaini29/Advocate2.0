import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} // Adjust columns for lg and above
      gap={4}
      px={{ base: "4%", lg: "2%" }} // Responsive padding
      h={{ base: "auto", lg: "100vh" }} // Responsive height
      bgColor={'teal.50'}
      backgroundImage="url('/img/bg.jpg')" 
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      alignItems="center" // Center content vertically
      justifyItems="center" // Center content horizontally
    >
      <GridItem p={{ base: "10px", lg: "20px" }} m={{ base: "20px", lg: "40px" }}>
        <Box mb={"20px"}>
          <Text fontSize={{ base: "2xl", lg: "3xl" }} fontWeight={"bold"} textAlign={{ base: "center", lg: "left" }}>
            AtoZ Legal: Guiding You Every Step of the Way
          </Text>
        </Box>
        <Box>
          <Text fontSize={{ base: "lg", lg: "xl" }} fontWeight={"600"} textAlign={{ base: "center", lg: "left" }}>
            Whether it's personal or business matters, consult with a lawyer and
            make informed decisions. For legal advice, documents, and business
            registrations, rely on our network of experienced and verified legal
            experts located in all major cities across the country.
          </Text>
        </Box>
        {["Lorem, ipsum dolor.", "Lorem, ipsum dolor.", "Lorem, ipsum dolor."].map((text, index) => (
          <Link to="/personal-legal-consultant" key={index}>
            <Box
              w={'250px'}
              display={"flex"}
              justifyContent={"center"}
              my={"20px"}
              borderRadius={"50px"}
              py={"10px"}
              bgColor={"#00204b"}
              color={'white'}
              mx="auto" // Center the boxes
            >
              {text}
            </Box>
          </Link>
        ))}
      </GridItem>
      <GridItem display={{ base: "none", lg: "flex" }} justifyContent={"center"} p={"20"}>
        <Image
          src="https://img.freepik.com/free-photo/close-up-business-people-shaking-hands_23-2149271695.jpg?t=st=1718371253~exp=1718374853~hmac=7a48005bd6313e1041a88e6d540878b87656aaaa119bbc4787a089863a569fbe&w=360"
          boxShadow="0px 4px 6px rgba(0, 0, 0, 0.8)"
          borderRadius={"2xl"}
          maxW={{ base: "80%", lg: "100%" }} // Responsive width
          maxH={{ base: "auto", lg: "400px" }} // Responsive height
        />
      </GridItem>
    </Grid>
  );
};

export default Hero;
