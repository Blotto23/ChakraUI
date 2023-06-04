import { Box, Button, Center, Text } from '@chakra-ui/react';

const Header = () => {
    const imageUrl = import.meta.env.BASE_URL + 'images/imagen.jpg';

    return (
        <>
            <Box
                bg={`url(${imageUrl})`}
                bgSize="center"
                bgPosition="center"
                height="40vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Center flexDirection="column" textAlign="center">
                    <Text fontSize="30px" fontWeight="thin" color="white">
                        DOMINA EL TERRENO
                    </Text>
                    <Box mt={4}>
                        <Button
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            backgroundColor="transparent"
                            color="white"
                            _hover={{ backgroundColor: 'white', color: 'blue.500' }}
                            borderWidth="1px"
                            borderColor="white"
                            width="150px"
                            height="30px"
                            mr={2}
                            _focus={{ boxShadow: 'none' }}
                        >
                            VER DETALLES
                        </Button>
                        <Button
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            backgroundColor="transparent"
                            color="white"
                            _hover={{ backgroundColor: 'white', color: 'blue.500' }}
                            borderWidth="1px"
                            borderColor="white"
                            width="150px"
                            height="30px"
                            _focus={{ boxShadow: 'none' }}
                        >
                            VER VIDEO
                        </Button>
                    </Box>
                </Center>
            </Box>
            <Box
                bg={`url(${imageUrl})`}
                bgSize="cover"
                bgPosition="center"
                height="40vh"
                width="25%"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Center flexDirection="column" textAlign="center">
                    <Text fontSize="25px" fontWeight="thin" color="white">
                        DOMINA EL TERRENO
                    </Text>
                    <Box mt={4}>
                        <Button
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            backgroundColor="transparent"
                            color="white"
                            _hover={{ backgroundColor: 'white', color: 'blue.500' }}
                            borderWidth="1px"
                            borderColor="white"
                            width="150px"
                            height="30px"
                            mr={2}
                            _focus={{ boxShadow: 'none' }}
                        >
                            VER DETALLES
                        </Button>
                        <Button
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            backgroundColor="transparent"
                            color="white"
                            _hover={{ backgroundColor: 'white', color: 'blue.500' }}
                            borderWidth="1px"
                            borderColor="white"
                            width="150px"
                            height="30px"
                            _focus={{ boxShadow: 'none' }}
                        >
                            VER VIDEO
                        </Button>
                    </Box>
                </Center>
            </Box>
        </>
    );
};

export default Header;
