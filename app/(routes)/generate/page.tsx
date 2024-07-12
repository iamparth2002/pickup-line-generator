'use client'
import React, { useContext, useState } from 'react';
import { IoHeartSharp } from 'react-icons/io5';
import Button from '../../_components/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { PickupLineContext } from '../../../context/PickupLinesContext';
import { useRouter } from 'next/navigation';
import SignoutButton  from '../../_components/SignoutButton'

const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));

const page = () => {
  const router = useRouter()
  const [style, setStyle] = useState('')
  const [text, setText] = useState('')
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const [pickupLines, setPickupLines] = useContext(PickupLineContext);


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true)
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `Only give me two or three pickup lines without any further info based on the description of the girl: ${text} and in style ${style} in json format. Please don't write anything else, only two pickup lines, that's all. Only keep words and numbers, no special characters. Please only give me array of lines.just pickup lines`,
        // prompt:'whats the capital of india'
      }),
    });
    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (prediction.status == 'succeeded') {
        setPrediction(prediction.output?.join(' '))
        console.log(prediction.output?.join(" "))

        if (prediction.output?.join(' ')[0] !== "[") {
          alert('Sorry but cant generate for this type of content.');
          setText('')
          setStyle('')
        } else {
          setPickupLines(JSON.parse(prediction.output?.join(' ')))
          setLoading(false)
          router.push('/pickup')
        }
      }
    }
  };

  return (
    <div
      className="relative"
    >
      <img src={'/hero.png'} className="w-full h-screen opacity-20" alt="" />
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed p-4 flex flex-col items-center "
        
        >
        <SignoutButton/>

        <h1 className='text-primary text-6xl py-[44px] text-center' >Pickup line generator</h1>
        <div className='flex flex-col items-start w-[360px]  md:w-[512px] gap-10 '>
          <div className='flex flex-col items-start w-full gap-4'>
            <div className='flex flex-col items-start w-full gap-2'>
              <h3 className='text-secondary text-2xl'>Tell us about your crush</h3>
              <Textarea className='h-32 text-lg text-primary placeholder:text-[#DCDCDC]' onChange={e => setText(e.target.value)} placeholder={`She is a 10 but...`} />
            </div>
            <div className='flex flex-col items-start w-full gap-2'>
              <h3 className='text-secondary text-2xl'>Style</h3>
              <Input className='text-lg text-primary placeholder:text-[#DCDCDC] placeholder:text-lg' onChange={e => setStyle(e.target.value)} placeholder='eg: funny' />
            </div>

          </div>
          <button
            disabled={!style && !text ? true : false}
            onClick={handleSubmit}
            type="button"
            className=" border-2 py-2 px-4 w-full  rounded-full text-2xl lg:text-3xl flex gap-4 justify-center items-center bg-primary leading-loose text-neutral-50 transition duration-150 ease-in-out   focus:outline-none  disabled:opacity-45   "
            data-twe-ripple-init
            data-twe-ripple-color="light">
            <IoHeartSharp size={20} className={`${loading && "animate-spin"}`} />
            Generate pickup line
            <IoHeartSharp size={20} className={`${loading && "animate-spin"}`} />

          </button>

        </div>

      </div>
    </div>
  );
};

export default page;
