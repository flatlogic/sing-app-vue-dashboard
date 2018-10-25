import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
// Core
import TypographyPage from '@/pages/Core/Typography/Typography';
import ColorsPage from '@/pages/Core/Colors/Colors';
import CoreGridPage from '@/pages/Core/Grid/Grid';
// Tables
import TablesBasicPage from '@/pages/Tables/Basic/Basic';
import TablesDynamicPage from '@/pages/Tables/Dynamic/Dynamic';
// Maps
import GoogleMapPage from '@/pages/Maps/Google/Google';
import VectorMapPage from '@/pages/Maps/Vector/Vector';
// Main
import VisitsPage from '@/pages/Visits/Visits';
import AnalyticsPage from '@/pages/Dashboard/Dashboard';
import WidgetsPage from '@/pages/Widgets/Widgets';
// Charts
import ChartsPage from '@/pages/Charts/Charts';
import FlotPage from '@/pages/Charts/Flot/Flot';
import MorrisPage from '@/pages/Charts/Morris/Morris';
import RickshawPage from '@/pages/Charts/Rickshaw/Rickshaw';
import SparklinePage from '@/pages/Charts/Sparkline/Sparkline';
import EasyPiePage from '@/pages/Charts/EasyPie/EasyPie';
import ProfilePage from '@/pages/Profile/Profile';
// Profile
import PackagePage from '@/pages/Package/Package';
// Email
import EmailPage from '@/pages/Email/Email';
// Ecommerce
import ProductsPage from '@/pages/Ecommerce/ProductsGrid/ProductsGrid';
import ProductPage from '@/pages/Ecommerce/ProductPage/ProductPage';
// Grid
import GridPagePage from '@/pages/Grid/Grid';
// Forms
import FormElementsPage from '@/pages/Forms/Elements/Elements';
import FormValidationPage from '@/pages/Forms/Validation/Validation';
import FormWizardPage from '@/pages/Forms/Wizard/Wizard';
// Extra
import CalendarPage from '@/pages/Extra/Calendar/Calendar';
import InvoicePage from '@/pages/Extra/Invoice/Invoice';
import SearchPage from '@/pages/Extra/Search/Search';
import TimelinePage from '@/pages/Extra/Timeline/Timeline';
import GalleryPage from '@/pages/Extra/Gallery/Gallery';
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';
// Ui
import AlertsPage from '@/pages/Ui/Alerts/Alerts';
import BadgePage from '@/pages/Ui/Badge/Badge';
import ButtonsPage from '@/pages/Ui/Buttons/Buttons';
import CardPage from '@/pages/Ui/Card/Card';
import CarouselPage from '@/pages/Ui/Carousel/Carousel';
import IconsPage from '@/pages/Ui/Icons/Icons';
import JumbotronPage from '@/pages/Ui/Jumbotron/Jumbotron';
import ListGroupsPage from '@/pages/Ui/ListGroups/ListGroups';
import ModalPage from '@/pages/Ui/Modal/Modal';
import NavPage from '@/pages/Ui/Nav/Nav';
import NavbarPage from '@/pages/Ui/Navbar/Navbar';
import NotificationsPage from '@/pages/Ui/Notifications/Notifications';
import PopoversPage from '@/pages/Ui/Popovers/Popovers';
import ProgressPage from '@/pages/Ui/Progress/Progress';
import TabsPage from '@/pages/Ui/Tabs/Tabs';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        // main pages
        {
          path: 'main/analytics',
          name: 'AnalyticsPage',
          component: AnalyticsPage,
        },
        {
          path: 'main/visits',
          name: 'VisitsPage',
          component: VisitsPage,
        },
        {
          path: 'main/widgets',
          name: 'WidgetsPage',
          component: WidgetsPage,
        },
        // package page
        {
          path: 'package',
          name: 'PackagePage',
          component: PackagePage,
        },
        // profile page
        {
          path: 'profile',
          name: 'ProfilePage',
          component: ProfilePage,
        },
        // email page
        {
          path: 'email',
          name: 'EmailPage',
          component: EmailPage,
        },
        // ecommerce pages
        {
          path: 'ecommerce/products',
          name: 'ProductsPage',
          component: ProductsPage,
        },
        {
          path: 'ecommerce/product',
          name: 'ProductPage',
          component: ProductPage,
        },
        // core pages
        {
          path: 'core/typography',
          name: 'TypographyPage',
          component: TypographyPage,
        },
        {
          path: 'core/colors',
          name: 'ColorsPage',
          component: ColorsPage,
        },
        {
          path: 'core/grid',
          name: 'CoreGridPage',
          component: CoreGridPage,
        },
        // ui pages
        {
          path: 'ui/alerts',
          name: 'AlertsPage',
          component: AlertsPage,
        },
        {
          path: 'ui/badge',
          name: 'BadgePage',
          component: BadgePage,
        },
        {
          path: 'ui/buttons',
          name: 'ButtonsPage',
          component: ButtonsPage,
        },
        {
          path: 'ui/card',
          name: 'CardPage',
          component: CardPage,
        },
        {
          path: 'ui/carousel',
          name: 'CarouselPage',
          component: CarouselPage,
        },
        {
          path: 'ui/jumbotron',
          name: 'JumbotronPage',
          component: JumbotronPage,
        },
        {
          path: 'ui/icons',
          name: 'IconsPage',
          component: IconsPage,
        },
        {
          path: 'ui/list-groups',
          name: 'ListGroupsPage',
          component: ListGroupsPage,
        },
        {
          path: 'ui/modal',
          name: 'ModalPage',
          component: ModalPage,
        },
        {
          path: 'ui/nav',
          name: 'NavPage',
          component: NavPage,
        },
        {
          path: 'ui/navbar',
          name: 'NavbarPage',
          component: NavbarPage,
        },
        {
          path: 'ui/notifications',
          name: 'NotificationsPage',
          component: NotificationsPage,
        },
        {
          path: 'ui/popovers',
          name: 'PopoversPage',
          component: PopoversPage,
        },
        {
          path: 'ui/progress',
          name: 'ProgressPage',
          component: ProgressPage,
        },
        {
          path: 'ui/tabs',
          name: 'TabsPage',
          component: TabsPage,
        },
        // forms
        {
          path: 'forms/elements',
          name: 'FormElementsPage',
          component: FormElementsPage,
        },
        {
          path: 'forms/validation',
          name: 'FormValidationPage',
          component: FormValidationPage,
        },
        {
          path: 'forms/wizard',
          name: 'FormWizardPage',
          component: FormWizardPage,
        },
        // Charts
        {
          path: 'charts/overview',
          name: 'ChartsPage',
          component: ChartsPage,
        },
        {
          path: 'charts/flot',
          name: 'FlotPage',
          component: FlotPage,
        },
        {
          path: 'charts/morris',
          name: 'MorrisPage',
          component: MorrisPage,
        },
        {
          path: 'charts/rickshaw',
          name: 'RickshawPage',
          component: RickshawPage,
        },
        {
          path: 'charts/sparkline',
          name: 'SparklinePage',
          component: SparklinePage,
        },
        {
          path: 'charts/easy-pie',
          name: 'EasyPiePage',
          component: EasyPiePage,
        },
        // grid page
        {
          path: 'grid',
          name: 'GridPage',
          component: GridPagePage,
        },
        // tables pages
        {
          path: 'tables/basic',
          name: 'TablesBasicPage',
          component: TablesBasicPage,
        },
        {
          path: 'tables/dynamic',
          name: 'TablesDynamicPage',
          component: TablesDynamicPage,
        },
        // maps pages
        {
          path: 'maps/google',
          name: 'GoogleMapPage',
          component: GoogleMapPage,
        },
        {
          path: 'maps/vector',
          name: 'VectorMapPage',
          component: VectorMapPage,
        },
        // extra pages
        {
          path: 'extra/calendar',
          name: 'CalendarPage',
          component: CalendarPage,
        },
        {
          path: 'extra/invoice',
          name: 'InvoicePage',
          component: InvoicePage,
        },
        {
          path: 'extra/search',
          name: 'SearchPage',
          component: SearchPage,
        },
        {
          path: 'extra/time-line',
          name: 'TimelinePage',
          component: TimelinePage,
        },
        {
          path: 'extra/gallery',
          name: 'GalleryPage',
          component: GalleryPage,
        },
      ],
    },
  ],
});
