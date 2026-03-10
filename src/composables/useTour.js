import { ref, onUnmounted } from 'vue'
import { driver } from 'driver.js'

// Module-level state for tour completion (persists across instances intentionally)
const tourCompleted = ref(localStorage.getItem('tourCompleted') === 'true')

export function useTour(layoutStore) {
  let driverInstance = null

  const tourSteps = [
    {
      element: '#v-step-0',
      popover: {
        description: 'You can adjust sidebar, or leave it closed 🙂',
        side: 'bottom',
        align: 'start'
      }
    },
    {
      element: '#v-step-1',
      popover: {
        description: 'Admin can check out his messages and tasks easily 😃',
        side: 'bottom',
        align: 'center'
      }
    },
    {
      element: '#v-step-2',
      popover: {
        description: 'Clickable cog can provide you with link to important pages 😄',
        side: 'bottom',
        align: 'end'
      }
    },
    {
      element: '.theme-helper-spinner',
      popover: {
        description: "It's a theme customizer sidebar, go inside it! ❤️",
        side: 'left',
        align: 'center',
        onNextClick: () => {
          if (layoutStore && !layoutStore.helperOpened) {
            layoutStore.toggleHelper(true)
          }
          setTimeout(() => {
            driverInstance?.moveNext()
          }, 400)
        }
      },
      onHighlighted: () => {
        const themeHelper = document.querySelector('.theme-helper')
        if (themeHelper) {
          themeHelper.style.zIndex = '10001'
        }
      },
      onDeselected: () => {
        const themeHelper = document.querySelector('.theme-helper')
        if (themeHelper) {
          themeHelper.style.zIndex = ''
        }
      }
    },
    {
      element: '#v-step-4',
      popover: {
        description: 'Easily adjust navbar 😃',
        side: 'left',
        align: 'start',
        onPrevClick: () => {
          if (layoutStore && layoutStore.helperOpened) {
            layoutStore.toggleHelper(false)
          }
          setTimeout(() => {
            driverInstance?.movePrevious()
          }, 400)
        }
      }
    },
    {
      element: '#v-step-5',
      popover: {
        description: 'Choose a color for navbar, create unique layout 😃',
        side: 'left',
        align: 'start'
      }
    },
    {
      element: '#v-step-6',
      popover: {
        description: "Also customize sidebar type, it's cool 🙂",
        side: 'left',
        align: 'start'
      }
    },
    {
      element: '#v-step-7',
      popover: {
        description: 'We also have different colors for sidebar, pick one from palette 😃',
        side: 'left',
        align: 'start'
      }
    },
    {
      element: '#v-step-8',
      popover: {
        description: 'Purchase our template if you like it, we appreciate it 😃!',
        side: 'left',
        align: 'start'
      }
    }
  ]

  function destroyTour() {
    if (driverInstance) {
      driverInstance.destroy()
      driverInstance = null
    }
  }

  function startTour() {
    if (tourCompleted.value || driverInstance) return

    driverInstance = driver({
      showProgress: false,
      animate: true,
      allowClose: true,
      overlayOpacity: 0.5,
      stagePadding: 10,
      stageRadius: 5,
      popoverClass: 'sing-tour-popover',
      prevBtnText: 'Back',
      nextBtnText: 'Next',
      doneBtnText: 'Finish',
      showButtons: ['next', 'previous', 'close'],
      
      onDestroyed: () => {
        tourCompleted.value = true
        driverInstance = null
        if (layoutStore?.helperOpened) {
          layoutStore.toggleHelper(false)
        }
        localStorage.setItem('tourCompleted', 'true')
      },
      steps: tourSteps
    })

    driverInstance.drive()
  }

  function shouldShowTour() {
    return !tourCompleted.value
  }

  function resetTour() {
    localStorage.removeItem('tourCompleted')
    tourCompleted.value = false
  }

  // Cleanup on component unmount
  onUnmounted(() => {
    destroyTour()
  })

  return {
    startTour,
    shouldShowTour,
    resetTour,
    destroyTour
  }
}
