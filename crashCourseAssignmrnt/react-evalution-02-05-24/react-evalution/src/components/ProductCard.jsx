import { Box, Button, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({title, category, price}) => {
  return (
    <Card mt={4}>
      
    <CardHeader>
      <Heading color="blue.200" size='md'>Each Product</Heading>
    </CardHeader>
  
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
          Title
          </Heading>
          <Text pt='2' fontSize='sm'>
             {title}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
          Category
          </Heading>
          <Text pt='2' fontSize='sm'>
            {category}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
          Price
          </Heading>
          <Text pt='2' fontSize='sm'>
             {price}
          </Text>
        </Box>
        
        <Button variant="outline" colorScheme='teal'>More Details</Button>
      
      </Stack>
    </CardBody>
  </Card>
  )
}

export default ProductCard
