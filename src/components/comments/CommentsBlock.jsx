// cia itraukti newComment, ListComments komponentus
import React, { useEffect, useState } from 'react';
import NewComment from './NewComment';
import ListComments from './ListComments';
import { db } from '../../firebase/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import { query } from 'express';

function CommentsBlock({ postId }) {
  const [commentsArr, setCommentsArr] = useState([]);
  useEffect(() => {
    async function getCommentsAboutPost() {
      // reference to a post
      const docRef = doc(db, 'posts', postId);
      // reference to collection inside post
      const commentsCollRef = collection(docRef, 'comments');
      // query
      // Create a query against the collection.
      const q = query(commentsCollRef);
      // query returns comments
    //   execute query
      const querySnapshot = await getDocs(q);
      const tempComments = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
        // sudeti tempComments
      });
      setCommentsArr(tempComments)
    }
    getCommentsAboutPost()
  }, []);
  console.log('postId ===', postId);
  return (
    <div>
      <NewComment />
      {commentsArr.map((cObj) => (
          <ListComments />

      ))}
    </div>
  );
}

export default CommentsBlock;
