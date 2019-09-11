import moment from 'moment';

export default {
  mainData: {
    default: [
        {
          value: 'A timestamp this widget was created: Apr 24, 19:07:07'
        },
        {
          value: 'A timestamp this widget was updated: Apr 24, 19:07:07'
        },
      ],
    shares: [
      {
        img: '/images/people/a1.jpg',
        name: 'Maikel Basso',
        comment: 'about 2 mins ago',
        type: 'danger'
      },
      {
        img: '/images/people/a2.jpg',
        name: 'Ianus Arendse',
        comment: 'about 42 mins ago',
        type: 'info'
      },
      {
        img: '/images/people/a3.jpg',
        name: 'Valdemar Landau',
        comment: 'one hour ago',
        type: 'success'
      },
      {
        img: '/images/people/a4.jpg',
        name: 'Rick Teagan',
        comment: '3 hours ago',
        type: 'warning'
      }
    ],
    autoload: {
      title: '<h3 class="text-center m-0" >Sign up, it&apos;s <strong>free</strong></h3>',
    },
    news: [
      {
        background: 'danger',
        icon: 'star',
        title: 'First Human Colony on Mars',
        description: 'First 700 people will take part in building first human settlement outside of Earth. That&apos;s awesome, right?',
        date: 'Mar 20, 18:46'
      },
      {
        background: 'info',
        icon: 'microphone',
        title: 'Light Blue reached $300',
        description: 'Light Blue Inc. shares just hit $300 price. &quot;This was inevitable. It should have happen sooner or later&quot; - says NYSE expert.',
        date: 'Sep 25, 11:59'
      },
      {
        background: 'success',
        icon: 'eye',
        title: 'No more spying',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: moment().format('MMM DD, hh:mm:ss')
      }
    ]
  },
  updatedData: {
    default: [
      {
        extraClass: 'text-muted',
        value: 'Simulating latency with tiny html block on the server-side.'
      },
      {
        value: 'A timestamp this widget was created: Apr 24, 19:07:07'
      },
      {
        value: 'A timestamp this widget was updated: ' + moment().format('MMM DD, hh:mm:ss')
      },
    ],
    shares: [
      {
        img: '/images/people/a6.jpg',
        name: 'Jenny Wilington',
        comment: 'just now',
        type: 'success',
        extraClass: 'animated fadeInDown bg-warning-light'
      },
      {
        img: '/images/people/a1.jpg',
        name: 'Maikel Basso',
        comment: 'about 2 mins ago',
        type: 'danger'
      },
      {
        img: '/images/people/a2.jpg',
        name: 'Ianus Arendse',
        comment: 'about 42 mins ago',
        type: 'info'
      },
      {
        img: '/images/people/a3.jpg',
        name: 'Valdemar Landau',
        comment: 'one hour ago',
        type: 'success'
      },
      {
        img: '/images/people/a4.jpg',
        name: 'Rick Teagan',
        comment: '3 hours ago',
        type: 'warning'
      }
    ],
    autoload: {
      title: '<h3 class="text-center no-margin animated bounceInDown">Sign up, <del>it\'s <strong>free</strong></del> and get <strong>$50 now!</strong></h3>',
      btnExtraClass: 'animated wobble'
    },
    news: [
      {
        extraClass: 'animated fadeInDown bg-warning-light',
        background: 'warning',
        icon: 'lock',
        title: 'Just now! Check update time',
        description: 'Check this news item timestamp. There is a small server part that generates current timestamp so it would be easier for you to see ajax widgets in action',
        date: 'Mar 20, 18:46'
      },
      {
        background: 'danger',
        icon: 'star',
        title: 'First Human Colony on Mars',
        description: 'First 700 people will take part in building first human settlement outside of Earth. That&apos;s awesome, right?',
        date: 'Mar 20, 18:46'
      },
      {
        background: 'info',
        icon: 'microphone',
        title: 'Light Blue reached $300',
        description: 'Light Blue Inc. shares just hit $300 price. &quot;This was inevitable. It should have happen sooner or later&quot; - says NYSE expert.',
        date: 'Sep 25, 11:59'
      },
      {
        background: 'success',
        icon: 'eye',
        title: 'No more spying',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: moment().format('MMM DD, hh:mm:ss')
      }
    ]
  }
}