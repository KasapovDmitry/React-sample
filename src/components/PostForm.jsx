import React, { useState } from 'react'
import MyButton from './UI/botton/MyButton';
import MyInput from './UI/input/MyInput';

export default function PostForm({create}) {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
           ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''});
       }
  return (
    <form>
        <MyInput 
          value={post.title}
          placeholder={'Заголовок поста'}
          type={"text"}
          onChange={e => setPost({...post, title: e.target.value}) }
        />
        <MyInput 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value}) }
          placeholder={'Текст поста'}
          type={"text"}
        />

        <MyButton onClick={addNewPost}>
          Создать пост
        </MyButton>
      </form>
  )
}

