import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { hashtag } = params;
  const url = `https://instagram-data1.p.rapidapi.com/hashtag/info?hashtag=${hashtag}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e757c21034msh7ad415748f3a9c7p136597jsn91c4629b5364",
      "X-RapidAPI-Host": "instagram-data1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    const simplifiedResult = {
      count: result.count,
      id: result.data.id,
      name: result.data.name,
      allow_following: result.data.allow_following,
      non_violating: result.data.non_violating,
      formatted_media_count: result.data.formatted_media_count,
    };

    return NextResponse.json({ simplifiedResult });
  } catch (error) {
    console.error(error);
  }
}
