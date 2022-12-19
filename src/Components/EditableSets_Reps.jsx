import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    useEditableControls,
    ButtonGroup,
    IconButton,
    Flex,
    Input,
} from '@chakra-ui/react'
import { useState } from 'react'
import { BiCheck, BiX } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'

function RepsAndSets() {

    const [reps, setReps] = useState()


    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
            <ButtonGroup justifyContent='center' size='sm'>
                <IconButton
                    border='none'
                    variant='outline'
                    icon={<BiCheck color='#00ADB5' size={30} />} {...getSubmitButtonProps()} />

                <IconButton
                    border='none'
                    variant='outline'
                    icon={<BiX color='#00ADB5' size={30} />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent='center'>

                <IconButton
                    border='none'
                    size='sm'
                    variant='outline'
                    icon={<FiEdit color='#00ADB5' />} {...getEditButtonProps()} />
            </Flex>
        )
    }

    return (
        <Editable
            textAlign='center'
            fontSize='md'
            defaultValue='Sets/Reps'
            isPreviewFocusable={false}
        >
            <Flex alignItems='center'>
                <EditablePreview />

                <Input
                    as={EditableInput}
                    w='100px'
                    mx='10px' 
                    maxLength={6}
                    onChange={(e) => setReps(e.target.value)}/>
                <EditableControls/>
            </Flex>

        </Editable>
    )
}

export default RepsAndSets