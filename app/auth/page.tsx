'use client'
import React from 'react'
import Button from '../_components/Button'
import { supabaseBrowser } from '@/lib/supabase/browser'
import { IoMdHeart } from 'react-icons/io'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ["latin"] });

const page = () => {

    const handleLoginWithOAuth = async () => {
        const supabase = supabaseBrowser();

        const data = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo:location.origin + `/auth/callback?next=/generate` }
        })
    }

    return (

        <div className={`relative bg-white w-full h-screen flex items-center justify-center flex-col gap-10 ${inter.className} `}>

            <div className='bg-primary p-4 rounded-xl'>
                <IoMdHeart color='white' size={20} />
            </div>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='font-semibold text-xl'>Pickup line generator</h1>
                <p className='text-lg text-gray-400'>Generate pick up line for your crush now!</p>
            </div>
            <button onClick={handleLoginWithOAuth} className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                <span className='font-semibold'>Sign up with Google</span>
            </button>

            <div className='absolute bottom-10 text-center'>
                <p className='text-gray-400 text-sm'>By signing up, you agree to the <span className=' underline'>Terms of Use, Privacy Notice</span></p>
            </div>

        </div>
    )
}

export default page