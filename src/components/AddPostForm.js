import React, { useContext } from 'react';
import { dataContext } from '../contexts/DataProvider';
import { Text, VStack, Input, Box } from "@chakra-ui/react";

function AddPostForm() {

  const { addPost } = useContext(dataContext);
  return (
    <Box
      p='20px'
      bg='inhret'
      color='gray.50'
      border='8px'
      display='flex'
      alignItems="center"
      justifyContent="center"

    >
      <form onSubmit={addPost}>
        <VStack
          w='700px'
        >
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="2xl">what is in your mind</Text>
          <Input placeholder='Title' name='title' required _placeholder={{ opacity: 0.8, color: 'blue' }} bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text" />
          <Input placeholder='Content' name='content' required _placeholder={{ opacity: 0.8, color: 'blue' }} bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text" />
          <Input type='submit' value='Share' _placeholder={{ opacity: 0.8, color: 'blue' }} color='blue' bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text" />
        </VStack>
      </form>
    </Box>
  )
}

export default AddPostForm;