import { ImageResponse } from 'next/server';

import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

import SocialIcon from '@/components/SocialIcon';

import Image from 'next/image';

import NDImage from '../../public/images/nd.jpg';

export const runtime = 'edge';

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: 'url(https://stvn.ml/images/ndog.jpg)',
          backgroundSize: '1200px 630px',
          backgroundPosition: 'top',
        }}
        tw="h-full w-full"
      >
        <main tw="flex flex-col items-center" id="main">
          <div
            style={{ display: 'flex', flexDirection: 'column' }}
            tw="h-full w-full mb-3 relative"
          >
            {/* <Image
              src={NDImage}bg-blabg-black/[.65]ck/[.65]
              alt="Notre Dame Golden Dome"
              tw="absolute inset-0 block object-cover w-full h-full"
              style={{
                objectPosition: 'center 10%',
              }}
              quality={20}
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 1024px, 100vw"
            /> */}

            {/* <img
              src="https://stvn.ml/images/nd.jpg"
              tw="absolute inset-0 w-full h-full"
              style={{
                objectPosition: 'center 0%',
                // display: 'block',
                objectFit: 'cover',
              }}
              width={1200}
              height={630}
            /> */}

            <div
              style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,.65)' }}
              tw="relative flex flex-col items-center justify-center w-full h-full min-h-[80vh] p-4 " //bg-black/[.65]
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'center',
                  maxWidth: '600px',
                }}
                tw="text-center py-8"
              >
                <p tw="text-center text-4xl font-bold text-slate-300 mx-auto">
                  Hi,{` `}
                  I’m
                </p>
                <p
                  tw="mt-3 text-center mb-3 font-bold text-white mx-auto"
                  style={{ fontSize: '90px' }}
                >
                  {/* 6xl => 60 px; set to 120px */}
                  Steven Conaway
                </p>
                <p tw="text-center text-2xl font-bold text-slate-300 mx-auto">
                  I’m a Software Developer and a Junior at the University of
                  Notre Dame.
                </p>
                {/*
                <div
                  style={{ display: 'flex' }}
                  tw="border-slate-300 border-b w-full h-[1px]"
                ></div>

                <div
                  style={{ display: 'flex' }}
                  tw="flex flex-row justify-around mt-8"
                >
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
                </div> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
