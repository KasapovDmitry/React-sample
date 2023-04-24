import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

export default function PostIdPages() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching( async (id) => {
    const responsId = await PostService.getById(id)
    setPost(responsId.data);
  });
  const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
    const responsComment = await PostService.getCommentsByPostId(id)
    console.log(responsComment.data);
    setComments(responsComment.data);
  });
  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
        <h2>Вы на детальной странице поста с ID = {params.id}</h2>
        {isLoading
          ? <Loader />
          : <div>{post.id}. {post.title}</div>
        }
        <h2>Комментарии</h2>
        {isComLoading
          ? <Loader />
          : <div>
            {comments.map(comm => 
              <div style={{marginTop: "20px"}} key={comm.id}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
              </div>
            )}
          </div>
        }
    </div>
  )
}

 