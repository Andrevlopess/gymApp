import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stat, Text, Button, Stack, Heading } from '@chakra-ui/react'
import { BiHeading } from 'react-icons/bi'
import { exercises } from '../../Contexts/Exercises'

const LikedExCard = () => {
    return (
    
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image src={exercises.gifUrl}/>
                    

            <Stack>
                <CardBody>
                    <Heading size='md'></Heading>

                    <Text py='2'>
                        Caffè latte is a coffee beverage of Italian origin made with espresso
                        and steamed milk.
                    </Text>
                </CardBody>

                <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        Buy Latte
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}

export default LikedExCard