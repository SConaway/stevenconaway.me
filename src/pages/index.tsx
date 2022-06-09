// import { useState } from 'react';

// import { FaBars } from 'react-icons/fa';

import Image from 'next/image';

export default function Index() {
  return (
    <div className="bg-zinc-900 scroll-smooth">
      <header
        className="sticky top-0 z-50 flex flex-col items-center justify-center p-2 text-center sm:flex-row sm:justify-between bg-zinc-800"
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

      <main className="flex flex-col min-h-screen mt-6">
        <div className="h-[70vh] relative mb-3">
          <Image
            alt="Mountains"
            src="/images/nd.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />

          <div className="relative flex flex-col items-center justify-center w-full h-full p-4 bg-black/60">
            <div className="max-w-[40ch] text-center py-8">
              <p className="text-2xl font-bold text-slate-300">Hi, I&apos;m</p>
              <p className="mt-4 mb-4 text-6xl font-bold text-white">
                Steven Conaway
              </p>
              <p className="text-xl font-bold text-slate-300">
                I&apos;m a software developer and a sophomore at the University
                of Notre Dame.
              </p>
            </div>
          </div>
          {/* </div> */}

          {/* <p className={bgText}>
            Image Component
            <br />
            as a Background
          </p> */}
        </div>

        <div className="mt-3 text-white">
          <p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              dolor quasi quia laborum ratione, temporibus illo placeat ipsa,
              tenetur earum autem necessitatibus pariatur! Quo, consequatur
              nostrum tenetur ex sit unde.
            </span>
            <span>
              Sit enim dolorem esse officia inventore repudiandae odio,
              laudantium animi ipsa reprehenderit repellat magni sunt tenetur
              asperiores natus reiciendis totam iste vitae aspernatur iusto quam
              dolores corrupti. Reiciendis, tempora voluptates.
            </span>
            <span>
              Numquam odit harum nisi unde consectetur perspiciatis, temporibus
              quo odio maiores officia molestias voluptatem nobis voluptatibus
              sunt quia incidunt? Aliquid quasi deserunt, hic voluptate commodi
              animi quod doloremque fuga perspiciatis.
            </span>
            <span>
              Aspernatur ex facilis, blanditiis et consectetur voluptates,
              voluptatem illo minus aliquid perspiciatis illum dolorem obcaecati
              incidunt asperiores minima iure explicabo velit ducimus totam
              molestiae vel earum doloremque recusandae odit! Amet?
            </span>
            <span>
              Perferendis omnis sed in modi assumenda? Similique earum vitae quo
              minus alias sint? Deserunt harum totam dolorum voluptatibus rerum
              accusantium deleniti explicabo ullam! Hic quae voluptas optio modi
              numquam. Nam?
            </span>
          </p>
        </div>
      </main>
    </div>
  );
}
