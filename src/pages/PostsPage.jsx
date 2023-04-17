import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import '../components/posts/post.scss';
import { useAuthCtx } from '../store/AuthProvider';

function PostsPage() {
   const { ui } = useAuthCtx()
  const [postsArr, setPostsArr] = useState([]);

  useEffect(() => {
    async function getPosts() {
      // norim gauti postus is firebase
      ui.showLoading()
      try {
        const querySnapshot = await getDocs(collection(db, 'posts'));
        const tempPosts = [];
        querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data()}`);
          // console.log('doc.data() ===', doc.data());
          tempPosts.push({
            uid: doc.id,
            ...doc.data(),
          });
         
        });
        console.log('tempPosts ===', tempPosts);
        setPostsArr(tempPosts);
      } catch (error) {
        console.log('getPosts', error.code, error.message);
        ui.showError('Tik registruotiems vartotojams')
      }
    }
    getPosts();
  }, []);

  return (
    <div className="container">
      <h1>Posts Page</h1>
      <p>This is Posts Page</p>
      {/* map over postsArr and display title and body */}
      <div className="postContainer">
        <ul className="posts">
          {postsArr.map((pObj) => (
            <li className="onePost" key={pObj.uid}>
              <h3>{pObj.title}</h3>
              <p>{pObj.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostsPage;
