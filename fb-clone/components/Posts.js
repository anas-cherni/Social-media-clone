import React from 'react'
import { collection, query } from 'firebase/firestore';
import { db } from "../firebase.js"
import { onSnapshot, where } from "firebase/firestore";
import { useCollectionOnce, useCollection } from 'react-firebase-hooks/firestore';
import Post from './Post.js';

function Posts() {
    const q = query(collection(db, "post"), where("image", "!=", "a"))
    const [snapshot] = useCollection(q);
    //console.log("snap tst :", snapshot)

    return (
        <div>
            {snapshot && (
                <span>
                    {snapshot.docs.map((doc) => (
                        < Post
                            key={doc.id}
                            name={doc.data().name}
                            message={doc.data().message}
                            time={doc.data().time}
                            image={doc.data().image}
                        />

                    ))}
                </span>
            )}


        </div>
    )
}


export default Posts
