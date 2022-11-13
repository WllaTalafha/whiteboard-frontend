import React, { useContext, useEffect } from 'react';
import { When } from 'react-if';
import { Navigate } from 'react-router-dom';
import { authContext } from '../contexts/AuthProvider';
import cookies from 'react-cookies';
import AddPostForm from './AddPostForm';
import PostHolder from './PostHolder';
import { dataContext } from '../contexts/DataProvider';
import { Text, VStack, Input, Box } from "@chakra-ui/react";


function Main() {
  const { isAuth, setIsAuth } = useContext(authContext);
  const { posts, getPosts, refreshMain } = useContext(dataContext);

  useEffect(() => {
    const token = cookies.load('token');
    if (token) {
      setIsAuth(true);
      getPosts();
    }
  }, [refreshMain]);

  return (
    <>
      <When condition={isAuth}>
        <main className='main'>
          <div className='input'>
            <AddPostForm />
          </div>
          <Box
            p='20px'
            bg='gray.50'
            color='gray.50'
            border='8px'
            display='flex'
            alignItems="center"
            justifyContent="center"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="3xl"
            fontWeight="extrabold"

          >
            {posts.map((post, index) => <PostHolder post={post} key={index} />)}
          </Box>
        </main>
      </When>
      <When condition={!isAuth}>
        <Navigate to='/login' />
      </When>
    </>
  )
}

export default Main