import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const revalidate = 3600 // Cache pendant 1 heure

export async function GET() {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN
    const userId = process.env.INSTAGRAM_USER_ID

    if (!accessToken || !userId) {
      return NextResponse.json(
        { error: 'Instagram credentials not configured' },
        { status: 500 }
      )
    }

    // Récupérer les posts depuis l'API Instagram Graph
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp'
    const url = `https://graph.instagram.com/${userId}/media?fields=${fields}&access_token=${accessToken}&limit=12`

    const response = await fetch(url, {
      next: { revalidate: 3600 } // Cache pendant 1 heure
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Instagram API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to fetch Instagram posts', details: errorData },
        { status: response.status }
      )
    }

    const data = await response.json()

    // Filtrer pour ne garder que les images et vidéos
    const posts = data.data.filter((post: any) =>
      post.media_type === 'IMAGE' || post.media_type === 'VIDEO' || post.media_type === 'CAROUSEL_ALBUM'
    )

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error fetching Instagram feed:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
