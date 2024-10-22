"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"

const customers = [
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwaW4lMjBzdWl0fGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1564568979181-0b86b0f1f2b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGluJTIwc3VpdHxlbnwwfDF8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1596075780750-81249df16d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbnxlbnwwfDF8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMjBjZW98ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1605602517387-ec78b947335e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNlbyUyMGluJTIwb2ZmaWNlfGVufDB8MXwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661505218403-c684557a824d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2VvJTIwaW4lMjBvZmZpY2V8ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1544168190-79c17527004f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hbiUyMGluJTIwb2ZmaWNlfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1c2luZXNzbWFufGVufDB8MXwwfHx8MA%3D%3D",
];

export function CTA() {
  return (
    <div className="w-full sm:px-6 sm:py-10 lg:px-8 flex justify-center items-center">
      <div className="mx-auto max-w-xl text-center lg:mx-0 lg:flex-auto py-10 lg:py-10 lg:text-left">
        <h2 className="text-xl text-center font-bold tracking-tight text-black dark:text-white sm:text-4xl mt-4">
          Need a custom website built just for you? Let's chat!
        </h2>
        <p className="mt-6 text-sm text-center sm:text-lg leading-8 text-neutral-500 dark:text-neutral-400">
          Your dream website is just a conversation away!
        </p>
        <div className="mt-10 -ml-4">
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            {customers.map((image, idx) => (
              <div className="-mr-4 relative group" key={idx}>
                <Image
                  height={100}
                  width={100}
                  src={image}
                  alt={`image ${idx}`}
                  className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link 
          href={'https://cal.com/muhammadkaifnazeer/video-call-meeting'}
          target="_blank"
          className="no-underline flex space-x-2 group cursor-pointer transition duration-200 p-px font-semibold px-4 py-2 w-full sm:w-44 h-10 rounded-lg text-sm text-center items-center justify-center relative z-20 bg-black dark:bg-white dark:text-black text-white">
            Book A Call
          </Link>
        </div>
      </div>
    </div>
  );
}
