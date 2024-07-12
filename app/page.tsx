'use client'
import Image from "next/image";
import hero from "../public/hero.png";
import { IoHeartSharp } from "react-icons/io5";
import { PickupLineContext } from "@/context/PickupLinesContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div
      className="relative overflow-hidden rounded-lg bg-hero-pattern bg-cover bg-no-repeat p-12 text-center h-screen bg-center"
      style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"

      >
        <h1 className="mt-28 text-4xl md:mt-24  md:text-4xl lg:mt-20 xl:mt-20 2xl:mt-10 mr-8 lg:text-5xl text-white">Pickup line<br /> Generator</h1>
        <div className="flex h-full items-center justify-center">
          <div className="text-white">

            <button
              type="button"
              className=" border-2 py-2 px-4 2xl:py-2 2xl:px-6 -mt-44 2xl:-mt-32 mr-6 2xl:mr-5 rounded-full text-2xl lg:text-3xl flex gap-4 items-center bg-primary leading-loose text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              onClick={() => router.push('/generate')}>
              <IoHeartSharp size={20} />
              Generate one for me
              <IoHeartSharp size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
