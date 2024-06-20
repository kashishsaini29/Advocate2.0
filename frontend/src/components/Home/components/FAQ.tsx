import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const FAQ = () => {
  const faqItems = [
    {
      question: "Should I be concerned about privacy when it comes to online legal services in India?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quae ipsa obcaecati aut! Eaque quibusdam in qui repudiandae, harum, voluptatibus corrupti ipsa repellat excepturi suscipit laudantium minima laborum earum sunt!"
    },
    {
      question: "What types of legal services can I access online?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quae ipsa obcaecati aut! Eaque quibusdam in qui repudiandae, harum, voluptatibus corrupti ipsa repellat excepturi suscipit laudantium minima laborum earum sunt!"
    },
    {
      question: "What types of legal services can I access online?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quae ipsa obcaecati aut! Eaque quibusdam in qui repudiandae, harum, voluptatibus corrupti ipsa repellat excepturi suscipit laudantium minima laborum earum sunt!"
    },
    {
      question: "What types of legal services can I access online?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quae ipsa obcaecati aut! Eaque quibusdam in qui repudiandae, harum, voluptatibus corrupti ipsa repellat excepturi suscipit laudantium minima laborum earum sunt!"
    },
    // Add more questions and answers here
  ];

  const [show, setShow] = useState(faqItems.map(() => false));

  const toggleShow = (index:any) => {
    setShow((prevShow) => {
      const newShow = [...prevShow];
      newShow[index] = !newShow[index];
      return newShow;
    });
  };

  return (
    <Box px={"10%"} py={'3'}  bgColor={"#00204b"} >
      <Text
        fontSize={"3xl"}
        fontWeight={"bold"}
        borderBottom={"3px solid white"}
        pb={"5"}
        w={"60%"}
        color={"white"}
      >
        Frequently asked Questions
      </Text>
      {faqItems.map((item, index) => (
        <Box key={index} w={"60%"} borderBottom={"2px solid white"} mb={4} color={"white"}>
          <Flex
            my={"5"}
            fontSize={"xl"}
            fontWeight={"semi-bold"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text>{item.question}</Text>
            <Box
              alignContent={"center"}
              fontSize={"2xl"}
              cursor={"pointer"}
              onClick={() => toggleShow(index)}
              color={"white"}
            >
              {show[index] ? "-" : "+"}
            </Box>
          </Flex>
          {show[index] && (
            <Box pb={"20px"}>
              {item.answer}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default FAQ;
