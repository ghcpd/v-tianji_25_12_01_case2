import { useEffect, useState } from 'react'
import { useAppStore } from '@/store/useAppStore'
import { analyticsService } from '@/services/analyticsService'
import { AnalyticsData } from '@/types'
import Card from '@/components/Card'
import { formatCurrency, formatNumber, formatPercentage } from '@/utils/format'
import './Dashboard.css'

export default function Dashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const { loading, setLoading } = useAppStore()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await analyticsService.getDashboardData()
        setAnalytics(data)
      } catch (error) {
        console.error('Failed to fetch analytics:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [setLoading])

  if (loading || !analytics) {
    return <div className="dashboard-loading">Loading...</div>
  }

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-stats">
        <Card className="stat-card">
          <div className="stat-value">{formatNumber(analytics.totalUsers)}</div>
          <div className="stat-label">Total Users</div>
          <div className="stat-change positive">
            +{formatPercentage(analytics.growthRate)}
          </div>
        </Card>
        <Card className="stat-card">
          <div className="stat-value">{formatNumber(analytics.totalOrders)}</div>
          <div className="stat-label">Total Orders</div>
          <div className="stat-change positive">
            +{formatPercentage(analytics.growthRate)}
          </div>
        </Card>
        <Card className="stat-card">
          <div className="stat-value">
            {formatCurrency(analytics.totalRevenue)}
          </div>
          <div className="stat-label">Total Revenue</div>
          <div className="stat-change positive">
            +{formatPercentage(analytics.growthRate)}
          </div>
        </Card>
        <Card className="stat-card">
          <div className="stat-value">
            {formatNumber(analytics.activeProducts)}
          </div>
          <div className="stat-label">Active Products</div>
          <div className="stat-change neutral">—</div>
        </Card>
      </div>
      <div className="dashboard-content">
        <Card title="Top Products" className="dashboard-section">
          <div className="product-list">
            {analytics.topProducts.slice(0, 5).map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-info">
                  <div className="product-name">{product.name}</div>
                  <div className="product-meta">
                    {product.category} • {formatCurrency(product.price)}
                  </div>
                </div>
                <div className="product-rating">
                  ⭐ {product.rating.toFixed(1)} ({product.reviews})
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Recent Orders" className="dashboard-section">
          <div className="order-list">
            {analytics.recentOrders.slice(0, 5).map((order) => (
              <div key={order.id} className="order-item">
                <div className="order-info">
                  <div className="order-id">#{order.id.slice(0, 8)}</div>
                  <div className="order-user">{order.userName}</div>
                </div>
                <div className="order-details">
                  <div className="order-total">
                    {formatCurrency(order.total)}
                  </div>
                  <div className={`order-status order-status-${order.status}`}>
                    {order.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

