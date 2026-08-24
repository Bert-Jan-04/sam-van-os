type CountResponse = {
  pageviews: number
  visitors: number
}

type RouteRow = {
  route: string
  pageviews: number
  visitors: number
}

function isoDate(daysAgo: number) {
  const d = new Date()
  d.setUTCDate(d.getUTCDate() - daysAgo)
  return d.toISOString().slice(0, 10)
}

async function queryWebAnalytics<T>(path: string, params: Record<string, string>): Promise<T | null> {
  const token = process.env.VERCEL_API_TOKEN
  const projectId = process.env.VERCEL_PROJECT_ID
  if (!token || !projectId) return null

  const url = new URL(`https://api.vercel.com/v1/query/web-analytics/${path}`)
  url.searchParams.set('projectId', projectId)
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value)
  }

  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 300 },
    })
    if (!res.ok) return null
    const json = await res.json()
    return json.data as T
  } catch {
    return null
  }
}

export async function getSiteAnalytics() {
  const [count30d, topRoutes7d] = await Promise.all([
    queryWebAnalytics<CountResponse>('visits/count', { since: isoDate(30), until: isoDate(0) }),
    queryWebAnalytics<RouteRow[]>('visits/aggregate', {
      since: isoDate(7),
      until: isoDate(0),
      by: 'route',
      limit: '5',
    }),
  ])

  return {
    available: count30d !== null,
    pageviews30d: count30d?.pageviews ?? 0,
    visitors30d: count30d?.visitors ?? 0,
    topRoutes7d: topRoutes7d ?? [],
  }
}
