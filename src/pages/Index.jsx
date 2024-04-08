import React from "react";
import { Box, Heading, Text, Flex, Image, Button, Grid, GridItem, Container, Stack, Icon } from "@chakra-ui/react";
import { FaShoppingCart, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Box as="nav" bg="black" py={4}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Heading as="h1" color="white" size="lg">
              YourBrand
            </Heading>
            <Flex align="center">
              <Button variant="ghost" color="white" mr={4}>
                Shop
              </Button>
              <Button variant="ghost" color="white" mr={4}>
                About
              </Button>
              <Button variant="ghost" color="white">
                Contact
              </Button>
              <Icon as={FaShoppingCart} color="white" ml={8} boxSize={6} />
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Grid templateColumns="repeat(2, 1fr)" gap={8} alignItems="center">
            <GridItem>
              <Heading as="h2" size="2xl" mb={4}>
                Elevate Your Style
              </Heading>
              <Text fontSize="xl" mb={8}>
                Discover our latest collection of trendy and fashionable clothing.
              </Text>
              <Button colorScheme="black" size="lg">
                Shop Now
              </Button>
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1548454782-15b189d129ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwbWFuJTIwaW4lMjBmYXNoaW9uYWJsZSUyMGNsb3RoaW5nfGVufDB8fHx8MTcxMjU2MDExNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Model" borderRadius="md" />
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Featured Products */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Featured Products
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <GridItem>
              <Box borderWidth={1} borderRadius="lg" overflow="hidden">
                <Image src="https://images.unsplash.com/photo-1515734674582-29010bb37906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwc2hpcnR8ZW58MHx8fHwxNzEyNTYwMTE2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product 1" />
                <Box p={6}>
                  <Heading as="h3" size="md" mb={2}>
                    Stylish Shirt
                  </Heading>
                  <Text>$49.99</Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem>
              <Box borderWidth={1} borderRadius="lg" overflow="hidden">
                <Image src="https://images.unsplash.com/photo-1521166226003-6cc5aa8002df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmVuZHklMjBqZWFuc3xlbnwwfHx8fDE3MTI1NjAxMTd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product 2" />
                <Box p={6}>
                  <Heading as="h3" size="md" mb={2}>
                    Trendy Jeans
                  </Heading>
                  <Text>$79.99</Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem>
              <Box borderWidth={1} borderRadius="lg" overflow="hidden">
                <Image src="https://images.unsplash.com/flagged/photo-1553077212-5be90b05a4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb29sJTIwamFja2V0fGVufDB8fHx8MTcxMjU2MDExN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product 3" />
                <Box p={6}>
                  <Heading as="h3" size="md" mb={2}>
                    Cool Jacket
                  </Heading>
                  <Text>$99.99</Text>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* 3D Model Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Experience Our Collection in 3D
          </Heading>
          {/* Add your 3D model component or library here */}
          <Box height="400px" bg="white" borderRadius="md" shadow="md" />
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="black" py={10} color="white">
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Heading as="h2" size="lg">
              YourBrand
            </Heading>
            <Stack direction="row" spacing={6}>
              <Icon as={FaInstagram} boxSize={6} />
              <Icon as={FaTwitter} boxSize={6} />
              <Icon as={FaFacebook} boxSize={6} />
            </Stack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;