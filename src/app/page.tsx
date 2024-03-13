import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

import SocialIcon from '@/components/SocialIcon';
import CurrentlyPlaying from '@/components/CurrentlyPlaying';

import Image from 'next/image';

import NDImage from '../../public/images/nd.jpg';
// import WebImage from '../../public/images/website.png';
import OLCImage from '../../public/images/olc.png';
import ELAImage from '../../public/images/ela.jpg';
import M5TimelapseImage from '../../public/images/m5timelapse.png';
import MCWebImage from '../../public/images/mcweb.png';
import RNCCDImage from '../../public/images/rnccd.png';

import Project from '@/components/Project';

function NavBar() {
  return (
    <nav className="flex flex-row flex-wrap items-center justify-center text-zinc-200">
      <a
        href="#main"
        className="px-2 underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400"
      >
        Home
      </a>
      <a
        href="#about"
        className="px-2 underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400"
      >
        About
      </a>
      <a
        href="#tech-stack"
        className="px-2 underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400"
      >
        Tech Stack
      </a>
      <a
        href="#experience"
        className="px-2 underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400"
      >
        Experience
      </a>
      <a
        href="#projects"
        className="px-2 underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400"
      >
        Projects
      </a>
      {/* <a href="#contact" className="px-2 underline transition-colors underline-offset-2 decoration-white zinc-200:decoration-zinc-400 hover:text-zinc-400">
        Contact
      </a> */}
    </nav>
  );
}

export default function Index() {
  return (
    <div className="pb-3 bg-zinc-900 wrap">
      <div className="sticky top-0 z-50 p-2 bg-zinc-900">
        <header
          className="flex flex-col items-center justify-center max-w-5xl mx-auto sm:flex-row sm:justify-between"
          id="header"
        >
          <h1 className="mr-2 text-3xl font-bold text-white">Steven Conaway</h1>

          <NavBar />
        </header>
      </div>

      <hr className="w-full border-t-2 border-zinc-800 my--2" />

      <main className="flex flex-col items-center mt-4 scroll-my-6" id="main">
        <div className="min-h-[80vh] w-full max-w-5xl mb-3 relative">
          <Image
            src={NDImage}
            alt="Notre Dame Golden Dome"
            className="absolute inset-0 block object-cover w-full h-full"
            style={{
              objectPosition: 'center 10%',
            }}
            quality={20}
            priority
            placeholder="blur"
            sizes="(min-width: 1024px) 1024px, 100vw"
          />

          <div className="relative flex flex-col items-center justify-center w-full h-full min-h-[80vh] p-4 bg-black/[.65]">
            <div className="max-w-[40ch] text-center py-8">
              <p className="mt-4 text-2xl font-bold text-slate-300">
                Hi,{` `}
                I’m
              </p>
              <p className="mt-4 mb-4 text-6xl font-bold text-white">
                Steven Conaway
              </p>
              <p className="mb-8 text-xl font-bold text-slate-300">
                I’m a Software Developer and a Junior at the University of Notre
                Dame.
              </p>

              <div className="border-slate-300 border-b w-full h-[1px]"></div>

              <div className="flex flex-row justify-around mt-8">
                <SocialIcon
                  icon={<FiMail />}
                  url="mailto:me@stevenconaway.me"
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
          className="w-full min-h-[30vh] flex flex-col items-center justify-center py-10 px-6 mt-3 bg-zinc-700 text-zinc-50 scroll-my-6"
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
                school at Notre Dame.
              </li>
            </ul>

            <hr className="my-6" />

            <h3 className="text-xl font-bold">Things I like:</h3>
            <ol className="pl-8 my-2 list-decimal">
              <li>Coding</li>
              <li>Embedded System Design and Programming</li>
              <li>Chip Design</li>
              <li>
                Music
                <CurrentlyPlaying />
              </li>
              <li>Singing (choir and musicals)</li>
            </ol>
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-center w-full px-6 py-10 mt-3 bg-zinc-800 text-zinc-100 scroll-my-6"
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
                  href="https://lunarvim.org/"
                >
                  NeoVim (through LunarVim)
                </a>
              </li>
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
                  ES2022 JavaScript
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
          className="flex flex-col items-center justify-center w-full px-6 py-10 mt-3 bg-zinc-800 text-zinc-100 scroll-my-6"
          id="experience"
        >
          <div className="w-full max-w-[60ch]">
            <h2 className="text-3xl font-bold text-center">Experience</h2>
            <hr className="my-6" />
            <p className="mb-2">
              During the Spring 2023 semester at Notre Dame, I served as a{' '}
              <strong>Teaching Assistant</strong> for the course,{' '}
              <strong>Logic Design and Sequential Circuits</strong>. This course
              culminates in the implementation of a basic 16-bit processor
              designed in Verilog and programmed in assembly.
            </p>
            <p className="mb-2">
              In Fall 2023, I was a teaching assistant for Notre Dame’s{' '}
              <strong>Computer Architecture</strong> course. In this course,
              students learn about the design of processors and memory systems.
              This course also includes a significant amount of programming in
              C, as well as RISC-V assembly.
            </p>
            <p className="mb-2">
              Now, in Spring 2024, I am a teaching assistant for the{' '}
              <strong>Systems Programming</strong> course. This course involves
              Bash scripting, Python, and C programming, as well as the use of
              various Linux tools, including <code>git</code>, <code>make</code>
              , and <code>valgrind</code>. Students also learn the use of Linux
              system calls.
            </p>
            <p>
              Throughout these last three semesters, some of my responsibilities
              have been:
            </p>
            <ul className="pl-8 my-2 list-disc">
              <li>Leading a weekly lab session.</li>
              <li>
                Hosting 2 or more office hours to assist students with their
                coursework.
              </li>
              <li>Graded weekly readings and homework assignments.</li>
            </ul>

            <hr className="my-6" />

            <p>
              During Summer 2023, I served as a <strong>Summer Intern</strong>{' '}
              for the University of Notre Dame's Center for Civic Innovation.
              Some of my responsibilities included the following:
            </p>
            <ul className="pl-8 my-2 list-disc">
              <li>
                Conducted online research and interviews with local and other
                experts to better understand opportunities for innovation in
                smart water management.
              </li>
              <li>
                Prepared a report on the costs associated with water loss due to
                leaks and the costs associated with water storage, delivery, and
                purification, as well as a survey of current strategies to
                reduce these costs.
              </li>
              <li>
                Developed and implemented an embedded system, coupled with a
                machine-learning algorithm, to use the sound of water flowing
                through pipes to identify the presence of leaks in buried
                distribution mains.
              </li>
            </ul>

            <hr className="my-6" />

            <p>
              During Summer 2022, I served as a{' '}
              <strong>Resident Counselor and Course Facilitator</strong> for the
              University of Notre Dame's Pre-College Programs. Some of my
              responsibilities included the following:
            </p>
            <ul className="pl-8 my-2 list-disc">
              <li>
                Ensured the well-being of 20 rising high school juniors and
                seniors living in a residential college setting.
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
                450+ prospective students.
              </li>
            </ul>

            <hr className="my-6" />

            <p>
              I worked as a <strong>Lead Mobile Application Developer</strong>{' '}
              for <a href="https://we2link.com/">We2Link</a> from August 2019 to
              August 2022. In this role, I:
            </p>
            <ul className="pl-8 my-2 list-disc">
              <li>
                Gained significant experience developing cross-platform mobile
                apps with React Native.
              </li>
              <li>
                Led the creation of a series of 12 tutorial videos introducing
                new team members to our project.
              </li>
            </ul>
            <hr className="my-6" />
            <p>
              I also worked as a <strong>Tech Instructor</strong> for the East
              Los Angeles Community Youth Center.
            </p>
            <ul className="pl-8 my-2 list-disc">
              <li>
                Taught several classes, including "How to Build your own
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
                In November 2020, during COVID, I began teaching “Introductory
                Robotics Programming”, a virtual class teaching students basic
                programming skills by use of VEXCode VR.
              </li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-center w-full px-6 py-10 mt-3 bg-zinc-800 text-zinc-100 scroll-my-6"
          id="projects"
        >
          <div className="w-full max-w-[60ch]">
            <h2 className="text-3xl font-bold text-center">Projects</h2>
            <hr className="my-6" />
            <p>
              I have worked on a variety of projects, both personal and
              professional. These are some of my favorites:
            </p>
          </div>

          <div className="w-full max-w-[1000px]">
            <div className="flex flex-row flex-wrap items-center justify-center mt-6">
              <Project
                title="Personal Website"
                description="This website! I built it using Next.js, TypeScript, and Tailwind CSS."
                link="https://github.com/SConaway/stevenconaway.me"
                src={'/api/opengraph-image'}
                height={630}
                width={1200}
              />

              <Project
                title="Outdoor Lighting Controller"
                description="An ESP8266-based controller for outdoor lighting. I built it using ESPHome and Home Assistant."
                link="https://github.com/SConaway/Outdoor-Lighting-Controller.git"
                src={OLCImage}
                height={OLCImage.height}
                width={OLCImage.width}
              />

              <Project
                title="CircuitPython-based Sensor Board"
                description="A drone-mounted PCB with air quality sensors based on an Adafruit Feather running CircuitPython."
                link="https://github.com/ELAScience/AQ-drone"
                src={ELAImage}
                height={ELAImage.height}
                width={ELAImage.width}
              />

              <Project
                title="m5stack-timelapse"
                description="An ESP32-based M5Stack timelapse camera built using Arduino, NodeJS, and bash scripting."
                link="https://github.com/SConaway/m5stack-timelapse"
                src={M5TimelapseImage}
                height={M5TimelapseImage.height}
                width={M5TimelapseImage.width}
              />

              <Project
                title="MCWeb"
                description="A web-based Minecraft server management tool built using React, NodeJS, and Express."
                link="https://github.com/SConaway/mcweb"
                src={MCWebImage}
                height={MCWebImage.height}
                width={MCWebImage.width}
              />

              <Project
                title="react-native-credit-card-display"
                description="An interactive React Native component for displaying credit card information."
                link="https://github.com/SConaway/react-native-credit-card-display"
                src={RNCCDImage}
                height={RNCCDImage.height}
                width={RNCCDImage.width}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-center w-full px-6 mt-3 bg-zinc-900 text-zinc-400">
        <div className="w-full max-w-[60ch]">
          {/* copyright */}
          <p className="text-center">
            © {new Date().getFullYear()} Steven Conaway
          </p>

          {/* add contact info */}
          <div className="flex flex-row items-center justify-center">
            <p className="mr-[0.5ch]">Contact me at:</p>
            <a
              href="mailto:steven@stevenconaway.me"
              className="special-underline-zinc-500"
            >
              steven@stevenconaway.me
            </a>
            .
          </div>
        </div>
      </footer>
    </div>
  );
}
