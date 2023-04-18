// cia itraukti newComment, ListComments komponentus
import React, { useEffect, useState } from 'react';
import NewComment from './NewComment';
import ListComments from './ListComments';
import './commentBlock.scss'
import { addDoc, collection, doc, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { toast } from 'react-hot-toast';



function CommentsBlock({ postId }) {

  const [commentsArr, setCommentsArr] = useState([]);
  const [commentsCollRef, setCommentsCollRef] = useState({})
  const [commentTrigger, setCommentTrigger] = useState(false)

  useEffect(() => {
    async function getCommentsAboutPost() {
      // reference to a post
      const docRef = doc(db, 'posts', postId);// reference to collection inside post
      
      const commentsCollRef = collection(docRef, 'comments');
      setCommentsCollRef(commentsCollRef)

      // Create a query against the collection.

      const q = query(commentsCollRef); // query returns comments
     
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
      });
      console.log('tempComments ===', tempComments);
      setCommentsArr(tempComments)
    }
    getCommentsAboutPost()
  }, [commentTrigger]);
  console.log('postId ===', postId);

  async function addNewCommentOnFire(newCommentObj) {
    console.log('newCommentObj ===', newCommentObj);
    try {
      const result = await addDoc(commentsCollRef, newCommentObj)
      console.log('result ===', result);
      toast.success('comment added')
      setCommentTrigger(!commentTrigger)
    } catch (error) {
      console.warn('error ===', error);
    }
  }
  return (
    <div className='commentBlock'>
      <NewComment onNewComment={addNewCommentOnFire} />
      
          <ListComments items={commentsArr}/>

      

    </div>
  );
}

export default CommentsBlock;
