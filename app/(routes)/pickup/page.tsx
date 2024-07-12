'use client'
import React, { useContext } from 'react'
import { IoHeartSharp } from 'react-icons/io5';
import Button from '../../_components/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { BiCopyAlt } from 'react-icons/bi';
import Link from 'next/link';
import { PickupLineContext } from '@/context/PickupLinesContext';
import SignoutButton from '@/app/_components/SignoutButton';

const page = () => {
    const [pickupLines, setPickupLines] = useContext(PickupLineContext);


    const handleCopy = (item: string) => {
        navigator.clipboard.writeText(item).then(() => {
            alert('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };
    return (
        <div
            className="relative"
        >
            <img src={'/hero.png'} className="w-full h-screen opacity-20" alt="" />

            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed p-4 flex flex-col items-center "

            >
                <SignoutButton />

                <h1 className='text-primary text-6xl py-[44px] text-center'>Pickup line generator</h1>
                <p className='text-[#B5002C] text-xl mb-4'>Copy the below pickup lines</p>
                <div className='flex flex-col items-start w-[360px]  md:w-[512px] gap-10 '>
                    <div className='flex flex-col items-start w-full gap-4'>
                        {pickupLines && pickupLines?.map((item:any, index:number) => (
                            <div className='flex flex-col bg-white px-5 py-6 items-start w-full gap-2 text-primary border-2 rounded-lg border-primary'>
                                <h1 className='text-2xl text-[#B5002C] w-full flex justify-between'>{`Pickup Line ${index + 1}`} <BiCopyAlt onClick={() => handleCopy(item)} className='cursor-pointer' color='#E0AFBB' /></h1>
                                <p className='text-primary text-lg'>{item}</p>
                            </div>
                        ))}

                    </div>

                    <Button text={"Regenerate pickup line"} push={"/generate"} />


                </div>

            </div>
        </div>
    )
}

export default page