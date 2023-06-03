import { ImageResponse } from 'next/server';

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
            <div
              style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,.65)' }}
              tw="relative flex flex-col items-center justify-center w-full h-full min-h-[80vh] p-4"
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'center',
                  maxWidth: '600px',
                }}
                tw="py-8"
              >
                <div style={{ display: 'flex', fontWeight: 'bold' }}>
                  <p tw="text-center text-4xl font-bold text-slate-300 mx-auto">
                    Hi,{` `}
                    I’m
                  </p>
                </div>
                <div style={{ display: 'flex', fontWeight: 'bold' }} tw="my-4">
                  <p tw="text-center text-7xl font-bold text-white mx-auto">
                    Steven Conaway
                  </p>
                </div>
                <div style={{ display: 'flex', fontWeight: 'bold' }}>
                  <p tw="text-center text-2xl font-bold text-slate-300 mx-auto">
                    I’m a Software Developer and a Junior at the University of
                    Notre Dame.
                  </p>
                </div>
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
