<template>
  <div class="sidebar-wrapper">
    <nav
        :class="{sidebar: true, sidebarStatic, sidebarOpened}"
        @mouseenter="sidebarMouseEnter"
        @mouseleave="sidebarMouseLeave"
    >
      <header class="logo">
        <router-link to="/app/main/analytics"><span class="primary-word">Sing</span> <span class="secondary-word"> App</span></router-link>
      </header>

      <h5 class="navTitle first">
        APP
      </h5>
      <ul class="nav">
        <NavLink
            :activeItem="activeItem"
            header="Dashboard"
            link="/app/main"
            iconName="flaticon-home"
            index="main"
            icon-img="sidebar/Outline/Home.svg"
            :childrenLinks="[
          { header: 'Analytics', link: '/app/main/analytics' },
          { header: 'Visits', link: '/app/main/visits' },
          { header: 'Widgets', link: '/app/main/widgets' },
        ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="Chat"
            link="/app/chat"
            iconName="flaticon-message-circle"
            icon-img="sidebar/Outline/Chat.svg"
            index="chat"
            label="awesome"
            labelColor="success"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="E-commerce"
            link="/app/ecommerce"
            iconName="flaticon-shopping-bag"
            icon-img="sidebar/Outline/Bank.svg"
            index="ecommerce"
            :childrenLinks="[
          { header: 'Product Management', link: '/app/ecommerce/management' },
          { header: 'Products Grid', link: '/app/ecommerce/products' },
          { header: 'Product Page', link: '/app/ecommerce/product' },
        ]"
        />
        <NavLink
          :activeItem="activeItem"
          header="Sing Package"
          link="/app/package"
          iconName="flaticon-layers-2"
          icon-img="sidebar/Outline/Stack.svg"
          index="package"
          isHeader
        />
        <NavLink
          :activeItem="activeItem"
          header="Profile"
          link="/app/profile"
          iconName="flaticon-person"
          icon-img="sidebar/Outline/User.svg"
          index="profile"
          isHeader
        />
        <NavLink
          :activeItem="activeItem"
          header="Email"
          link="/app/email"
          iconName="flaticon-email"
          icon-img="sidebar/Outline/Menu.svg"
          index="email"
          badge="9"
          isHeader
        />
        <NavLink
          :activeItem="activeItem"
          header="Documentation"
          link="/documentation"
          iconName="flaticon-documentation"
          icon-img="sidebar/Outline/Document.svg"
          index="documentation"
          label="new"
          labelColor="info"
          isHeader
        />
        <h5 class="navTitle">TEMPLATE</h5>
        <NavLink
            :activeItem="activeItem"
            header="Core"
            link="/app/core"
            iconName="flaticon-core"
            icon-img="sidebar/Outline/Envelope.svg"
            index="core"
            :childrenLinks="[
          { header: 'Typography', link: '/app/core/typography' },
          { header: 'Colors', link: '/app/core/colors' },
          { header: 'Grid', link: '/app/core/grid' },
        ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="UI Elements"
            link="/app/ui"
            iconName="flaticon-ui"
            icon-img="sidebar/Outline/Image.svg"
            index="ui"
            :childrenLinks="[
          { header: 'Alerts', link: '/app/ui/alerts' },
          { header: 'Badge', link: '/app/ui/badge' },
          { header: 'Buttons', link: '/app/ui/buttons' },
          { header: 'Card', link: '/app/ui/card' },
          { header: 'Carousel', link: '/app/ui/carousel' },
          { header: 'Jumbotron', link: '/app/ui/jumbotron' },
          { header: 'Icons', link: '/app/ui/icons' },
          { header: 'List Groups', link: '/app/ui/list-groups' },
          { header: 'Modal', link: '/app/ui/modal' },
          { header: 'Nav', link: '/app/ui/nav' },
          { header: 'Navbar', link: '/app/ui/navbar' },
          { header: 'Notifications', link: '/app/ui/notifications' },
          { header: 'Pagination', link: '/app/tables/dynamic' },
          { header: 'Popovers & Tooltips', link: '/app/ui/popovers' },
          { header: 'Progress', link: '/app/ui/progress' },
          { header: 'Tabs & Accordion', link: '/app/ui/tabs' },
        ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="Forms"
            link="/app/forms"
            iconName="flaticon-forms"
            icon-img="sidebar/Outline/Columns.svg"
            index="forms"
            :childrenLinks="[
          { header: 'Form Elements', link: '/app/forms/elements' },
          { header: 'Form Validation', link: '/app/forms/validation' },
          { header: 'Forms Wizard', link: '/app/forms/wizard' },
        ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="Charts"
            link="/app/charts"
            iconName="flaticon-charts"
            icon-img="sidebar/Outline/Chart-pie-alt.svg"
            index="charts"
            :childrenLinks="[
          { header: 'Charts Overview', link: '/app/charts/overview' },
          { header: 'Apex Charts', link: '/app/charts/apex' },
          { header: 'Echarts', link: '/app/charts/echarts' },
          { header: 'Highcharts', link: '/app/charts/highcharts' },
        ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="Grid"
            link="/app/grid"
            iconName="flaticon-grid"
            icon-img="sidebar/Outline/Layout.svg"
            index="grid"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Tables"
            link="/app/tables"
            iconName="flaticon-equal-1"
            icon-img="sidebar/Outline/Rows.svg"
            index="tables"
            :childrenLinks="[
          { header: 'Tables Basic', link: '/app/tables/basic' },
          { header: 'Tables Dynamic', link: '/app/tables/dynamic' },
        ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="Maps"
            link="/app/maps"
            iconName="flaticon-pin-1"
            icon-img="sidebar/Outline/Location.svg"
            index="maps"
            :childrenLinks="[
          { header: 'Google Maps', link: '/app/maps/google' },
          { header: 'Vector Maps', link: '/app/maps/amcharts' },
        ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="Extra"
            link="/app/extra"
            iconName="flaticon-extra"
            icon-img="sidebar/Outline/Fire.svg"
            index="extra"
            :childrenLinks="[
          { header: 'Calendar', link: '/app/extra/calendar' },
          { header: 'Invoice', link: '/app/extra/invoice' },
          { header: 'Login Page', link: '/extra/login' },
          { header: 'Error Page', link: '/error' },
          { header: 'Gallery', link: '/app/extra/gallery' },
          { header: 'Search Result', link: '/app/extra/search' },
          { header: 'Time Line', link: '/app/extra/time-line' },
        ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="Menu Levels"
            link="/app/menu"
            iconName="flaticon-list-2"
            icon-img="sidebar/Outline/Menu.svg"
            index="menu"
            :childrenLinks="[
          {
            header: 'Level 1.1', link: '/app/menu/level1',
          },
          {
            header: 'Level 1.2',
            link: '/app/menu/level_12',
            index: 'level_12',
            childrenLinks: [
              {
                header: 'Level 2.1',
                link: '/app/menu/level_12/level_21',
                index: 'level_21',
              },
              {
                header: 'Level 2.2',
                link: '/app/menu/level_12/level_22',
                index: 'level_22',
                childrenLinks: [
                  {
                    header: 'Level 3.1',
                    link: '/app/menu/level_12/level_22/level_31',
                    index: 'level_31',
                  },
                  {
                    header: 'Level 3.2',
                    link: '/app/menu/level_12/level_22/level_32',
                    index: 'level_32 ',
                  },
                ],
              },
              {
                header: 'Level 2.3',
                link: '/app/menu/level_12/level_23',
                index: 'level_23',
              },
            ],
          },
        ]"
        />
      </ul>
      <p>
      <h5 class="navTitle">
        LABELS
      </h5>
      <ul class="sidebarLabels">
        <li>
          <a href="#">
            <i class="fa fa-circle text-danger"/>
            <span class="labelName">Core</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-circle text-primary"/>
            <span class="labelName">UI Elements</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-circle text-success"/>
            <span  class="labelName">Forms</span>
          </a>
        </li>
      </ul>
      <h5 class="navTitle">
        PROJECTS
      </h5>
      <div class="sidebarAlerts">
        <b-alert
            v-for="alert in alerts"
            :key="alert.id"
            class="sidebarAlert" variant="transparent"
            show dismissible
        >
          <span>{{alert.title}}</span><br/>
          <b-progress class="sidebarProgress progress-xs mt-1"
                      :variant="alert.color" :value="alert.value" :max="100"/>
          <small>{{alert.footer}}</small>
        </b-alert>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import isScreen from '@/core/screenHelper';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink},
  data() {
    return {
      alerts: [
        {
          id: 0,
          title: 'Sales Report',
          value: 15,
          footer: 'Calculating x-axis bias... 65%',
          color: 'danger',
        },
        {
          id: 1,
          title: 'Personal Responsibility',
          value: 20,
          footer: 'Provide required notes',
          color: 'primary',
        },
      ]
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
    sidebarMouseEnter() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(false);
        this.setActiveByRoute();
      }
    },
    sidebarMouseLeave() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarStatic: state => state.sidebarStatic,
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
