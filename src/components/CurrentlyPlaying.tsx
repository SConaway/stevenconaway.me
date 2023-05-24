'use client';

import { useEffect, useState } from 'react';

import { Song } from '@/types';

export default function CurrentlyPlaying() {
  const [currentTrack, setCurrentTrack] = useState<Song | null>(null);

  console.log('currentTrack:', currentTrack);

  // get song
  useEffect(() => {
    const getSong = async () => {
      // get song from api
      const json = await fetch('/api/currentlyPlaying');
      const data = (await json.json()) as
        | { data: Song; success: true }
        | { success: false; error: string }; // include this to make sure the data is correct

      // set song
      if (data.success) setCurrentTrack(data.data);
      else console.log('error fetching song:', data.error);
    };

    getSong();
  }, []);

  return (
    <>
      {currentTrack && currentTrack.title && (
        <span className="text-sm">
          {` `}
          {currentTrack.isPlaying
            ? ` (Right now, I’m listening `
            : ` (Most recently, I was listening `}
          to{` `}
          <a href={currentTrack.url}>
            <span className="underline transition-colors underline-offset-2 decoration-zinc-200 hover:decoration-zinc-400 hover:text-zinc-400">
              <i>{currentTrack.title}</i> by {currentTrack.artist}
            </span>
          </a>
          {')'}
        </span>
      )}
    </>
  );
}
