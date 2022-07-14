import SpotifyWebApi from 'spotify-web-api-node';

import { Song } from '@/types';

const authenticate = async () => {
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    // redirectUri: process.env.SPOTIFY_REDIRECT_URI
  });

  spotifyApi.setRefreshToken(process.env.SPOTIFY_REFRESH_TOKEN as string);

  const data = await spotifyApi.refreshAccessToken();
  const access_token = data.body[`access_token`];

  // console.log('The access token has been refreshed!');
  // console.log('access_token:', access_token);

  spotifyApi.setAccessToken(access_token);

  return spotifyApi;
};

export const getCurrentTrack = async () => {
  try {
    const spotifyApi = await authenticate();

    const playing = await spotifyApi.getMyCurrentPlayingTrack();

    // console.log(JSON.stringify(playing.body, null, 2));

    if (playing.body.currently_playing_type !== `track`) {
      return null;
    }

    let artist = '';

    if (playing.body.item.artists.length === 1)
      artist = playing.body.item.artists[0].name;
    else if (playing.body.item.artists.length === 2)
      artist = `${playing.body.item.artists[0].name} and ${playing.body.item.artists[1].name}`;
    else if (playing.body.item.artists.length > 2) {
      artist = playing.body.item.artists
        .map((a: any) => a.name)
        .join(', ')
        .replace(/,(?=[^,]*$)/, ', and');
    }

    const track: Song = {
      title: playing.body.item.name,
      artist,
      url: `https://song.link/s/${playing.body.item.id}`,
      isPlaying: playing.body.is_playing,
    };

    return track;
  } catch (err) {
    console.log(err);
    return null;
  }
};
