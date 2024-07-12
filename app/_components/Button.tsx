'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoHeartSharp } from 'react-icons/io5'

// Define the interface for the props
interface ButtonProps {
    text: string;
    push?: string;
    handleSubmit?: () => void;
}

const Button: React.FC<ButtonProps>= ({
    text,
    push,
    handleSubmit=null
}) => {
    const Router = useRouter();

    return (
        <button
        onClick={()=>{push && Router.push(push)}}
            type="button"
            className=" border-2 py-2 px-4 w-full  rounded-full text-2xl lg:text-3xl flex gap-4 justify-center items-center bg-primary leading-loose text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 "
            data-twe-ripple-init
            data-twe-ripple-color="light">
            <IoHeartSharp size={20} />
            {text}
            <IoHeartSharp size={20} />
       
        </button>
    )
}

export default Button