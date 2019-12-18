<template>
<div :class="[{root: true, chatOpen, sidebarClose, sidebarStatic}, 'sing-dashboard', 'sidebar-' + sidebarColorName, 'sidebar-' + sidebarType]">
  <Sidebar />
  <Helper />
  <div class="wrap">
    <Header />
    <Chat />
    <v-touch class="content" @swipe="handleSwipe" :swipe-options="{direction: 'horizontal'}">
      <breadcrumb-history></breadcrumb-history>
      <transition name="router-animation">
        <router-view />
      </transition>
      <footer class="contentFooter">
        Sing App Vue Admin Dashboard Template - Made by <a href="https://flatlogic.com" rel="nofollow noopener noreferrer" target="_blank">Flatlogic</a>
        </footer>
    </v-touch>
  </div>
<!--  <v-tour name="app-tour" :steps="steps" ></v-tour>-->
  <v-tour name="app-tour" :steps="steps" :options="tourOptions">
    <template slot-scope="tour">
      <transition name="fade">
        <v-step
            v-if="tour.currentStep === index"
            v-for="(step, index) of tour.steps"
            :key="index"
            :step="step"
            v-bind="tour"
        >
          <div slot="actions" class="d-flex">
            <b-button @click="tour.stop" variant="outline-secondary" size="xs">Stop</b-button>
            <div class="ml-auto">
              <b-button v-if="tour.currentStep !== 0 && tour.currentStep !== tour.steps.length - 1"
                        @click="tour.currentStep !== 5 ? tour.previousStep() : tourBackOutFromThemeCustomizer(tour)" variant="outline-secondary" size="xs" class="mr-2"
              >Back</b-button>
              <b-button v-if="tour.currentStep !== tour.steps.length - 1"
                        @click="tour.currentStep !== 4 ? tour.nextStep() : tourContinueWithinThemeCustomizer(tour)"
                        variant="warning" size="xs"
              >Next</b-button>
              <b-button v-else @click="tour.stop" variant="warning" size="xs">Finish</b-button>
            </div>

          </div>
        </v-step>
      </transition>
    </template>
  </v-tour>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('layout');

import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
import Chat from '@/components/Chat/Chat';
import Helper from '@/components/Helper/Helper';
import BreadcrumbHistory from '@/components/BreadcrumbHistory/BreadcrumbHistory';

import './Layout.scss';

export default {
  name: 'Layout',
  components: { Sidebar, Header, Chat, Helper, BreadcrumbHistory },
  data() {
    return {
      steps: [
        {
          target: '#v-step-0',
          content: 'You can adjust sidebar, or leave it closed 🤩'
        },
        {
          target: '#v-step-1',
          content: 'Admin can check out his messages and tasks easily 🤔'
        },
        {
          target: '#v-step-2',
          content: 'Clickable cog can provide you with link to important pages 🤠'
        },
        {
          target: '#v-step-3',
          content: 'Check out chat, do not miss new ideas 🧐'
        },
        {
          target: '#v-step-4',
          content: 'It\'s a theme customizer sidebar, go inside it! ❤️',
          params: {
            placement: 'left'
          }
        },
        {
          target: '#v-step-5',
          content: 'Easily adjust navbar 🤔',
           params: {
            placement: 'left',
             enableScrolling: false,
             positionFixed: true,
             modifiers: {
               preventOverflow: {enabled: false}
             }
          }
        },
        {
          target: '#v-step-6',
          content: "Choose a color for navbar, create unique layout ✌️",
           params: {
            placement: 'left',
             enableScrolling: false,
             positionFixed: true,
             modifiers: {
               preventOverflow: {enabled: false}
             }
          }
        },
        {
          target: '#v-step-7',
          content: "Also customize sidebar type, it's cool 👌",
           params: {
            placement: 'left',
             positionFixed: true,
             modifiers: {
               preventOverflow: {enabled: false}
             }
          }
        },
        {
          target: '#v-step-8',
          content: 'We also have different colors for sidebar, pick one from palette 😇',
           params: {
            placement: 'left',
             enableScrolling: false,
             positionFixed: true,
             modifiers: {
               preventOverflow: {enabled: false}
             }
          }
        },
        {
          target: '#v-step-9',
          content: 'Purchase out template if you like it, we appreciate it 🤗!',
           params: {
            placement: 'left',
             enableScrolling: false,
             positionFixed: true,
             modifiers: {
               preventOverflow: {enabled: false}
             }
          }
        },
      ],
      tourOptions: {
        startTimeout: 3500,
        labels: {
          buttonSkip: 'Skip',
          buttonPrevious: 'Back',
          buttonNext: 'Next',
          buttonStop: 'Finish'
        }
      }
    }
  },
  methods: {
    ...mapActions(['switchSidebar', 'handleSwipe', 'changeSidebarActive', 'toggleSidebar', 'toggleHelper']),
    handleWindowResize() {
      const width = window.innerWidth;

      if (width <= 768 && this.sidebarStatic) {
        this.toggleSidebar();
        this.changeSidebarActive(null);
      }
    },
    tourContinueWithinThemeCustomizer(tour) {
      if (this.helperOpened) {
        tour.nextStep();
      } else {
        tour.stop();
        this.toggleHelper(true);
        setTimeout(() => {
          const tour = this.$tours['app-tour'];
          tour.options.startTimeout = 0;
          tour.start(5);
        }, 400);
      }
    },
    tourBackOutFromThemeCustomizer(tour) {
      if (!this.helperOpened) {
        tour.previousStep();
      } else {
        tour.stop();
        this.toggleHelper(false);
        setTimeout(() => {
          const tour = this.$tours['app-tour'];
          tour.options.startTimeout = 0;
          tour.start(4);
        }, 400);
      }
    }
  },
  computed: {
    ...mapState(["sidebarClose", "sidebarStatic", "chatOpen", "sidebarColorName", "sidebarType", "helperOpened"]),
  },
  created() {
    const staticSidebar = JSON.parse(localStorage.getItem('sidebarStatic'));

    if (staticSidebar) {
      this.$store.state.layout.sidebarStatic = true;
    } else if (!this.sidebarClose) {
      setTimeout(() => {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }, 2500);
    }

    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
  },
  mounted() {
    this.$tours['app-tour'].start();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
};
</script>

<style src="./Layout.scss" lang="scss" />
