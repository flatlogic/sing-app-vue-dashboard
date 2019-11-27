import { DashboardThemes, NavbarTypes, SidebarTypes, LayoutComponents } from '../store/layout';
import config from '../config';

export default {
    data: () => {
        return {
            dashboardThemes: DashboardThemes,
            navbarTypes: NavbarTypes,
            sidebarTypes: SidebarTypes,
            layoutComponents: LayoutComponents,
            appConfig: config.app,
        }
    },
  methods: {
    decodeHtml(html) {
      let txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }
  }
};
