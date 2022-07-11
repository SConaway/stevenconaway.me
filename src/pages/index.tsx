// import { useState } from 'react';

import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

import SocialIcon from '@/components/SocialIcon';

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
          <a
            href="#main"
            // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="my-1 mr-4 text-white sm:my-0"
          >
            Home
          </a>
          <a href="#about" className="my-1 mr-4 text-white sm:my-0">
            About
          </a>
          <a href="#tech-stack" className="my-1 mr-4 text-white sm:my-0">
            Tech Stack
          </a>
          <a href="#projects" className="my-1 mr-4 text-white sm:my-0">
            Projects
          </a>
          <a href="#contact" className="my-1 mr-4 text-white sm:my-0 last:mr-2">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex flex-col items-center mt-6 scroll-smooth" id="main">
        <div className="min-h-[80vh] w-full max-w-5xl relative mb-3">
          <Image
            alt="Mountains"
            src="/images/nd.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center 15%"
            quality={70}
            priority
          />

          <div className="relative flex flex-col items-center justify-center w-full min-h-[80vh] p-4 bg-black/75">
            <div className="max-w-[40ch] text-center py-8">
              <p className="mt-4 text-2xl font-bold text-slate-300">
                Hi,{` `}
                {/* <span className="mx-auto text-4xl font-bold text-slate-300 wave">
                  👋🏻
                </span>
              </p>
              <p className="text-2xl font-bold text-slate-300"> */}
                I&apos;m
              </p>
              <p className="mt-4 mb-4 text-6xl font-bold text-white">
                Steven Conaway
              </p>
              <p className="mb-8 text-xl font-bold text-slate-300">
                I&apos;m a software developer and a sophomore at the University
                of Notre Dame.
              </p>

              <div className="border-slate-300 border-b w-full h-[1px]"></div>

              <div className="flex flex-row justify-around mt-8">
                <SocialIcon
                  icon={<FiMail />}
                  url="mailto:steven@stevenconaway.me"
                  description="Email"
                />

                <SocialIcon
                  icon={<FiLinkedin />}
                  url="https://www.linkedin.com/in/steven-conaway/"
                  description="LinkedIn"
                />

                <SocialIcon
                  icon={<FiGithub />}
                  url="https://github.com/SConaway"
                  description="GitHub"
                />

                <SocialIcon
                  icon={<FiTwitter />}
                  url="https://twitter.com/StevenConaway4"
                  description="Twitter"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full min-h-[30vh] flex flex-col items-center justify-center py-10 px-6 mt-3 bg-zinc-700 text-zinc-50"
          id="about"
        >
          <div className="w-full max-w-[60ch]">
            <h2 className="text-3xl font-bold text-center text-white">
              About Me
            </h2>

            <hr className="my-6" />

            <h3 className="text-xl font-bold text-white">Some Fun Facts:</h3>

            <ul className="pl-8 my-2 list-disc">
              <li>I grew up in Los Angeles.</li>
              <li>
                I now live in Idaho! (well, at least, for summers, since I go to
                school at Notre Dame [in Indiana])
              </li>
              {/* more? */}
            </ul>

            <hr className="my-6" />

            <h3 className="text-xl font-bold text-white">Things I like:</h3>
            <ol className="pl-8 my-2 list-decimal">
              <li>Coding (obviously)</li>
              <li>Music</li>
              {/* add music widget there? */}
              <li>Singing (choir and musicals)</li>
              {/* more? */}
            </ol>
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-center w-full px-6 py-10 mt-3 bg-zinc-800 text-zinc-100"
          id="tech-stack"
        >
          <div className="w-full max-w-[60ch]">
            <h2 className="text-3xl font-bold text-center text-white">
              Tech Stack
            </h2>

            <hr className="my-6" />

            <h3 className="text-xl font-bold text-white">Hardware:</h3>
            <ol className="pl-8 my-2 list-decimal">
              <li>
                2021 16&rdquo; MacBook Pro (used for basically everything)
              </li>
              <li>
                2020 11&rdquo; iPad Pro (used for school stuff and art things)
              </li>
            </ol>

            <hr className="my-6" />

            <h3 className="text-xl font-bold text-white">Software:</h3>
            <ol className="pl-8 my-2 list-decimal">
              <li className="my-2">
                <a
                  className="underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400"
                  href="https://www.visualstudio.com/"
                >
                  Visual Studio Code
                </a>
              </li>
              <li className="my-2">
                <a
                  className="underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400"
                  href="https://www.typescriptlang.org/"
                >
                  TypeScript
                </a>
              </li>
              <li className="my-2">
                <a
                  className="underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400"
                  href="https://vercel.com/"
                >
                  Vercel
                </a>
              </li>
              <li className="my-2">
                <a
                  className="underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400"
                  href="https://reactjs.org/"
                >
                  React
                </a>
              </li>
              <li className="my-2">
                <a
                  className="underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400"
                  href="https://nextjs.org/"
                >
                  Next.js
                </a>
              </li>
              <li className="my-2">
                <a
                  className="underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400"
                  href="https://reactnative.dev/"
                >
                  React Native
                </a>
              </li>
            </ol>
          </div>
        </div>

        {/* <div className="mt-3 text-white">
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
        </div> */}
      </main>
    </div>
  );
}
