import React, { useContext } from 'react'
import { Route, Routes} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/index.js';
import { AuthContext } from '../context/index.js';
import Loader from './UI/Loader/Loader.jsx';
// import About from '../pages/About';
// import Posts from '../pages/Posts';
// import Navigate from '../pages/Error';
// import PostIdPage from '../pages/PostIdPage';


export default function AppRouter() {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>
  }

  return (
      isAuth
      ? <Routes>
          {privateRoutes.map(route => 
            <Route 
              key={route.id}
              element={route.component} 
              path={route.path} 
              exact={route.exact}
            />
          )}
        </Routes>
      
      : <Routes>
          {publicRoutes.map(route => 
            <Route 
              key={route.id}
              element={route.component} 
              path={route.path} 
              exact={route.exact}
            />
          )}
        </Routes>
      
      
    /* <Routes> 
        <Route path="/" element={<Posts/>}/>
        <Route path="/about" element={<About/>}/>
        <Route exact path="/posts" element={<Posts/>}/>
        <Route exact path="/posts/:id" element={<PostIdPage/>}/>
        <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>   */
  )
}

