import { collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';
import { db } from '../firebase';
import { HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

function Comment({ postId, commentId, comment, userImage, uniqueId, userName, timestamp }) {
    const { data: session } = useSession()
    const [likesComment, setLikesComment] = useState([]);
    const [hasLikedComment, setHasLikedComment] = useState(false);
    // const [timestamp, setTimestamp] = useState("")

    // comment likes

    useEffect(() =>
        onSnapshot(query(collection(db, "posts", postId, "comments", commentId, "likes")),
            snapshot => setLikesComment(snapshot.docs)),
        [db, postId])



    const likeComment = async () => {
        if (hasLikedComment) {
            await deleteDoc(doc(db, "posts", postId, "comments", commentId, "likes", session?.user?.uid))
        } else {
            await setDoc(doc(db, "posts", postId, "comments", commentId, "likes", session?.user?.uid), {
                username: session?.user?.username,
            })
        }
    }




    const deleteComment = async () => {
        await deleteDoc(doc(db, "posts", postId, "comments", commentId));
        // console.log(commentId); 
    }

    useEffect(() => {
        setHasLikedComment(
            likesComment.findIndex((like) => (like.id === session?.user?.uid)) !== -1
        )
    }, [likesComment])

    return (
        <div>
            <div key={commentId} className="flex space-x-2 mb-2 mr-6">
                <div className='w-8 h-8 items-center relative mt-[1.5px]'>
                    <Image
                        src={userImage}
                        alt='Profile Pic'
                        layout='fill'
                        objectFit='cover'
                        className='rounded-full p-[1px] border-red-500 border-2 object-contain
          hover:scale-110 cursor-pointer transform transition duration-200 ease-out'
                    />
                </div>
                <div className='flex items-center flex-1'>
                    <div className='flex flex-col flex-1 '>
                        <div className='flex flex-1 flex-row items-center space-x-2'>
                            <p className='text-sm flex-1 text-white'>
                                <span className='font-bold'>{userName}
                                </span>{" "}
                                {comment}
                            </p>

                        </div>

                        <div className='flex items-center'>
                            <Moment fromNow className='pr-3 text-xs text-gray-400'>
                                {timestamp?.toDate()}
                            </Moment>
                            {session?.user?.uid === uniqueId &&
                                <div className='flex items-center cursor-pointer'>
                                    <p onClick={() => deleteComment()} className='text-gray-400 text-xs'>Delete</p>
                                </div>}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-[1px] justify-center '>
                    {hasLikedComment ? (
                        <HeartIconFilled className='iconComment text-red-500' onClick={() => likeComment(commentId)} />
                    ) : (
                        <HeartIcon onClick={() => likeComment(commentId)} className='iconComment' />
                    )}
                    {likesComment.length > 0 && (
                        <p className='text-gray-400 text-xs font-thin ml-[-2px]'>{likesComment.length}</p>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Comment