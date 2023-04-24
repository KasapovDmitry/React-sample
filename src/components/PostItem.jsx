import React from 'react'
import MyButton from './UI/botton/MyButton';
import { useNavigate } from 'react-router-dom';

export default function PostItem( props ) {
  const navigate = useNavigate();

  return (
    <div className='post'>
    <div className='post__content'>
      <strong>{props.post.id}. {props.post.title}</strong>
      <div>
        {props.post.body}
      </div>
    </div>
    <div className='post__btns'>
      <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
        Cмотреть
      </MyButton>
      <MyButton onClick={() => props.remove(props.post)}>
        Удалить
      </MyButton>
    </div>
    
  </div>
  )
}

