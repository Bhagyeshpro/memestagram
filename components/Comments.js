import { collection, onSnapshot, orderBy, query,} from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Comment from "../components/Comment"

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
 
  // Get Comments
  useEffect(() => onSnapshot(query(collection(db, "posts", postId, "comments"),
    orderBy("timestamp", "desc")), snapshot => { setComments(snapshot.docs) })
  [db, postId])
  
  // console.log(commentId);
  // useEffect(() => 
  //   onSnapshot(query(collection(db, "posts", postId, "comments", commentId, "likes")), 
  //   snapshot => setLikesComment(snapshot.docs)))

  // useEffect(() => 
  //   setHasLikedComment(
  //     likes
  //   )
  // )

  // console.log(comments);
  // console.log(session?.user?.uid);


  return (
      <div className='ml-4 h-29 max-h-20 overflow-y-scroll scrollbar-thumb-white scrollbar-thin'>
      {comments.map((comment) => (
        <Comment
          postId={postId}
          key={comment.id}
          commentId={comment.id}
          comment={comment.data().comment}
          userImage={comment.data().userImage}
          timestamp={comment.data().timestamp}
          uniqueId={comment.data().uniqueId}
          userName={comment.data().username}
        />
      ))}
           
    </div>

  )
}

export default Comments