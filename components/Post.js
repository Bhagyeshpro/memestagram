import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  BookmarkIcon,
  BookOpenIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon
} from "@heroicons/react/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import { useSession } from 'next-auth/react'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore'
import { db, storage } from '../firebase'
import Moment from 'react-moment'


function Post({ id, username, caption, userImg, img }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  // Get Comments from firestore
  useEffect(() =>
    onSnapshot(query(collection(db, "posts", id, "comments"), orderBy("timestamp", "desc")), snapshot => {
      setComments(snapshot.docs)
    })
    [db, id]);

  useEffect(() =>
    onSnapshot(query(collection(db, "posts", id, "likes")),
      snapshot => setLikes(snapshot.docs)),
    [db, id])


  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session?.user?.uid))
    } else {
      await setDoc(doc(db, "posts", id, "likes", session?.user?.uid), {
        username: session?.user?.username,
      })
    }
  }

  useEffect(() =>
    setHasLiked(
      likes.findIndex((like) => (like.id === session?.user?.uid)) !== -1
    ),
    [likes])


  const sendComment = async (e) => {

    // Helps page comment without refreshing the page
    e.preventDefault()

    const sendToComment = comment;
    console.log(comment);
    setComment("");

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: sendToComment,
      username: session?.user?.username,
      userImage: session?.user?.image,
      timestamp: serverTimestamp(),
    });
  }




  return (
    <div className='bg-black my-2 border border-black rounded-sm'>
      {/* Header */}
      <div className='flex items-center p-3'>
        <div className='w-10 h-10 relative'>
          <Image
            src={userImg}
            alt='Profile Pic'
            layout='fill'
            objectFit='cover'
            className='rounded-full p-[1px] border-red-500 border-2 object-contain
           cursor-pointer'
          />
        </div>

        {/* <img src={userImg}
          className='h-10 w-10 border p-1 mr-3 object-contain rounded-full cursor-pointer'
        /> */}
        <p className='text-white ml-4 flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='btn' />
      </div>

      {/*Img */}
      <img
        onDoubleClick={likePost}
        src={img}
        alt='Profile Pic'
        className='object-cover w-full'
      />

      {/* Buttons */}
      {session && (
        <div className='flex justify-between px-3 pt-3'>
          <div className='flex space-x-3'>
            {hasLiked ? (
              <HeartIconFilled className="btn text-red-500" onClick={() => likePost()} />
            ) : (
              <HeartIcon onClick={() => likePost()} className='btn' />
            )}
            <ChatIcon className='btn' />
            <PaperAirplaneIcon className='btn' />
          </div>
          <BookmarkIcon className='btn' />
        </div>
      )}

      {/* Caption*/}
      {/* <p className='flex p-3 truncate'>
        {likes.length > 0 && (
          <p className='font-bold mb-1 text-white' >{likes.length}</p>
        ) }
        <span className='text-white font-bold text-sm'>{username} </span>
        <p className='text-white truncate ml-2 text-sm'>{caption}</p>
      </p> */}
      <p className="p-4 truncate">
        {likes.length > 0 && (
          <p className='font-bold mb-1 text-white'>{likes.length} likes</p>
        )}
        <div className='flex'>
          <span className="font-bold mr-1 text-white" >{username}</span> <p className='text-white flex-1'>{caption}</p>
        </div>
      </p>

      {/* Comments */}
      {comments.length > 0 && (
        <div className='ml-4 h-29 max-h-20 overflow-y-scroll scrollbar-thumb-white scrollbar-thin'>
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-2 mr-6">
              <div className='w-8 h-8 items-center relative'>
                <Image
                  src={comment.data().userImage}
                  alt='Profile Pic'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-full p-[1px] border-red-500 border-2 object-contain
          hover:scale-110 cursor-pointer transform transition duration-200 ease-out'
                />
              </div>
              {/* <img src={comment.data().userImage} alt="" className="h-7 mt-1 rounded-full " /> */}
              <div className='flex items-center flex-1'>
                <div className='flex flex-col flex-1'>
                  <div className='flex flex-1 flex-row items-center space-x-2'>
                    <p className='text-sm flex-1 text-white'>
                      <span className='font-bold'>{comment.data().username}
                      </span>{" "}
                      {comment.data().comment}
                    </p>
                  </div>
                  <div className='flex items-center'>
                    <Moment fromNow className='pr-3 text-xs text-gray-400'>
                      {comment.data().timestamp?.toDate()}
                    </Moment>
                  </div>
                </div>
              </div>
              {/* <div className='flex flex-col items-center'>
                <HeartIcon className='iconComment' />
                <p className='text-xs text-gray-400 mt-[1.5px]'>7</p>
              </div> */}
            </div>
          ))}

        </div>
      )}

      {/* Input */}
      {session && (
        <form className='flex items-center p-3'>
          <EmojiHappyIcon className='btn' />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text" className='border-none focus:ring-0 flex-1 outline-none
          mx-3 bg-black text-white'
            placeholder='Enter Your Comment...'
          />
          <button
            type='submit'
            onClick={sendComment}
            disabled={!comment.trim()}
            className='text-blue-400 font-semibold'>Post</button>
        </form>
      )}

    </div>
  )
}

export default Post