import React from 'react'



const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const maskRevealVariants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: {
      duration: 1.2,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

export default function About() {
  return (
    <div className='h-screen w-full '>
        
    </div>
  )
}
