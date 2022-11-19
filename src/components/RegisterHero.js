import React, { useContext } from 'react';
import { Text, Box } from "@chakra-ui/react";
import { authContext } from '../contexts/AuthProvider';


function RegisterHero() {
  const { goToSignUp } = useContext(authContext);
  return (
    <Box
      p='50px'
      
      display='flex'
      alignItems="center"
      justifyContent="center"
    >
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold" 
        display='flex'
        alignItems="center"
        justifyContent="center"
      >Don't have an account > <a onClick={goToSignUp}> >  SignUp</a> </Text>
    </Box>
  )
}

export default RegisterHero