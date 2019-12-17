const hostApi = process.env.NODE_ENV === "development" ? "http://localhost" : "https://flatlogic-node-backend.herokuapp.com";
const portApi = process.env.NODE_ENV === "development" ? 8080 : "";
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}`;

export default {
  hostApi,
  portApi,
  baseURLApi,
  remote: "https://flatlogic-node-backend.herokuapp.com",
  isBackend: process.env.VUE_APP_BACKEND,
  auth: {
      email: 'admin@flatlogic.com',
      password: 'password'
  },
  app: {
    colors: {
      sidebar: "#002B49",
      navbar: "#ffffff",
      primary: "#005792",
      secondary: "#798892",
      success: "#21AE8C",
      info: "#1A86D0",
      warning: "#FDA700",
      danger: "#FD5F00",
      inverse: "#002B49",
      textColor: "#495057",
      gray: "#D7DFE6"
    },
    themeColors: [
      ['gray','#313947'],
      ['white','#FFFFFF'],
      ['purple','#B077FF'],
      ['blue','#547FFF'],
      ['red','#F55D5D'],
      ['yellow','#FFC247'],
      ['green','#3ABF94'],
      ['sea','#3D5C70'],
    ],
    chartColors: {
      axisColor: '#8EA1AB'
    }
  }
};
