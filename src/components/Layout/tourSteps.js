export default function tourSteps(onCreateFn) {
  return [
    {
      target: '#v-step-0',
      content: 'You can adjust sidebar, or leave it closed 🙂',
      params: {
        onCreate: (data) => {
          onCreateFn(data.instance);
        }
      }
    },
    {
      target: '#v-step-1',
      content: 'Admin can check out his messages and tasks easily 😃'
    },
    {
      target: '#v-step-2',
      content: 'Clickable cog can provide you with link to important pages 😄'
    },
    {
      target: '#v-step-3',
      content: 'Check out chat, do not miss new ideas 🙂'
    },
    {
      target: '#v-step-4',
      content: 'It\'s a theme customizer sidebar, go inside it! ❤️',
      params: {
        placement: 'left',
        onCreate: (data) => {
          onCreateFn(data.instance);
        }
      }
    },
    {
      target: '#v-step-5',
      content: 'Easily adjust navbar 😃',
      params: {
        placement: 'left',
        enableScrolling: false,
        positionFixed: true,
        modifiers: {
          offset: {
            enabled: true,
            offset: '0,20'
          },
          preventOverflow: {enabled: false}
        },
        onCreate: (data) => {
          onCreateFn(data.instance);
        }
      }
    },
    {
      target: '#v-step-6',
      content: "Choose a color for navbar, create unique layout 😃️",
      params: {
        placement: 'left',
        enableScrolling: false,
        positionFixed: true,
        modifiers: {
          offset: {
            enabled: true,
            offset: '0,20'
          },
          preventOverflow: {enabled: false}
        },
        onCreate: (data) => {
          onCreateFn(data.instance);
        }
      }
    },
    {
      target: '#v-step-7',
      content: "Also customize sidebar type, it's cool 🙂",
      params: {
        placement: 'left',
        positionFixed: true,
        modifiers: {
          offset: {
            enabled: true,
            offset: '0,20'
          },
          preventOverflow: {enabled: false}
        },
        onCreate: (data) => {
          onCreateFn(data.instance);
        }
      }
    },
    {
      target: '#v-step-8',
      content: 'We also have different colors for sidebar, pick one from palette 😃',
      params: {
        placement: 'left',
        enableScrolling: false,
        positionFixed: true,
        modifiers: {
          offset: {
            enabled: true,
            offset: '0,20'
          },
          preventOverflow: {enabled: false}
        },
        onCreate: (data) => {
          onCreateFn(data.instance);
        }
      }
    },
    {
      target: '#v-step-9',
      content: 'Purchase out template if you like it, we appreciate it 😃!',
      params: {
        placement: 'left',
        enableScrolling: false,
        positionFixed: true,
        modifiers: {
          offset: {
            enabled: true,
            offset: '0,20'
          },
          preventOverflow: {enabled: false}
        },
        onCreate: (data) => {
          onCreateFn(data.instance);
        }
      }
    },
  ]
}
