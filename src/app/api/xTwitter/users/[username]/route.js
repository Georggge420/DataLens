import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { username } = params;
  const url = `https://twitter241.p.rapidapi.com/user?username=${username}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e757c21034msh7ad415748f3a9c7p136597jsn91c4629b5364",
      "X-RapidAPI-Host": "twitter241.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    const simplifiedResult = {
      is_blue_verified: result.result.data.user.result.is_blue_verified,
      created_at: result.result.data.user.result.legacy.created_at,
      favourites_count: result.result.data.user.result.legacy.favourites_count,
      followers_count: result.result.data.user.result.legacy.followers_count,
      media_count: result.result.data.user.result.legacy.media_count,
      possibly_sensitive:
        result.result.data.user.result.legacy.possibly_sensitive,
      profile_image_url_https:
        result.result.data.user.result.legacy.profile_image_url_https,
    };

    return NextResponse.json(simplifiedResult);
  } catch (error) {
    console.error(error);
  }
}
