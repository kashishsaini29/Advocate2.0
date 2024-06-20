import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Link,
    Box,
  } from '@chakra-ui/react';
  import React from 'react';
  
  type CardComponentProps = {
    imageSrc: string;
    title: string;
    description: string;
    showFullDescription: boolean;
    onReadMore: () => void;
  };
  
  export const CardComponent: React.FC<CardComponentProps> = ({
    imageSrc,
    title,
    description,
    showFullDescription,
    onReadMore,
  }) => {
    const truncatedDescription =
      description.length > 90
        ? description.substring(0, 90) + '...'
        : description;
  
    return (
      <Card
        minW={'100%'}
        maxW="xs"
        h="350px"
        display="flex"
        flexDirection="column"
        _hover={{ shadow: 'xl', transform: 'scale(1.05)', cursor: 'pointer' }}
        transition={'ease-in-out 0.3s'}
      >
        <CardBody
          display="flex"
          flexDirection="column"
          flex="1"
          p={4} // Add padding here
          overflowY="auto" // Add scroll bar for overflow content
        >
          <Image
            src={imageSrc}
            alt={title}
            borderRadius="lg"
            objectFit="cover"
            h="120px" // Adjust the height of the image
            w="100%"
          />
          <Stack mt="6" spacing="3" flex="1" overflow="hidden">
            <Heading size="md">{title}</Heading>
            <Text>
              {showFullDescription ? description : truncatedDescription}
              {description.length > 100 && !showFullDescription && (
                <Link color="#00204b" fontWeight="bold" onClick={onReadMore}>
                  {' '}
                  Read more
                </Link>
              )}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    );
  };
  