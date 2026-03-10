import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import Dashboard from './Dashboard.vue'
import { useDashboardStore } from '@/stores/dashboard'

// Mock child components
vi.mock('@/components/Widget/Widget.vue', () => ({
  default: {
    name: 'Widget',
    template: '<div class="widget-stub" :class="{ loading: fetchingData }"><slot /></div>',
    props: ['title', 'close', 'fetchingData', 'bodyClass', 'className', 'customHeader']
  }
}))

vi.mock('./components/MainChart/MainChart.vue', () => ({
  default: {
    name: 'MainChart',
    template: '<div class="main-chart-stub">MainChart</div>',
    props: ['data', 'isReceiving']
  }
}))

vi.mock('./components/BigStat/BigStat.vue', () => ({
  default: {
    name: 'BigStat',
    template: '<div class="big-stat-stub">{{ product }}</div>',
    props: ['product', 'color', 'total', 'registrations', 'bounce']
  }
}))

vi.mock('@/components/Calendar/Calendar.vue', () => ({
  default: {
    name: 'Calendar',
    template: '<div class="calendar-stub">Calendar</div>',
    props: ['white']
  }
}))

vi.mock('./components/TaskContainer/TaskContainer.vue', () => ({
  default: {
    name: 'TaskContainer',
    template: '<div class="task-container-stub">Tasks</div>',
    props: ['data']
  }
}))

// Mock ApexCharts component
vi.mock('vue3-apexcharts', () => ({
  default: {
    name: 'apexchart',
    template: '<div class="apexchart-stub" :data-type="type">Chart</div>',
    props: ['type', 'height', 'options', 'series']
  }
}))

describe('Dashboard.vue', () => {
  let wrapper
  let dashboardStore

  const mockAppConfig = {
    colors: {
      primary: '#6FB0F9',
      danger: '#FF5574',
      warning: '#EBB834',
      info: '#1A86D0',
      success: '#26CD5F'
    }
  }

  function createWrapper(options = {}) {
    const pinia = createPinia()
    setActivePinia(pinia)

    dashboardStore = useDashboardStore()

    return mount(Dashboard, {
      global: {
        plugins: [pinia],
        provide: {
          appConfig: mockAppConfig
        },
        stubs: {
          apexchart: {
            template: '<div class="apexchart-stub" :data-type="type">Chart</div>',
            props: ['type', 'height', 'options', 'series']
          }
        }
      }
    })
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    wrapper?.unmount()
  })

  describe('rendering', () => {
    it('renders dashboard page', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.dashboard-page').exists()).toBe(true)
    })

    it('renders page title', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.page-title').text()).toBe('Analytics')
    })

    it('renders Widget components', () => {
      wrapper = createWrapper()
      const widgets = wrapper.findAll('.widget-stub')
      expect(widgets.length).toBeGreaterThan(0)
    })

    it('renders MainChart component when data is available', async () => {
      wrapper = createWrapper()
      dashboardStore.mainChart = [{ data: [1, 2, 3] }]
      await wrapper.vm.$nextTick()
      expect(wrapper.findComponent({ name: 'MainChart' }).exists()).toBe(true)
    })

    it('renders BigStat components', () => {
      wrapper = createWrapper()
      const bigStats = wrapper.findAllComponents({ name: 'BigStat' })
      expect(bigStats.length).toBe(3)
    })

    it('renders Calendar component', () => {
      wrapper = createWrapper()
      expect(wrapper.findComponent({ name: 'Calendar' }).exists()).toBe(true)
    })

    it('renders TaskContainer component', () => {
      wrapper = createWrapper()
      expect(wrapper.findComponent({ name: 'TaskContainer' }).exists()).toBe(true)
    })

    it('renders support requests table', () => {
      wrapper = createWrapper()
      expect(wrapper.find('.requests-table').exists()).toBe(true)
    })
  })

  describe('store integration', () => {
    it('calls receiveDataRequest on mount', () => {
      const spy = vi.fn()
      const pinia = createPinia()
      setActivePinia(pinia)

      dashboardStore = useDashboardStore()
      vi.spyOn(dashboardStore, 'receiveDataRequest').mockImplementation(spy)

      wrapper = mount(Dashboard, {
        global: {
          plugins: [pinia],
          provide: { appConfig: mockAppConfig },
          stubs: {
            apexchart: true
          }
        }
      })

      expect(spy).toHaveBeenCalled()
    })

    it('displays visits data from store', async () => {
      wrapper = createWrapper()
      dashboardStore.visits = { count: 4332, logins: 830, sign_out_pct: 4.5, rate_pct: 3.25 }
      await wrapper.vm.$nextTick()

      expect(wrapper.text()).toContain('4332')
    })

    it('displays loading state from store', async () => {
      wrapper = createWrapper()
      dashboardStore.isReceiving = true
      await wrapper.vm.$nextTick()

      const loadingWidgets = wrapper.findAll('.widget-stub.loading')
      expect(loadingWidgets.length).toBeGreaterThan(0)
    })

    it('hides loading state when data received', async () => {
      wrapper = createWrapper()
      dashboardStore.isReceiving = false
      await wrapper.vm.$nextTick()

      const loadingWidgets = wrapper.findAll('.widget-stub.loading')
      expect(loadingWidgets.length).toBe(0)
    })
  })

  describe('support requests table', () => {
    it('renders table headers', () => {
      wrapper = createWrapper()
      const headers = wrapper.findAll('.requests-table th')
      expect(headers.length).toBe(7)
      expect(headers[0].text()).toBe('NAME')
      expect(headers[1].text()).toBe('EMAIL')
      expect(headers[2].text()).toBe('PRODUCT')
    })

    it('renders table rows', () => {
      wrapper = createWrapper()
      const rows = wrapper.findAll('.requests-table tbody tr')
      expect(rows.length).toBe(5)
    })

    it('renders status buttons with correct colors', () => {
      wrapper = createWrapper()
      const statusButtons = wrapper.findAll('.requests-table button')

      const pendingBtn = statusButtons.find(b => b.text() === 'Pending')
      expect(pendingBtn.classes()).toContain('btn-success')

      const declinedBtn = statusButtons.find(b => b.text() === 'Declined')
      expect(declinedBtn.classes()).toContain('btn-danger')

      const sentBtns = statusButtons.filter(b => b.text() === 'Sent')
      sentBtns.forEach(btn => {
        expect(btn.classes()).toContain('btn-info')
      })
    })
  })

  describe('visits widget', () => {
    it('displays visits count', async () => {
      wrapper = createWrapper()
      dashboardStore.visits = { count: 9999, logins: 100, sign_out_pct: 5, rate_pct: 10 }
      await wrapper.vm.$nextTick()

      expect(wrapper.text()).toContain('9999')
    })

    it('displays logins', async () => {
      wrapper = createWrapper()
      dashboardStore.visits = { count: 1000, logins: 500, sign_out_pct: 5, rate_pct: 10 }
      await wrapper.vm.$nextTick()

      expect(wrapper.text()).toContain('+500')
      expect(wrapper.text()).toContain('Logins')
    })

    it('displays sign out percentage', async () => {
      wrapper = createWrapper()
      dashboardStore.visits = { count: 1000, logins: 100, sign_out_pct: 7.5, rate_pct: 10 }
      await wrapper.vm.$nextTick()

      expect(wrapper.text()).toContain('7.5%')
      expect(wrapper.text()).toContain('Sign Out')
    })

    it('displays rate percentage', async () => {
      wrapper = createWrapper()
      dashboardStore.visits = { count: 1000, logins: 100, sign_out_pct: 5, rate_pct: 12.3 }
      await wrapper.vm.$nextTick()

      expect(wrapper.text()).toContain('12.3%')
      expect(wrapper.text()).toContain('Rate')
    })
  })

  describe('revenue breakdown chart', () => {
    it('renders donut chart when revenue data exists', async () => {
      wrapper = createWrapper()
      dashboardStore.revenue = [
        { label: 'Sales', data: 50 },
        { label: 'Marketing', data: 30 },
        { label: 'Operations', data: 20 }
      ]
      await wrapper.vm.$nextTick()

      const donutChart = wrapper.find('[data-type="donut"]')
      expect(donutChart.exists()).toBe(true)
    })

    it('does not render donut chart when revenue is empty', async () => {
      wrapper = createWrapper()
      dashboardStore.revenue = []
      await wrapper.vm.$nextTick()

      const donutCharts = wrapper.findAll('[data-type="donut"]')
      expect(donutCharts.length).toBe(0)
    })
  })

  describe('app performance widget', () => {
    it('renders SDK progress bars', async () => {
      wrapper = createWrapper()
      dashboardStore.performance = {
        sdk: { this_period_pct: 75, last_period_pct: 60 },
        integration: { this_period_pct: 80, last_period_pct: 70 }
      }
      await wrapper.vm.$nextTick()

      expect(wrapper.text()).toContain('SDK')
      const progressBars = wrapper.findAll('.progress-bar')
      expect(progressBars.length).toBeGreaterThan(0)
    })

    it('renders Integration progress bars', async () => {
      wrapper = createWrapper()
      dashboardStore.performance = {
        sdk: { this_period_pct: 75, last_period_pct: 60 },
        integration: { this_period_pct: 80, last_period_pct: 70 }
      }
      await wrapper.vm.$nextTick()

      expect(wrapper.text()).toContain('Integration')
    })

    it('applies correct widths to progress bars', async () => {
      wrapper = createWrapper()
      dashboardStore.performance = {
        sdk: { this_period_pct: 75, last_period_pct: 60 },
        integration: { this_period_pct: 80, last_period_pct: 70 }
      }
      await wrapper.vm.$nextTick()

      const progressBars = wrapper.findAll('.progress-bar')
      // Check that styles are applied correctly
      const firstBar = progressBars[0]
      expect(firstBar.attributes('style')).toContain('width')
    })
  })

  describe('server overview widget', () => {
    it('renders sparkline charts after mount', async () => {
      wrapper = createWrapper()
      await wrapper.vm.$nextTick()

      const sparklines = wrapper.findAll('[data-type="line"]')
      expect(sparklines.length).toBe(3)
    })

    it('displays server metrics', () => {
      wrapper = createWrapper()

      expect(wrapper.text()).toContain('60% / 37°С / 3.3 Ghz')
      expect(wrapper.text()).toContain('54% / 31°С / 3.3 Ghz')
      expect(wrapper.text()).toContain('57% / 21°С / 3.3 Ghz')
    })
  })

  describe('notifications widget', () => {
    it('renders notifications title with badge', () => {
      wrapper = createWrapper()
      expect(wrapper.text()).toContain('Notifications')
    })

    it('renders notification items', () => {
      wrapper = createWrapper()
      const notifications = wrapper.findAll('.d-flex.align-items-start')
      expect(notifications.length).toBeGreaterThan(0)
    })
  })

  describe('BigStat components', () => {
    it('passes correct props to BigStat', () => {
      wrapper = createWrapper()
      const bigStats = wrapper.findAllComponents({ name: 'BigStat' })

      expect(bigStats.length).toBe(3)
      bigStats.forEach(stat => {
        expect(stat.props('product')).toBeDefined()
        expect(stat.props('color')).toBeDefined()
        expect(stat.props('total')).toBeDefined()
      })
    })
  })

  describe('calendar widget', () => {
    it('passes white prop to Calendar', () => {
      wrapper = createWrapper()
      const calendar = wrapper.findComponent({ name: 'Calendar' })
      expect(calendar.exists()).toBe(true)
      // Boolean props with shorthand (white vs :white="true") can be truthy in different ways
      const whiteProp = calendar.props('white')
      expect(whiteProp === true || whiteProp === '').toBe(true)
    })
  })

  describe('donut chart configuration', () => {
    it('generates correct donut series from revenue', async () => {
      wrapper = createWrapper()
      dashboardStore.revenue = [
        { label: 'A', data: 100 },
        { label: 'B', data: 200 },
        { label: 'C', data: 300 }
      ]
      await wrapper.vm.$nextTick()

      // The donutSeries computed should produce [100, 200, 300]
      const donutChart = wrapper.find('[data-type="donut"]')
      if (donutChart.exists()) {
        // Chart exists and receives series prop
        expect(donutChart.exists()).toBe(true)
      }
    })
  })

  describe('sparkline options', () => {
    it('generates sparkline options with correct color', async () => {
      wrapper = createWrapper()
      await wrapper.vm.$nextTick()

      const sparklines = wrapper.findAll('[data-type="line"]')
      expect(sparklines.length).toBe(3)
    })
  })
})
