import React from 'react'
import Link from 'next/link'
function About() {
  return (
    <div>
        <h1 className='header-title'>About page for my portfolio project!</h1>
        <p className='main-title'>Hi there, I am Farid Akanda. I am a full stack developer. Currently I am working with nextjs for frontend and django for backend.</p>
        <Link href="/">Go to Home</Link>
        <h1 className='main-title'>Farid Akanda</h1>
        <h2 className="secondary-title">I am a full stack developer!</h2>
        <p>I'm using nextjs for frontend and django for backend in my project.</p>
    </div>
  )
}

export default About