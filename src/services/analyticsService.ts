import { apiService } from '@/services/api'
import { AnalyticsData } from '@/types'

export const analyticsService = {
  getDashboardData: async (): Promise<AnalyticsData> => {
    return apiService.get<AnalyticsData>('/analytics/dashboard')
  },
}
