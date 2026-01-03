import React from 'react'
import Link from 'next/link'
function About() {
  return (
    <div>
        <h1>About page for my portfolio project!</h1>
        <p>Hi there, I am Farid Akanda. I am a full stack developer. Currently I am working with nextjs for frontend and django for backend.</p>
        <Link href="/">Go to Home</Link>
        <h1>Farid Akanda</h1>
        <h2>I am a full stack developer!</h2>
    </div>
  )
}

export default About