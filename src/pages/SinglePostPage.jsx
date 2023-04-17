import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/ui/card/Card";
import CommentsBlock from "../components/comments/CommentsBlock";
// import SinglePost from "../components/posts/SinglePost";


function SinglePostPage() {
  // gauti id is parametru
  // parsisiusti posta is posts
  const { postUid } = useParams()
  const [postObj, setPostObj] = useState({})
  const navigate = useNavigate()
  

    useEffect(() => {
      async function getSingleDoc() {
        const docRef = doc(db, "posts", postUid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setPostObj(docSnap.data())
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }
      getSingleDoc()
      }, [])


    return (
      <div className="container">
        <Card>
          <h1>{postObj.title}</h1>
          <p>This is SinglePostPage</p>
        
          <button onClick={() => navigate(-1)}>Go back</button>

        </Card>
        {/* comments block */}
        <CommentsBlock postId={postUid} />
      </div>
    );
}

export default SinglePostPage
