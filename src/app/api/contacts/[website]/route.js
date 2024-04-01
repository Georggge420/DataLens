import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { website } = params;
  const url = `https://website-social-scraper-api.p.rapidapi.com/contacts/?website=${website}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e757c21034msh7ad415748f3a9c7p136597jsn91c4629b5364",
      "X-RapidAPI-Host": "website-social-scraper-api.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return NextResponse.json({ result });
  } catch (error) {
    console.error(error);
  }
}
