import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { FilterContext } from '../Contexts/FilterContext'

const FilterTag = ({filter}) => {

  const {removeFilter} = useContext(FilterContext)

  const handleRemoveFilter = () => {
    removeFilter(filter)
  }

  return (
    <Tag
      borderRadius='full'
      variant='solid'
      bgColor='textDistact'
      p='10px'
      float='left'
    >
      <TagLabel>{filter}</TagLabel>
      <TagCloseButton onClick={handleRemoveFilter}/>
    </Tag>
  )
}

export default FilterTag