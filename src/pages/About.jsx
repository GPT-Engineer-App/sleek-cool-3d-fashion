import React from "react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";

const About = () => {
  return (
    <Box py={20}>
      <Container maxW="container.lg">
        <Heading as="h1" size="2xl" mb={8}>
          About Us
        </Heading>
        <Text fontSize="xl" mb={8}>
          We are a fashion brand dedicated to providing stylish and trendy clothing for fashion enthusiasts. With a passion for quality and design, we strive to bring you the latest fashion trends at affordable prices.
        </Text>
        <Text fontSize="xl">Our team of expert designers and fashion professionals work tirelessly to curate a collection that caters to various styles and preferences. From casual wear to formal attire, we have something for every occasion.</Text>
      </Container>
    </Box>
  );
};

export default About;
