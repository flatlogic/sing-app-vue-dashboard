export default {
  tasks: [
    {
      id: 0,
      type: 'Meeting',
      title: 'Meeting with Andrew Piker',
      time: '9:00',
    },
    {
      id: 1,
      type: 'Call',
      title: 'Call with HT Company',
      time: '12:00',
    },
    {
      id: 2,
      type: 'Meeting',
      title: 'Meeting with Zoe Alison',
      time: '14:00',
    },
    {
      id: 3,
      type: 'Interview',
      title: 'Interview with HR',
      time: '15:00',
    },
  ],
  bigStat: [
    {
      product: 'Light Blue',
      total: '4,232',
      color: 'primary',
      registrations: {
        value: 830,
        profit: true,
      },
      bounce: {
        value: 4.5,
        profit: false,
      },
    },
    {
      product: 'Sing App',
      total: '754',
      color: 'danger',
      registrations: {
        value: 30,
        profit: true,
      },
      bounce: {
        value: 2.5,
        profit: true,
      },
    },
    {
      product: 'RNS',
      total: '1,025',
      color: 'info',
      registrations: {
        value: 230,
        profit: true,
      },
      bounce: {
        value: 21.5,
        profit: false,
      },
    },
  ],
  notifications: [
    {
      id: 0,
      icon: 'thumbs-up',
      color: 'primary',
      content: 'Ken <span class="fw-semi-bold">accepts</span> your invitation',
    },
    {
      id: 1,
      icon: 'file',
      color: 'success',
      content: 'Report from LT Company',
    },
    {
      id: 2,
      icon: 'envelope',
      color: 'danger',
      content: '4 <span class="fw-semi-bold">Private</span> Mails',
    },
    {
      id: 3,
      icon: 'comment',
      color: 'success',
      content: '3 <span class="fw-semi-bold">Comments</span> to your Post',
    },
    {
      id: 4,
      icon: 'cog',
      color: 'light',
      content: 'New <span class="fw-semi-bold">Version</span> of RNS app',
    },
    {
      id: 5,
      icon: 'bell',
      color: 'info',
      content: '15 <span class="fw-semi-bold">Notifications</span> from Social Apps',
    },
  ],
  backendData: {
    visits: {
      count: 4.332,
      logins: 830,
      sign_out_pct: 0.5,
      rate_pct: 4.5
    },
    performance: {
      sdk: {
        this_period_pct: 60,
        last_period_pct: 30,
      },
      integration: {
        this_period_pct: 40,
        last_period_pct: 55,
      }
    },
    revenue: getRevenueData(),
    mainChart: getMainChartData()
  }
};

function getRevenueData() {
  const data = [];
  const seriesCount = 3;
  const accessories = ['SMX', 'Direct', 'Networks'];

  for (let i = 0; i < seriesCount; i += 1) {
    data.push({
      label: accessories[i],
      data: Math.floor(Math.random() * 100) + 1,
    });
  }

  return data;
}

function getMainChartData() {
  function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
    var array = new Array(length).fill();
    let lastValue;

    return array.map((_, index) => {
      let randomValue = Math.floor(Math.random() * multiplier + 1);

      while (
        randomValue <= min ||
        randomValue >= max ||
        (lastValue && randomValue - lastValue > maxDiff)
        ) {
        randomValue = Math.floor(Math.random() * multiplier + 1);
      }

      lastValue = randomValue;

      return [index, randomValue];
    });
  }

  const d1 = getRandomData(31, 3500, 6500, 7500, 1000);
  const d2 = getRandomData(31, 1500, 7500, 7500, 1500);
  const d3 = getRandomData(31, 1500, 7500, 7500, 1500);
  return [d1, d2, d3];
}
