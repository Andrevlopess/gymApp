import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import React from 'react'

const FilterTag = ({filter}) => {

  return (
    <Tag
      borderRadius='full'
      variant='solid'
      colorScheme='green'
    >
      <TagLabel>{filter}</TagLabel>
      <TagCloseButton />
    </Tag>
  )
}

export default FilterTag