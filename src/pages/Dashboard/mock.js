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
      color: 'warning',
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
      content: 'Ken <span className="fw-semi-bold">accepts</span> your invitation',
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
      content: '4 <span className="fw-semi-bold">Private</span> Mails',
    },
    {
      id: 3,
      icon: 'comment',
      color: 'success',
      content: '3 <span className="fw-semi-bold">Comments</span> to your Post',
    },
    {
      id: 4,
      icon: 'cog',
      color: 'light',
      content: 'New <span className="fw-semi-bold">Version</span> of RNS app',
    },
    {
      id: 5,
      icon: 'bell',
      color: 'info',
      content: '15 <span className="fw-semi-bold">Notifications</span> from Social Apps',
    },
  ],
  table: [
    {
      id: 0,
      name: 'Mark Otto',
      email: 'ottoto@wxample.com',
      product: 'ON the Road',
      price: '$25 224.2',
      date: '11 May 2017',
      city: 'Otsego',
      status: 'Sent',
    },
    {
      id: 1,
      name: 'Jacob Thornton',
      email: 'thornton@wxample.com',
      product: 'HP Core i7',
      price: '$1 254.2',
      date: '4 Jun 2017',
      city: 'Fivepointville',
      status: 'Sent',
    },
    {
      id: 2,
      name: 'Larry the Bird',
      email: 'bird@wxample.com',
      product: 'Air Pro',
      price: '$1 570.0',
      date: '27 Aug 2017',
      city: 'Leadville North',
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Joseph May',
      email: 'josephmay@wxample.com',
      product: 'Version Control',
      price: '$5 224.5',
      date: '19 Feb 2018',
      city: 'Seaforth',
      status: 'Declined',
    },
    {
      id: 4,
      name: 'Peter Horadnia',
      email: 'horadnia@wxample.com',
      product: 'Let\'s Dance',
      price: '$43 594.7',
      date: '1 Mar 2018',
      city: 'Hanoverton',
      status: 'Sent',
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
    server: {
      1: {
        pct: 60,
        temp: 37,
        frequency: 3.3
      },
      2: {
        pct: 54,
        temp: 31,
        frequency: 3.3
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
  function generateRandomPicks(minPoint, maxPoint, picksAmount, xMax) {
    let x = 0;
    let y = 0;
    const result = [];
    const xStep = 1;
    const smoothness = 0.3;
    const pointsPerPick = Math.ceil(xMax / ((picksAmount * 2) + 1) / 2);

    const maxValues = [];
    const minValues = [];

    for (let i = 0; i < picksAmount; i += 1) {
      const minResult = minPoint + Math.random();
      const maxResult = maxPoint - Math.random();

      minValues.push(minResult);
      maxValues.push(maxResult);
    }

    let localMax = maxValues.shift(0);
    let localMin = 0;
    let yStep = parseFloat(((localMax - localMin) / pointsPerPick).toFixed(2));

    for (let j = 0; j < Math.ceil(xMax); j += 1) {
      result.push([x, y]);

      if ((y + yStep >= localMax) || (y + yStep <= localMin)) {
        y += yStep * smoothness;
      } else if ((result[result.length - 1][1] === localMax) || (result[result.length - 1][1] === localMin)) {
        y += yStep * smoothness;
      } else {
        y += yStep;
      }

      if (y > localMax) {
        y = localMax;
      } else if (y < localMin) {
        y = localMin;
      }

      if (y === localMin) {
        localMax = maxValues.shift(0) || localMax;

        const share = (localMax - localMin) / localMax;
        const p = share > 0.5 ? Math.round(pointsPerPick * 1.2) : Math.round(pointsPerPick * share);

        yStep = parseFloat(((localMax - localMin) / p).toFixed(2));
        yStep *= Math.abs(yStep);
      }

      if (y === localMax) {
        localMin = minValues.shift(0) || localMin;

        const share = (localMax - localMin) / localMax;
        const p = share > 0.5 ? Math.round(pointsPerPick * 1.5) : Math.round(pointsPerPick * 0.5);

        yStep = parseFloat(((localMax - localMin) / p).toFixed(2));
        yStep *= -1;
      }

      x += xStep;
    }

    return result;
  }

  const d1 = generateRandomPicks(0.2, 3, 4, 90);
  const d2 = generateRandomPicks(0.4, 3.8, 4, 90);
  const d3 = generateRandomPicks(0.2, 4.2, 3, 90);

  return [d1, d2, d3];
}
