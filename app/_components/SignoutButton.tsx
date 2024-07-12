'use client'
import { Button } from '@/components/ui/button';
import { supabaseBrowser } from '@/lib/supabase/browser';
import { useRouter } from 'next/navigation';
import React from 'react'


const SignoutButton = () => {
  const router = useRouter()
    const handleSignOut = async (e:any) => {
        e.preventDefault()
        const supabase = supabaseBrowser();
        const { error } = await supabase.auth.signOut();
        if (!error) {
          router.push('/auth')
        }
        if (error) console.error('Sign out error:', error.message);
      };
  return (
    <div className='cursor-pointer absolute top-16 right-20'>
        <Button className='hidden md:flex py-6 px-6 rounded-full bg-[#B5002C]/20 text-[#B5002C] text-3xl cursor-pointer hover:bg-gray-00' onClick={handleSignOut} >Signout</Button>
      </div>
  )
}

export default SignoutButton