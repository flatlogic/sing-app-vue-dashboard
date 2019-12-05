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
      sidebar: "#313947",
      navbar: "#ffffff",
      primary: "#547fff",
      secondary: "#798892",
      success: "#3abf94",
      info: "#9964e3",
      warning: "#ffc247",
      danger: "#f55d5d",
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
    ]
  }
};
