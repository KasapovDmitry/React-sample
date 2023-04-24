import About from '../pages/About';
import Posts from '../pages/Posts';
import Login from '../pages/Login';
import Navigate from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';

export const privateRoutes = [
    {id: 1, path: '/', component: <Posts/>, exact: true},
    {id: 2, path: '/about', component: <About/>, exact: true},
    {id: 3, path: '/posts', component: <Posts/>, exact: true},
    {id: 4, path: '/posts/:id', component: <PostIdPage/>, exact: true},
    {id: 5, path: '/error', component: <Navigate to="/error" replace />, exact: true}
]

export const publicRoutes = [
    {id: 1, path: '/login', component: <Login/>, exact: true},
    {id: 3, path: '*', component: <Login to="/login" replace/>, exact: true}
]