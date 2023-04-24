import React from 'react'
import PostItem from './PostItem';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

export default function PostList({posts, title, remove}) {

  if(!posts.length) {
    return (
      <h2 style={{textAlign: 'center'}}>Посты не найдены!</h2>
    )
  }
//npm install react-transition-group --save
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>
            {title}
        </h1>
        
        <TransitionGroup>
          {posts.map((post, index) => 
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >
              <PostItem remove={remove} number={index + 1} post={post}/>
            </CSSTransition>
          )}
        </TransitionGroup>
    </div>
    
  )
}

