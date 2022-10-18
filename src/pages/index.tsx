import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

import SocialIcon from '@/components/SocialIcon';

import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';
import Image from 'next/future/image';

import NDImage from '../../public/images/nd.jpg';

import { getCurrentTrack } from '@/lib/spotify';
// import { Song } from '@/types';

function NavBar() {
  return (
    <nav className="flex flex-row flex-wrap items-center justify-center text-white">
      <a href="#main" className="my-1 mr-4 sm:my-0">
        Home
      </a>
      <a href="#about" className="my-1 mr-4 sm:my-0">
        About
      </a>
      <a href="#tech-stack" className="my-1 mr-4 sm:my-0">
        Tech Stack
      </a>
      <a href="#experience" className="my-1 mr-4 sm:my-0">
        Experience
      </a>
      <a href="#contact" className="my-1 mr-4 sm:my-0 last:mr-2">
        Contact
      </a>
    </nav>
  );
}

export default function Index({
  currentSong,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="pb-3 bg-zinc-900 scroll-smooth wrap">
      <header
        className="sticky top-0 z-50 flex flex-col items-center justify-center p-2 text-center sm:flex-row sm:justify-between bg-zinc-900"
        id="header"
      >
        <h1 className="mx-2 text-3xl font-bold text-white">Steven Conaway</h1>

        <NavBar />
      </header>

      <main className="flex flex-col items-center mt-6 scroll-smooth" id="main">
        <div className="min-h-[80vh] w-full max-w-5xl mb-3 relative">
          <Image
            src={NDImage}
            alt="Mountains"
            className="absolute inset-0 block object-cover w-full h-full"
            style={{
              objectPosition: 'center 10%',
            }}
            quality={70}
            priority
            placeholder="blur"
            sizes="(min-width: 1024px) 1024px, 100vw"
          />

          <div className="relative flex flex-col items-center justify-center w-full h-full min-h-[80vh] p-4 bg-black/[.65]">
            <div className="max-w-[40ch] text-center py-8">
              <p className="mt-4 text-2xl font-bold text-slate-300">
                Hi,{` `}
                {/* <span className="mx-auto text-4xl font-bold text-slate-300 wave">
                  👋🏻
                </span>
              </p>
              <p className="text-2xl font-bold text-slate-300"> */}
                I’m
              </p>
              <p className="mt-4 mb-4 text-6xl font-bold text-white">
                Steven Conaway
              </p>
              <p className="mb-8 text-xl font-bold text-slate-300">
                I’m a software developer and a sophomore at the University of
                Notre Dame.
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
            <h2 className="text-3xl font-bold text-center">About Me</h2>

            <hr className="my-6" />

            <h3 className="text-xl font-bold">Some Fun Facts:</h3>

            <ul className="pl-8 my-2 list-disc">
              <li>I grew up in Los Angeles.</li>
              <li>
                I now live in Idaho! (well, at least, for summers, since I go to
                school at Notre Dame [in Indiana])
              </li>
              {/* more? */}
            </ul>

            <hr className="my-6" />

            <h3 className="text-xl font-bold">Things I like:</h3>
            <ol className="pl-8 my-2 list-decimal">
              <li>Coding (obviously)</li>
              <li>
                Music
                {currentSong && (
                  <span className="text-sm">
                    {` `}
                    <a href={currentSong.url}>
                      {currentSong.isPlaying
                        ? ` (Right now, I’m listening `
                        : ` (Most recently, I was listening `}
                      to{` `}
                      <span className="underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400">
                        <i>{currentSong.title}</i> by {currentSong.artist}
                      </span>
                      )
                    </a>
                  </span>
                )}
              </li>
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
            <h2 className="text-3xl font-bold text-center">Tech Stack</h2>

            <hr className="my-6" />

            <h3 className="text-xl font-bold">Hardware:</h3>
            <ol className="pl-8 my-2 list-decimal">
              <li>2021 16" MacBook Pro (used for basically everything)</li>
              <li>2020 11" iPad Pro (used for school stuff and art things)</li>
            </ol>

            <hr className="my-6" />

            <h3 className="text-xl font-bold">Software:</h3>
            <ol className="pl-8 my-2 list-decimal">
              <li className="my-2">
                <a
                  className="underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400"
                  href="https://code.visualstudio.com/"
                >
                  Visual Studio Code
                </a>
              </li>
              <li className="my-2">
                <a
                  className="underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400"
                  href="https://python.org/"
                >
                  Python
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
                  href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"
                >
                  ES2022 (JavaScript)
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
              <li className="my-2">
                <a
                  className="underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400"
                  href="https://git-scm.com/"
                >
                  Git
                </a>
              </li>
            </ol>
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-center w-full px-6 py-10 mt-3 bg-zinc-800 text-zinc-100"
          id="experience"
        >
          <div className="w-full max-w-[60ch]">
            <h2 className="text-3xl font-bold text-center">Experience</h2>
            <hr className="my-6" />
            <p>
              Over Summer 2022, I served as a{' '}
              <strong>Resident Counselor and Course Facilitator</strong> with
              the University of Notre Dame's Pre-College Programs. Some of my
              duties included the following:
            </p>
            <ul className="pl-8 my-2 list-disc">
              <li>
                Ensured the well-being of rising high school juniors and seniors
                living in a residential college setting.
              </li>
              <li>
                Managed online classes as per Notre Dame’s Protection of
                Children policies.
              </li>
              <li>
                Advised students and faculty on use of technologies such as
                Google Suite and Zoom.
              </li>
              <li>
                Coordinated various activities and social events, both in-person
                and virtually.
              </li>
              <li>
                Served as a mentor, university representative, and resource for
                prospective students.
              </li>
            </ul>
            <hr className="my-6" />
            <p>
              I worked as a <strong>Lead Mobile Application Developer</strong>{' '}
              for <a href="https://we2link.com/">We2Link</a> from August 2019 to
              August 2022. In this role, I did the following:{' '}
            </p>
            <ul className="pl-8 my-2 list-disc">
              <li>
                Gained significant experience developing cross-platform mobile
                apps with React Native.
              </li>
              <li>
                Led the creation of tutorial videos introducing new team members
                to our project.
              </li>
            </ul>
            <hr className="my-6" />
            <p>
              I also worked as a <strong>Tech Instructor</strong> for the East
              Los Angeles Community Youth Center.
            </p>

            <ul className="pl-8 my-2 list-disc">
              <li>
                I taught several classes, including "How to Build your own
                Arduino-based Smart Car", "Introduction to Drones", and "LEGO
                Robotics", to underserved elementary- and middle-school
                students.
              </li>
              <li>
                Our Robotics team won second place in the First Annual Boyle
                Heights Robotics Competition. Also, developed the curriculum
                currently in use for the "How to Build your own Arduino-based
                Smart Car" class.
              </li>
              <li>
                In November 2020, I began teaching “Introductory Robotics
                Programming”, a virtual class teaching students basic
                programming skills by use of VEXCode VR.
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-center w-full px-6 mt-3 bg-zinc-900 text-zinc-500">
        <div className="w-full max-w-[60ch]">
          {/* copyright */}
          <p className="text-center">
            © {new Date().getFullYear()} Steven Conaway
          </p>
        </div>
      </footer>
    </div>
  );
}

// server-side rendering
export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );

  const currentSong = await getCurrentTrack();

  return { props: { currentSong } };
}
