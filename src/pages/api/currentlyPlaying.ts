import { getCurrentTrack } from '@/lib/spotify';
import type { NextApiRequest, NextApiResponse } from 'next';

const currentlyPlayingAPI = async (
  _req: NextApiRequest,
  res: NextApiResponse,
) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );

  const currentTrack = await getCurrentTrack();

  res.status(200).json({ success: true, data: currentTrack });
};

export default currentlyPlayingAPI;
