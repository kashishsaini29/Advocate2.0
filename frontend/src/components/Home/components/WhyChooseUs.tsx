import {
    Grid,
    Box,
    Text,
    Heading,
    Image,
    Card,
    Stack,
    CardBody,
  } from '@chakra-ui/react';
  import React from 'react';
  
  export const WhyChooseUs: React.FC = () => {
    return (
      <>
        <Heading
          textAlign="center"
          my="10"
          px={2}
          display="flex"
          justifyContent="center"
        >
          <Text>Why Choose Us</Text>
          <Image
            src="https://cdn-icons-png.freepik.com/512/3409/3409542.png?ga=GA1.2.851937454.1716999484"
            maxH="80px"
            maxW="80px"
            pl="8px"
          />
        </Heading>
        <Grid templateColumns={{ md: '1fr 1fr' }} gap="16" px={10}>
          <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden">
            <Box
            //   justify="center"
              alignItems="center"
              justifyContent="center"
              display="flex"
            >
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '100px' }}
                maxH="100px"
                src="/icons/license.gif"
                alt="License"
              />
            </Box>
  
            <Stack>
              <CardBody>
                <Heading size="md">Expertise and Experience</Heading>
                <Text py="2">
                  With years of experience across diverse legal fields, our
                  attorneys possess the knowledge and skills necessary to handle
                  even the most complex cases.
                </Text>
              </CardBody>
            </Stack>
          </Card>
          <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden">
            <Box
            //   justify="center"
              alignItems="center"
              justifyContent="center"
              display="flex"
            >
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '100px' }}
                maxH="100px"
                src="/icons/happy.gif"
                alt="Happy"
              />
            </Box>
  
            <Stack>
              <CardBody>
                <Heading size="md">Client-Centered Approach</Heading>
                <Text py="2">
                  We prioritize our clients’ needs and concerns, offering
                  personalized attention and tailored legal strategies to achieve
                  the best possible outcomes.
                </Text>
              </CardBody>
            </Stack>
          </Card>
          <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden">
            <Box
            //   justify="center"
              alignItems="center"
              justifyContent="center"
              display="flex"
            >
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '100px' }}
                maxH="100px"
                src="/icons/no-racism.gif"
                alt="No Racism"
              />
            </Box>
  
            <Stack>
              <CardBody>
                <Heading size="md">Commitment to Excellence</Heading>
                <Text py="2">
                  Our dedication to excellence ensures that we provide high-quality
                  legal services and maintain the highest standards of
                  professionalism and integrity.
                </Text>
              </CardBody>
            </Stack>
          </Card>
          <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden">
            <Box
            //   justify="center"
              alignItems="center"
              justifyContent="center"
              display="flex"
            >
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '100px' }}
                maxH="100px"
                src="/icons/communications.gif"
                alt="Communications"
              />
            </Box>
  
            <Stack>
              <CardBody>
                <Heading size="md">Accessible and Responsive</Heading>
                <Text py="2">
                  We believe in clear communication and are always available to
                  answer your questions and provide updates on your case. Your
                  peace of mind is important to us.
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </Grid>
        <Box
          px={10}
        //   justify="center"
          alignItems="center"
          justifyContent="center"
          display="flex"
          my={10}
        >
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            maxW={{ sm: '100%', md: '46%' }}
            justify="center"
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            <Box
            //   justify="center"
              alignItems="center"
              justifyContent="center"
              display="flex"
            >
              <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '100px' }}
                maxH="100px"
                src="/icons/society.gif"
                alt="Society"
              />
            </Box>
  
            <Stack>
              <CardBody>
                <Heading size="md">Community Involvement</Heading>
                <Text py="2">
                  We are proud to be active members of our community, supporting
                  local causes and organizations that make a positive impact.
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </Box>
      </>
    );
  };
  