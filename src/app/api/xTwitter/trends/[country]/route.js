import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { country } = params;
  const url = `https://twitter-api45.p.rapidapi.com/trends.php?country=${country}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e757c21034msh7ad415748f3a9c7p136597jsn91c4629b5364",
      "X-RapidAPI-Host": "twitter-api45.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return NextResponse.json({ result });
    // console.log(result);
  } catch (error) {
    console.error(error);
  }
}
