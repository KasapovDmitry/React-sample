import React, {useEffect, useRef, useState } from 'react';
import '../styles/App.css';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import Botton from '../components/Botton';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/botton/MyButton';
import { usePostrs } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { getPageCount } from '../utilits/pages';
import Pagination from '../components/UI/pagination/Pagination';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../components/UI/select/MySelect';

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''});
  // const [selectedSort, setSelectedSort] = useState('')
  // const [searchQuery, setSearchQuery] = useState('')
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const lastElement = useRef();
  

  // кастомные hooks

  // постраничная навигация
  // const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
  //   const response = await PostService.getAll(limit, page);
  //   setPosts(response.data);
  //   const totalCount = response.headers['x-total-count'];
  //   setTotalPages(getPageCount(totalCount, limit));
  // });

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const sortedAndSearchedPosts = usePostrs(posts, filter.sort, filter.query);

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  })
  
  // useEffect
  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])


  // добавление поста
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // вывод в консоль общее число постов
  const handleClick = () => {
    let count = 0;
    posts.forEach(item => item && count++);
    console.log(`Finished tasks: ${count}`);
  }

  // удаление поста
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  // const changePage = (page) => {
  //   setPage(page)
  //   fetchPosts(limit, page)
  // }
  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>
        GET
      </MyButton>

      <MyButton 
        style={{marginTop: '30px'}}
        onClick={() => setModal(true)}
      >
        Создать пост
      </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0px'}}/>
      
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      <MySelect 
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue={"Кол-во элементов на странице"}
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'Показать всё'},
        ]}
      />
      {postError &&
        <h2>Произошла ошибка ${postError}</h2>
      }

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"}/>
      <div 
        ref={lastElement}
        style={{height: 20, background: 'gray'}}
      >

      </div>


      {isPostsLoading &&
        <div className='loader-wrap'><Loader/></div>
      }
        
      
      
      {/* лоадер с постраничной навигацией */
      /* {isPostsLoading
        ? <div className='loader-wrap'><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"}/>
      } */}
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />

      <Botton clicker={handleClick}/>
    </div>
  );
}

export default Posts;

