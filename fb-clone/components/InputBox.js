import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from "@heroicons/react/solid"
import { useRef, useState } from 'react';
import { db, storage } from '../firebase';
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import { uploadString, ref } from '@firebase/storage';



function InputBox() {
    const filePickerRef = useRef(null)
    const [ImageToPost, setImageToPost] = useState(null);
    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);

        }
    }
    const removeImage = () => {
        setImageToPost(null)
    }
    const { data: session } = useSession();
    const sendPost = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;
        addDoc(collection(db, "post"), {
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            time: serverTimestamp(),

        });
        if (ImageToPost) {
            const postRef = ref(storage, `post/123`)
            uploadString(postRef, ImageToPost, 'base64').then((snapshot) => {
                console.log('Uploaded a base64 string!');
            });
        }
        inputRef.current.value = "";

    };
    const inputRef = useRef(null);
    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image
                    className="rounded-full"
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <form className="flex flex-1">
                    <input className="rounded-full bg-gray-100 h-12  flex-grow px-5 focus:outline-none"
                        type="text"
                        placeholder={`what's on your mind,${session.user.name}`}
                        ref={inputRef} />
                    <button hidden type="submit" onClick={sendPost}>Submit</button>
                </form>
                {ImageToPost && (
                    <div className="flex flex-col filter hover:brightness-110
                    transition duration-150 transform hover:scale-105 cursor-pointer" onClick={removeImage}>
                        <img className="h-10 object-contain" src={ImageToPost} />
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}
            </div>

            <div className="flex  justify-evenly border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>

                <div onClick={() => filePickerRef.current.click()} className="inputIcon">
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                    <input ref={filePickerRef} onChange={addImageToPost} type="file" hidden />
                </div>

                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300" />
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>

            </div >


        </div >
    )
}

export default InputBox
