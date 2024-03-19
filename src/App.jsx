import {Routes, Route} from 'react-router-dom'
import PostsPage from "./pages/PostsPage.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import Layout from "./components/Layout.jsx";
import SinglePostPage from "./pages/SinglePostPage.jsx";
import './App.css'


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='posts' element={<PostsPage/>}/>
                    <Route path='posts/:postId' element={<SinglePostPage/>}/>
                    <Route path='create' element={<CreatePost/>}/>

                    <Route path='*' element={<h4>Ошибка 404: Такой страницы не существует</h4>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App