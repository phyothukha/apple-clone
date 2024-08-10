"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

const Marquee = () => {
  return (
    <div
      className="h-[20rem] rounded-md
     flex flex-col 
     antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative 
     overflow-hidden"
    >
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
};

export default Marquee;
const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1722942432683-701fee734be2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
    title: "A Tale of Two Cities",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1669047665878-16e2b755e040?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWN0aXZpdHl8ZW58MHx8MHx8fDA%3D",
    title: "Hamlet",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
    title: "A Dream Within a Dream",
  },
  {
    image:
      "https://images.unsplash.com/photo-1722241493021-1d0d3ce79f5e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNDB8fHxlbnwwfHx8fHw%3D",
    title: "Pride and Prejudice",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1722008867926-a0a3a7e95c4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNTh8fHxlbnwwfHx8fHw%3D",
    title: "Moby-Dick",
  },
];
