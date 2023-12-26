import { getCurrentTrack } from '@/lib/spotify';
import {
  NextResponse,
  // NextRequest
} from 'next/server';

export async function GET() {
  // res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=10, stale-while-revalidate=59',
  // );

  // return NextResponse.json({ success: true, data: 'Hello' }, { status: 200 });

  try {
    const currentTrack = await getCurrentTrack();
    return NextResponse.json(
      { success: true, data: currentTrack },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59',
        },
      },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error },
      {
        status: 500,
        headers: {
          'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59',
        },
      },
    );
  }
}
