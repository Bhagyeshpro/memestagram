import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Post from "../components/Post"
import { db, storage } from '../firebase';

// const posts = [
//   {
//     id: "123",
//     username: "hollywoodoffensive",
//     userImg: "https://images.unsplash.com/photo-1634254773966-6f47548d7c12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmxhbWV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     img: "https://images.pexels.com/photos/556662/pexels-photo-556662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     caption: "Memes Beyond Your Imagination"
//   },
//   {
//     id: "123",
//     username: "hollywoodoffensive",
//     userImg: "https://images.unsplash.com/photo-1634254773966-6f47548d7c12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmxhbWV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     img: "https://images.pexels.com/photos/556662/pexels-photo-556662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     caption: "Memes Beyond Your Imagination"
//   },
//   {
//     id: "123",
//     username: "hollywoodoffensive",
//     userImg: "https://images.unsplash.com/photo-1634254773966-6f47548d7c12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmxhbWV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     img: "https://images.pexels.com/photos/556662/pexels-photo-556662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     caption: "Memes Beyond Your Imagination"
//   }
// ]

function Posts() {
  const [posts, setPosts] = useState([]);


  useEffect(() =>

    onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), snapshot => {
      setPosts(snapshot.docs);
    }),
    [db])

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>

  )
}

export default Posts