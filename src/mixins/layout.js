import { NavbarTypes, SidebarTypes, LayoutComponents, NavbarColorSchemes } from '../store/layout';
import config from '../config';

export default {
    data: () => {
        return {
            navbarTypes: NavbarTypes,
            navbarColorSchemes: NavbarColorSchemes,
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
