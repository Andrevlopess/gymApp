import { Box, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const CardSkeleton = () => {
    return (
        <Box padding='6' boxShadow='lg' bgColor='layoutBg' borderRadius='5px'>
            <Skeleton height='200px'  fadeDuration={3}/>
            <SkeletonText mt='4' noOfLines={3} spacing='4' skeletonHeight='2'  fadeDuration={3}/>
            <SkeletonText mt='15' noOfLines={3} spacing='4' skeletonHeight='2' fadeDuration={3}/>
        </Box>
    )
}

export default CardSkeleton