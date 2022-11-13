import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import CommentModal from './CommentModal';
import UpdateModal from './UpdateModal';
import { dataContext } from '../contexts/DataProvider';
import { When } from 'react-if';
import cookies from 'react-cookies';
import { FaWrench, FaTimes } from 'react-icons/fa';
import { authContext } from '../contexts/AuthProvider';
import { Text, VStack, Input, Box } from "@chakra-ui/react";

function PostHolder({ post }) {
  const { deletePost } = useContext(dataContext);
  const { canDo } = useContext(authContext);
  const [modalShow, setModalShow] = useState(false);
  const [updateModalShow, setUpdateModalShow] = useState(false);
  return (
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
      <div className='PostHolder'>
        <div className='PostHolderTop'>
          <h4 className='PostOwner'>{post.user.username}</h4>
          <div className='editAndRemove'>
            <When condition={(cookies.load('role') === 'admin' || ((canDo() && (cookies.load('_id') === `${post.userId}`))))}>
              <Input type='submit' value='update' onClick={() => { setUpdateModalShow(true) }} _placeholder={{ opacity: 0.8, color: 'blue' }} color='blue' bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text" />
            </When>
            <When condition={(cookies.load('role') === 'admin' || ((canDo() && (cookies.load('_id') === `${post.userId}`))))}>
              <Input type='submit' value='delete' onClick={() => { deletePost(post.id) }} _placeholder={{ opacity: 0.8, color: 'blue' }} color='blue' bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text" />
            </When>
          </div>
        </div>
        <div className='PostHolderMid'>
          <p className='title'>{post.title}</p>
          <p className='content'>{post.content}</p>
        </div>
        <div className='PostHolderBot'>
          <Button id='btn' onClick={() => { setModalShow(true) }} >Comments</Button>
        </div>
      </div>
      <CommentModal show={modalShow} post={post} onHide={() => setModalShow(false)} />
      <UpdateModal show={updateModalShow} post={post} onHide={() => setUpdateModalShow(false)} />
    </Box>
  )
}

export default PostHolder