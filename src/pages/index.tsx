// import { useState } from 'react';

// import { FaBars } from 'react-icons/fa';

export default function Index() {
  return (
    <div className="min-h-screen bg-zinc-900 scroll-smooth">
      {/* here comes the header */}
      <header
        className="sticky top-0 flex flex-col items-center justify-center p-2 sm:flex-row sm:justify-between bg-zinc-800"
        id="header"
      >
        <h1 className="mx-2 text-3xl font-bold text-white">Steven Conaway</h1>

        <nav className="flex flex-row items-center justify-center sm:flex-rw">
          <a href="#header" className="my-1 mr-4 text-white sm:my-0">
            Home
          </a>
          <a href="#about" className="my-1 mr-4 text-white sm:my-0">
            About
          </a>
          <a href="#projects" className="my-1 mr-4 text-white sm:my-0">
            Projects
          </a>
          <a href="#contact" className="my-1 mr-4 text-white sm:my-0 last:mr-2">
            Contact
          </a>
        </nav>
      </header>

      {/* here comes the content */}
      <main className="flex flex-col items-center justify-center min-h-screen mt-6 bg-zinc-400">
        <h1 className="text-4xl font-bold text-white">Welcome to Next.js!</h1>
      </main>
      <main className="flex flex-col items-center justify-center min-h-screen mt-6 bg-zinc-400">
        <h1 className="text-4xl font-bold text-white">Welcome to Next.js!</h1>
      </main>
    </div>
  );
}
