import { NextResponse } from 'next/server';

export async function GET() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = 'UC_x5XG1OV2P6uZZ5FSM9Ttw'; // Replace with your actual channel ID if different

  if (!API_KEY) {
    return NextResponse.json({ error: 'YouTube API key is not configured' }, { status: 500 });
  }

  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error('YouTube API Error:', data.error);
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    const stats = data.items[0].statistics;

    return NextResponse.json({
      subscribers: stats.subscriberCount,
      views: stats.viewCount,
      videos: stats.videoCount,
    });
  } catch (error) {
    console.error('Failed to fetch YouTube stats from API', error);
    return NextResponse.json({ error: 'Failed to fetch YouTube stats' }, { status: 500 });
  }
} 