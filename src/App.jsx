import './styles/reset.css';
import './styles/App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/layout/Header';
import Feedback from './components/ui/feedback/Feedback';
import PostsPage from './pages/PostsPage';
import AddPostPage from './pages/AddPostPage';
import { useAuthCtx } from './store/AuthProvider';

function App() {
  const { isLoggedIn } = useAuthCtx()
  return (
    <div className="">
      <Header />
      <Feedback />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={ <LoginPage />} />
        <Route path="/profile" element={isLoggedIn && <ProfilePage />} />
        <Route path="/posts" element={isLoggedIn && <PostsPage />} />
        <Route path="/posts/new" element={isLoggedIn && <AddPostPage />} />
      </Routes>
    </div>
  );
}
export default App;
