import moment from 'moment';

import p1 from '../../assets/chat/1.png';
import p2 from '../../assets/chat/2.png';
import p3 from '../../assets/chat/3.png';
import p4 from '../../assets/chat/4.png';
import p5 from '../../assets/chat/5.png';
import p6 from '../../assets/chat/6.png';
import p7 from '../../assets/chat/7.png';
import p8 from '../../assets/chat/8.png';
import p9 from '../../assets/chat/9.png';

const positions = ['Operations manager', 'Accountant', 'Office manager', 'Marketing manager',
  'CEO & Founder', 'Web Developer'];

const oneOfPosition = () => positions[Math.floor(Math.random() * positions.length)];

function getRandomDayFromPrevMonth() {
  let randomDay = Math.floor(Math.random() * Math.floor(moment().subtract(1, 'months').daysInMonth() + 1));
  return moment([moment().year(),moment().month() - 1,randomDay]);
}

const dialogCommonData = {
  notifications: true,
  images: [],
  links: [],
  files: [
    {
      name: 'Diagram_0126.jpg',
      url: 'Diagram_0126.jpg'
    },
    {
      name: 'Diagram_0127.jpg',
      url: 'Diagram_0127.jpg'
    },
    {
      name: 'Diagram_0128.jpg',
      url: 'Diagram_0128.jpg'
    },
    {
      name: 'Dynamic_tables_result.pdf',
      url: 'Dynamic_tables_result.pdf'
    },
    {
      name: 'Diagram_product_management.pdf',
      url: 'Diagram_product_management.pdf'
    }
  ],
};

const userCommonData = (username) => {
  return {
    email: `${username}@gmail.com`,
    tel: '+375 29 123 45 67',
    company: 'HighPark Inc',
    social: {
      facebook: `https://www.facebook.com/${username}_lorem_ipsum`,
      twitter: `https://twitter.com/${username}_lorem_ipsum`,
      linkedin: `https://www.linkedin.com/in/${username}_lorem_ipsum/`
    }
  }
};

export const user = {
  id: 1,
  name: 'Alex',
  surname: 'Lesli',
  username: 'alexlesli',
  ...userCommonData('alexlesli'),
  dialogs: [
    {
      id: 1,
      withId: 2,
      ...dialogCommonData,
      messages: [
        {
          id: 1,
          owner: true,
          text: 'How can we help? We’re here for you!',
          timestamp: moment().subtract(1, 'd').subtract(5, 'm')
        },
        {
          id: 2,
          owner: false,
          text: 'Hey John, I am looking for the best admin template.\n' +
            'Could you help me to find it out?',
          timestamp: moment().subtract(1, 'd').subtract(3, 'm')
        },
        {
          id: 3,
          owner: false,
          text: 'It should be Bootstrap 4 compatible',
          timestamp: moment().subtract(1, 'd').subtract(2, 'm')
        },
        {
          id: 4,
          owner: true,
          text: 'Absolutely!',
          timestamp: moment().subtract(2, 'm')
        },
        {
          id: 4,
          owner: true,
          text: 'Modern admin is the responsive bootstrap 4 admin template!',
          timestamp: moment().subtract(1, 'm')
        }
      ]
    },
    {
      id: 2,
      withId: 3,
      ...dialogCommonData,
      messages: [
        {
          id: 1,
          owner: false,
          text: 'If it takes long you can mail m...',
          timestamp: getRandomDayFromPrevMonth()
        }
      ]
    },
    {
      id: 3,
      withId: 4,
      ...dialogCommonData,
      messages: [
        {
          id: 1,
          owner: false,
          text: 'If it takes long you can mail m...',
          timestamp: getRandomDayFromPrevMonth()
        }
      ]
    },
    {
      id: 4,
      withId: 5,
      ...dialogCommonData,
      messages: [
        {
          id: 1,
          owner: false,
          text: 'If it takes long you can mail m...',
          timestamp: getRandomDayFromPrevMonth()
        }
      ]
    },
  ]
};

export const users = [
  {
    id: 2,
    name: 'Jane',
    surname: 'Rowlis',
    username: 'J_Rowlis',
    avatar: p8,
    isOnline: true
  },
  {
    id: 3,
    name: 'Sam',
    surname: 'Fisher',
    username: 'S_Fisher',
    avatar: p1,
    isOnline: false
  },
  {
    id: 4,
    name: 'Jane',
    surname: 'Bredly',
    username: 'J_Bredly',
    avatar: p7,
    isOnline: false
  },
  {
    id: 5,
    name: 'John',
    surname: 'Hubbard',
    username: 'J_Hubbard',
    avatar: p2,
    isOnline: true
  },
  {
    id: 6,
    name: 'Darrell',
    surname: 'Jackson',
    username: 'D_Jackson',
    avatar: p3,
    isOnline: true
  },
];

users.forEach((u) => {
  u = {
    ...u,
    ...userCommonData(u.username),
    position: oneOfPosition()
  };
});

export const groups = [];
