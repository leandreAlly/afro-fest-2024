'use client';
import { incrementAttendance } from '@/actions/action';
import { AttendanceCounter } from '@/components/AttendanceCounter';
import { CountdownTimer } from '@/components/countdown-timer';
// import { AttendanceCounter } from '@/components/CountUp';
import { Cursor } from '@/components/cursor';
import ImageSlider from '@/components/ImageSlider';
import TextSlider from '@/components/Textslider';
// import homeImg from '@/images/home.jpeg';
import { assets } from '@/utils/asset-utils';
import { type Framework, frameworks } from '@/utils/framework-utils';
import { cn } from '@/utils/tailwind-utils';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
});
export default function Home() {
  const [currentFramework, setCurrentFramework] = useState<Framework>(
    frameworks[0]
  );
  const [showBackground, setShowBackground] = useState(false);
  const [hasAttended, setHasAttended] = useState(false);
  const [buttonText, setButtonText] = useState('I will be there🙅‍♂️');
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    const rotateFrameworks = () => {
      setCurrentFramework(frameworks[currentIndex]);
      currentIndex = (currentIndex + 1) % frameworks.length;
    };
    const intervalId = setInterval(rotateFrameworks, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setShowBackground(true);
    // Check localStorage for attendance status
    const attendanceStatus = localStorage.getItem('hasAttended');
    if (attendanceStatus === 'true') {
      setHasAttended(true);
      setButtonText("You're awesome! See you there!");
    }
  }, []);

  const handleAttendClick = async () => {
    if (!hasAttended) {
      const result = await incrementAttendance();
      if (result.success) {
        setHasAttended(true);
        localStorage.setItem('hasAttended', 'true');
        setButtonText("You're awesome! See you there!🔥");
      } else {
        console.error('Error updating attendance:', result.error);
      }
    }
  };

  return (
    <main>
      {/* Background color */}
      <div className="mb-28 max-sm:mb-28">
        <div
          className={cn(
            'fixed inset-0 transition-color delay-100 duration-700 opacity-25',
            {
              'bg-purple-300': currentFramework === 'qwik',
              'bg-sky-300': currentFramework === 'safari',
              'bg-yellow-300': currentFramework === 'chrome',
              'bg-teal-300': currentFramework === 'tailwind',
              'bg-blue-300': currentFramework === 'react',
              'bg-green-300': currentFramework === 'vue',
              'bg-orange-400': currentFramework === 'svelte',
              'bg-red-300': currentFramework === 'mobile',
              'bg-neutral-300': currentFramework === 'desktop',
            }
          )}
        />
        {/* Grid */}
        <div
          style={{
            backgroundSize: '30px',
            backgroundImage: `url(${assets.square})`,
          }}
          className="fixed inset-0 opacity-30"
        />
        {/* Gradient */}
        <Image
          width={1200}
          height={1200}
          role="presentation"
          alt="gradient background"
          className="fixed inset-0 w-screen h-screen object-cover"
          src={assets.gradient}
        />
        {/* Reveal */}
        <div
          className={cn(
            'bg-black fixed inset-0 transition-opacity duration-1000',
            !showBackground ? 'opacity-100' : 'opacity-0'
          )}
        />
        {/* Content */}
        <div className="max-w-7xl mt-20 mx-auto">
          <div className="flex flex-col items-center relative z-10">
            <ImageSlider />
          </div>
          <div className="flex flex-col items-center relative z-10">
            {/* Heading */}
            {/* <Image
              alt="Figma logo"
              className="inline-block -mt-2"
              src={homeImg}
              width="350"
              height="200"
            /> */}
            <h1
              className={`text-7xl max-w-3xl text-center leading-snug mb-12 ${poppins.className}`}
            >
              {/* <Image
              alt="Figma logo"
              className="inline-block mr-8 -mt-2"
              src={assets.figma}
              width="50"
              height="50"
            /> */}
              {/* to <FrameworkRotation currentFramework={currentFramework} /> will{' '} */}
              <span
                className={cn('transition-colors duration-200', {
                  'text-purple-300': currentFramework === 'qwik',
                  'text-sky-300': currentFramework === 'safari',
                  'text-yellow-300': currentFramework === 'chrome',
                  'text-teal-300': currentFramework === 'tailwind',
                  'text-blue-300': currentFramework === 'react',
                  'text-green-300': currentFramework === 'vue',
                  'text-orange-400': currentFramework === 'svelte',
                  'text-red-300': currentFramework === 'mobile',
                  'text-neutral-300': currentFramework === 'desktop',
                })}
              >
                Join
              </span>{' '}
              The global Harmony💃🕺
            </h1>
            {/* Sub heading */}

            <AttendanceCounter />

            {/* <p className="mb-8 max-sm:mx-8"> */}
            <TextSlider />
            {/* <span className="text-gray-300">
                Afrofest isn&apos;t just a party, it’s a movement. Join us as we
                dance across borders, blending beats, cultures, and energies
                into a night of pure, global connection.
              </span> */}
            {/* <Image
              alt="Builder.io logo"
              className="inline-block ml-1 -mt-1"
              width={100}
              height={20}
              src={assets.builder}
            /> */}
            {/* {' + '} */}
            {/* <Image
              alt="Figma logo"
              className="inline-block mx-1"
              width={55}
              height={20}
              src={assets.figmatwo}
            /> */}
            {/* </p> */}
            {/* Claim ticket button */}
            <div className="mb-8">
              <button
                ref={buttonRef}
                onClick={handleAttendClick}
                disabled={hasAttended}
                className={cn(
                  'text-black px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-200',
                  {
                    'bg-purple-300': currentFramework === 'qwik',
                    'bg-sky-300': currentFramework === 'safari',
                    'bg-yellow-300': currentFramework === 'chrome',
                    'bg-teal-300': currentFramework === 'tailwind',
                    'bg-blue-300': currentFramework === 'react',
                    'bg-green-300': currentFramework === 'vue',
                    'bg-orange-400': currentFramework === 'svelte',
                    'bg-red-300': currentFramework === 'mobile',
                    'bg-neutral-300': currentFramework === 'desktop',
                  }
                )}
              >
                {buttonText}
              </button>
            </div>
            {/* Countdown timer */}
            <CountdownTimer currentFramework={currentFramework} />
          </div>
        </div>
        <Cursor buttonRef={buttonRef} />
      </div>
    </main>
  );
}
