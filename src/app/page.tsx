import {
  FaLinkedin,
  FaRegEnvelope,
  FaXTwitter,
  FaGithub,
} from 'react-icons/fa6';

import SocialIcon from '@/components/SocialIcon';
// import CurrentlyPlaying from '@/components/CurrentlyPlaying';

import Image from 'next/image';

import NDImage from '../../public/images/nd.jpg';
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
              <p className="mt-4 text-2xl text-slate-300">
                Hi,{` `}
                I’m
              </p>
              <p className="mt-4 mb-4 text-6xl text-white">Steven Conaway</p>
              <p className="mb-8 text-lg text-slate-300">
                I just graduated from the University of Notre Dame with a degree
                in Computer Engineering. Now, I&apos;m working as an{' '}
                <em>Application Engineer</em> at Cadence Design Systems.
              </p>

              <div className="border-slate-300 border-b w-full h-[1px]"></div>

              <div className="flex flex-row justify-around mt-8">
                <SocialIcon
                  icon={<FaRegEnvelope />}
                  url="mailto:me@stevenconaway.me"
                  description="Email"
                />

                <SocialIcon
                  icon={<FaLinkedin />}
                  url="https://www.linkedin.com/in/steven-conaway/"
                  description="LinkedIn"
                />

                <SocialIcon
                  icon={<FaGithub />}
                  url="https://github.com/SConaway"
                  description="GitHub"
                />

                <SocialIcon
                  icon={<FaXTwitter />}
                  url="https://x.com/StevenConaway4"
                  description="Twitter"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-center w-full px-6 py-10 mt-3 bg-zinc-800 text-zinc-100 scroll-my-6"
          id="experience"
        >
          <div className="w-full max-w-[60ch]">
            <h2 className="text-3xl font-bold text-center">Experience</h2>

            <hr className="my-6" />

            <p className="text-center">
              Currently, I am working as an Application Engineer at Cadence
              Design Systems.
            </p>

            <hr className="my-6" />

            <p className="mt-2 text-justify">
              In the past, I have co-developed an{' '}
              <a
                href="https://canvas.howard.edu/courses/47629/pages/lecture-notes-and-schedule"
                className="underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400"
              >
                advanced chip design curriculum at Howard University
              </a>
              , supported student tapeouts, and coordinated EDA tools with
              industry partners. At Notre Dame, I served as a Teaching Assistant
              across multiple engineering courses—from digital logic to systems
              programming—leading labs, grading, and holding office hours. I
              also worked on smart water infrastructure research using embedded
              systems and machine learning, mentored peers through the ACES
              program at Notre Dame, and supported over 450 high school students
              as a Pre-College resident counselor. Earlier, I led mobile app
              development at We2Link and taught robotics and programming to
              underserved youth in East Los Angeles.
            </p>

            <hr className="my-6" />

            <p className="mt-4 text-center">
              For more details, visit my{' '}
              <a
                href="https://www.linkedin.com/in/steven_conaway"
                className="underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400"
              >
                LinkedIn profile
              </a>
              .
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-center w-full px-6 py-10 mt-3 bg-zinc-800 text-zinc-100 scroll-my-6"
          id="projects"
        >
          <div className="w-full max-w-[60ch]">
            <h2 className="text-3xl font-bold text-center">
              Featured Projects
            </h2>
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
