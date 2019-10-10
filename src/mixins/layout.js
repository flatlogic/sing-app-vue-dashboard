import { DashboardThemes } from '../store/layout';

export default {
    data: () => {
        return {
            dashboardThemes: DashboardThemes
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