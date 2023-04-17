import React from 'react';
import NewPostForm from '../components/posts/NewPostsForm';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';

function AddPost() {
  // naviguoti i posts jei sekmignai sukurtas posts
  const navigate = useNavigate()
  const { ui, postCreated } = useAuthCtx()
  
  async function createPostFire(newPostObj) {
    // ui.showLoading()
    
    try {
      const docRef = await addDoc(collection(db, 'posts'), newPostObj);
      console.log('Document written with ID: ', docRef.id);
      navigate('/posts')
      
    } catch (e) {
      console.error('Error adding document: ', e);
      ui.showAlert()
    }
  }

  return (
    <div className="container">
      <h1>Add Post</h1>
      {postCreated && <Navigate to={'/posts'} /> }
      <NewPostForm onNewPost={createPostFire} />
    </div>
  );
}

export default AddPost;
