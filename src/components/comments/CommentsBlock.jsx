// cia itraukti newComment, ListComments komponentus
import React, { useEffect, useState } from 'react';
import NewComment from './NewComment';
import ListComments from './ListComments';
import './commentBlock.scss'
import { collection, doc, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase/firebase';



function CommentsBlock({ postId }) {

  const [commentsArr, setCommentsArr] = useState([]);

  useEffect(() => {
    async function getCommentsAboutPost() {
      // reference to a post
      const docRef = doc(db, 'posts', postId);
      // reference to collection inside post
      const commentsCollRef = collection(docRef, 'comments');
      // Create a query against the collection.
      const q = query(commentsCollRef);
      // query returns comments
    //   execute query
      const querySnapshot = await getDocs(q);
      const tempComments = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
        tempComments.push({
            uid: doc.id,
            ...doc.data(),
          });
        // sudeti tempComments
        console.log('tempComments ===', tempComments);
      });
      setCommentsArr(tempComments)
    }
    getCommentsAboutPost()
  }, []);
  console.log('postId ===', postId);
  return (
    <div className='commentBlock'>
      <NewComment />
      {commentsArr.map((cObj) => (
          <ListComments key={cObj.uid} item={cObj}/>

      ))}

    </div>
  );
}

export default CommentsBlock;
