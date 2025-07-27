import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const GeologicaRegular = fetch(
  'https://stvn.ml/fonts/Geologica/Geologica-Regular.ttf',
).then((res) => res.arrayBuffer());
const GeologicaBold = fetch(
  'https://stvn.ml/fonts/Geologica/Geologica-Bold.ttf',
).then((res) => res.arrayBuffer());
// const GeologicaBlack = fetch(
//   'https://stvn.ml/fonts/Geologica/Geologica-Black.ttf',
// ).then((res) => res.arrayBuffer());

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: 'Geologica',
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
                <div style={{ display: 'flex' }}>
                  <p tw="text-center text-4xl text-slate-300 mx-auto">
                    Hi,{` `}
                    I’m
                  </p>
                </div>
                <div style={{ display: 'flex', fontWeight: 'bold' }} tw="my-4">
                  <p tw="text-center text-8xl text-white mx-auto">
                    Steven Conaway
                  </p>
                </div>
                <div style={{ display: 'flex' }}>
                  <p tw="text-center text-3xl text-slate-300 mx-auto">
                    I just graduated from the University of Notre Dame with a
                    degree in Computer Engineering. Now, I&apos;m working as an
                    Application Engineer at Cadence Design Systems.
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
      fonts: [
        {
          name: 'Geologica',
          data: await GeologicaBold,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Geologica',
          data: await GeologicaRegular,
          weight: 400,
          style: 'normal',
        },
        // {
        //   name: 'Geologica',
        //   data: await GeologicaBlack,
        //   weight: 900,
        //   style: 'normal',
        // },
      ],
    },
  );
}
