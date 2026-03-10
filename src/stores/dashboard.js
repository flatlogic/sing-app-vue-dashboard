import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import axios from 'axios'
import config from '../config'
import mock from '../pages/Dashboard/mock'

export const useDashboardStore = defineStore('dashboard', () => {
  const visits = ref({})
  const performance = reactive({ sdk: {}, integration: {} })
  const revenue = ref([])
  const mainChart = ref([])
  const isReceiving = ref(false)

  async function receiveDataRequest() {
    if (!config.isBackend) {
      receivingData()
      const data = await new Promise((resolve) => {
        resolve(mock.backendData)
      })
      receiveDataSuccess(data)
    } else {
      receivingData()
      try {
        const res = await axios.get('/analytics')
        receiveDataSuccess(res.data)
      } catch (error) {
        console.error('Failed to fetch analytics data:', error)
        isReceiving.value = false
      }
    }
  }

  function receiveDataSuccess(payload) {
    visits.value = payload.visits || {}
    Object.assign(performance, payload.performance || { sdk: {}, integration: {} })
    revenue.value = payload.revenue || []
    mainChart.value = payload.mainChart || []
    isReceiving.value = false
  }

  function receivingData() {
    isReceiving.value = true
  }

  return {
    visits,
    performance,
    revenue,
    mainChart,
    isReceiving,
    receiveDataRequest
  }
})
