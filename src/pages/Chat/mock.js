import { subHours, subDays, subMinutes, formatISO } from 'date-fns';

import p1 from '../../assets/chat/1.png';
import p2 from '../../assets/chat/2.png';
import p3 from '../../assets/chat/3.png';
import p4 from '../../assets/chat/4.png';
import p7 from '../../assets/chat/7.png';
import p8 from '../../assets/chat/8.png';

import awesome_image from '../../assets/chat/awesome-meme.jpg';

const positions = ['Operations manager', 'Accountant', 'Office manager', 'Marketing manager',
  'CEO & Founder', 'Web Developer'];

const oneOfPosition = () => positions[Math.floor(Math.random() * positions.length)];

const dialogCommonData = {
  isGroup: false,
  notifications: true,
  images: [],
  links: [],
  files: [
    {
      id: 1,
      name: 'Diagram_0126.jpg',
      url: 'Diagram_0126.jpg'
    },
    {
      id: 2,
      name: 'Diagram_0127.jpg',
      url: 'Diagram_0127.jpg'
    },
    {
      id: 3,
      name: 'Diagram_0128.jpg',
      url: 'Diagram_0128.jpg'
    },
    {
      id: 4,
      name: 'Dynamic_tables_result.pdf',
      url: 'Dynamic_tables_result.pdf'
    },
    {
      id: 5,
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
    },
    prevOnline: subHours(new Date(), 1)
  }
};

export const user = {
  id: 1,
  name: 'Alex',
  surname: 'Lesli',
  username: 'alexlesli',
  ...userCommonData('alexlesli'),
  avatar: p2
};

export let users = [
  user,
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
    isOnline: false,
  },
  {
    id: 4,
    name: 'Jane',
    surname: 'Bredly',
    username: 'J_Bredly',
    avatar: p7,
    isOnline: false,
  },
  {
    id: 5,
    name: 'John',
    surname: 'Hubbard',
    username: 'J_Hubbard',
    avatar: p4,
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

users = users.map((u) => {
  return {
    ...u,
    ...userCommonData(u.username),
    position: oneOfPosition()
  };
});

export const chats = [
  {
    id: 1,
    name: 'Light Blue Group',
    users: [2,3,4,5,1,6],
    ...dialogCommonData,
    createdAt: formatISO(subMinutes(subDays(new Date(), 1), 5)),
    createdBy: 3,
    isGroup: true,
    messages: [
      {
        id: 1,
        userId: 6,
        text: 'Hello, @John. Can you help me with Light Blue project? I cannot understand how it works.',
        timestamp: formatISO(subMinutes(subDays(new Date(), 1), 5))
      },
      {
        id: 2,
        userId: 4,
        text: 'Hi, @Darrell. It\'s too easy. I can explain it too you if you have some minutes.',
        timestamp: formatISO(subMinutes(subDays(new Date(), 1), 3))
      },
      {
        id: 3,
        userId: 5,
        text: '',
        attachments: [
          {
            id: 1,
            type: 'image',
            src: awesome_image
          }
        ],
        timestamp: formatISO(subMinutes(subDays(new Date(), 1), 2))
      },
      {
        id: 4,
        userId: 1,
        text: 'Guys did you see the new update of the Sing App from our competitors?',
        timestamp: formatISO(subMinutes(new Date(), 2))
      }
    ]
  },
  {
    id: 2,
    name: 'React Native',
    users: [1, 4, 6],
    ...dialogCommonData,
    createdAt: formatISO(subMinutes(subDays(new Date(), 1), 5)),
    createdBy: 4,
    isGroup: true,
    messages: [
      {
        id: 1,
        userId: 6,
        text: 'Hello, @John. Can you help me with Light Blue project? I cannot understand how it works.',
        timestamp: formatISO(subMinutes(subDays(new Date(), 1), 5))
      },
      {
        id: 2,
        userId: 4,
        text: 'Hi, @Darrell. It\'s too easy. I can explain it too you if you have some minutes.',
        timestamp: formatISO(subMinutes(subDays(new Date(), 1), 3))
      }
    ]
  },
  {
    id: 3,
    name: 'Common',
    users: [1, 4, 6],
    ...dialogCommonData,
    createdAt: formatISO(subMinutes(subDays(new Date(), 1), 5)),
    createdBy: 6,
    isGroup: true,
    messages: [
      {
        id: 1,
        userId: 6,
        text: 'Hello, @John. Can you help me with Light Blue project? I cannot understand how it works.',
        timestamp: formatISO(subMinutes(subDays(new Date(), 1), 5))
      },
      {
        id: 2,
        userId: 4,
        text: 'Hi, @Darrell. It\'s too easy. I can explain it too you if you have some minutes.',
        timestamp: formatISO(subMinutes(subDays(new Date(), 1), 3))
      }
    ]
  },
  {
    id: 31,
    name: 'Bugs and Issues',
    users: [1, 2, 3],
    ...dialogCommonData,
    createdAt: formatISO(subMinutes(subDays(new Date(), 1), 5)),
    createdBy: 6,
    isGroup: true,
    messages: [
      {
        id: 1,
        userId: 6,
        text: 'Hello, @John. Can you help me with Light Blue project? I cannot understand how it works.',
        timestamp: formatISO(subMinutes(subDays(new Date(), 1), 5))
      },
      {
        id: 2,
        userId: 4,
        text: 'Hi, @Darrell. It\'s too easy. I can explain it too you if you have some minutes.',
        timestamp: formatISO(subMinutes(subDays(new Date(), 1), 3))
      }
    ]
  },
  {
    id: 4,
    users: [1, 2],
    ...dialogCommonData,
    messages: [
      {
        id: 1,
        userId: 1,
        text: "How can we help? We're here for you!",
        timestamp: formatISO(subMinutes(subDays(new Date(), 1), 5))
      },
      {
        id: 2,
        userId: 2,
        text: 'Hey John, I am looking for the best admin template.\n' +
          'Could you help me to find it out?',
        timestamp: formatISO(subMinutes(subDays(new Date(), 1), 3))
      },
      {
        id: 3,
        userId: 2,
        text: 'It should be Bootstrap 4 compatible',
        timestamp: formatISO(subMinutes(subDays(new Date(), 1), 2))
      },
      {
        id: 4,
        userId: 1,
        text: 'Absolutely!',
        timestamp: formatISO(subMinutes(new Date(), 2))
      },
      {
        id: 5,
        userId: 1,
        text: 'Modern admin is the responsive bootstrap 4 admin template!',
        timestamp: formatISO(subMinutes(new Date(), 1))
      }
    ]
  },
  {
    id: 5,
    users: [1, 3],
    ...dialogCommonData,
    messages: [
      {
        id: 1,
        userId: 3,
        text: 'If it takes long you can mail m...',
        timestamp: formatISO(subMinutes(subDays(new Date(), 2), 5))
      }
    ]
  },
  {
    id: 6,
    users: [1, 4],
    ...dialogCommonData,
    messages: [
      {
        id: 1,
        userId: 4,
        text: 'If it takes long you can mail m...',
        timestamp: formatISO(subMinutes(subDays(new Date(), 3), 5))
      }
    ]
  },
  {
    id: 7,
    users: [1, 5],
    ...dialogCommonData,
    messages: [
      {
        id: 1,
        userId: 5,
        text: 'If it takes long you can mail m...',
        timestamp: formatISO(subMinutes(subDays(new Date(), 4), 5))
      }
    ]
  },
  {
    id: 8,
    users: [1, 6],
    ...dialogCommonData,
    messages: [
      {
        id: 1,
        userId: 5,
        text: 'If it takes long you can mail m...',
        timestamp: formatISO(subMinutes(subDays(new Date(), 5), 5))
      }
    ]
  },
];
