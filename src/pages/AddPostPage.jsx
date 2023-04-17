import React from 'react';
import NewPostForm from '../components/posts/NewPostsForm';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useAuthCtx } from '../store/AuthProvider';
import { Navigate } from 'react-router-dom';

function AddPost() {
  const { ui, postCreated } = useAuthCtx()
  
  async function createPostFire(newPostObj) {
    ui.showLoading()
    
    try {
      const docRef = await addDoc(collection(db, 'posts'), newPostObj);
      console.log('Document written with ID: ', docRef.id);
      ui.showSuccess();
      
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
