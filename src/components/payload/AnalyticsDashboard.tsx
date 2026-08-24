import { getSiteAnalytics } from '@/lib/getVercelAnalytics'

export async function AnalyticsDashboard() {
  const stats = await getSiteAnalytics()

  if (!stats.available) {
    return (
      <div className="analytics-widget">
        <p className="analytics-widget__empty">
          Bezoekersstatistieken zijn nog niet gekoppeld (Vercel Analytics niet geconfigureerd).
        </p>
      </div>
    )
  }

  return (
    <div className="analytics-widget">
      <h3 className="analytics-widget__title">Bezoekersstatistieken</h3>
      <div className="analytics-widget__cards">
        <div className="analytics-widget__card">
          <span className="analytics-widget__value">{stats.visitors30d}</span>
          <span className="analytics-widget__label">Bezoekers (30 dagen)</span>
        </div>
        <div className="analytics-widget__card">
          <span className="analytics-widget__value">{stats.pageviews30d}</span>
          <span className="analytics-widget__label">Paginaweergaven (30 dagen)</span>
        </div>
      </div>
      {stats.topRoutes7d.length > 0 && (
        <div className="analytics-widget__routes">
          <span className="analytics-widget__label">Populairste pagina&apos;s (7 dagen)</span>
          <table className="analytics-widget__table">
            <tbody>
              {stats.topRoutes7d.map((row) => (
                <tr key={row.route}>
                  <td>{row.route}</td>
                  <td>{row.pageviews}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
