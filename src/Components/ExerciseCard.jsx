import { Avatar, Badge, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Highlight, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { body } from '../Icons/body.png'

const ExerciseCard = ({ exercise }) => {
  return (
    <div>
      <Card color='textDistact' boxShadow='2xl' border='1px' borderColor='gray.200'>
        <CardHeader display='flex' justifyContent='space-between' alignItems='flex-start'>
          <Heading size='md'>{exercise.name}</Heading>
          <Badge>{exercise.target}</Badge>
        </CardHeader>
        <CardBody>

        </CardBody>
        <Image src={exercise.gifUrl} minW='100px' objectFit='cover' />
        <CardFooter display='flex' justifyContent='space-evenly' alignItems='center'>
          <Highlight
            query={exercise.equipment}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'lightBlue' }}
          >
            {exercise.equipment}
          </Highlight>
          <Divider orientation='vertical' h='25px' />
          <Highlight
            query={exercise.bodyPart}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'lightBlue' }}
          >
            {exercise.bodyPart}
          </Highlight>
        </CardFooter>

      </Card>
    </div>
  )
}

export default ExerciseCard