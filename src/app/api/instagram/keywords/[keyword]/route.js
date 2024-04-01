import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { keyword } = params;
  const url = `https://instagram-data1.p.rapidapi.com/hashtag/search?keyword=${keyword}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f1cd554c92msh570b67ee95fa123p126c6djsn4d138eb347ce",
      "X-RapidAPI-Host": "instagram-data1.p.rapidapi.com",
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
