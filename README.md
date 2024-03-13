# My Portfolio

![image of portfolio](https://stvn.ml/api/opengraph-image)

## Features

- uses spotify api to display my currently playing song
- uses nextjs 14's app routing
- uses nextjs's new image component to optimize the images (especially the main one)

## Setup
Most of the setup is similar to any Next.JS project. I have it hosted on Vercel, so there was no
configuration needed for the main deployment. The only thing I had to set up myself was the Spotify
integration.

First, I created an application on the [Spotify Developer Portal](https://developer.spotify.com/dashboard).
From there, I used the
[spotify-web-api-node's Authorization Code Flow](https://github.com/thelinmichael/spotify-web-api-node?tab=readme-ov-file#authorization-code-flow)
to obtain a Refresh Token. The refresh token and Client ID/Secret are entered in the Vercel project
settings as:
1. `SPOTIFY_CLIENT_ID`
2. `SPOTIFY_CLIENT_SECRET`
3. `SPOTIFY_REFRESH_TOKEN`.

