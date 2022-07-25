const hostApi = process.env.NODE_ENV === "development" ? "http://localhost" : "https://sing-generator-node.herokuapp.com";
const portApi = process.env.NODE_ENV === "development" ? 8080 : "";
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}/api`;
const redirectUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000/sing-app-vue" : "https://demo.flatlogic.com/sing-app-vue";

export default {
  hostApi,
  portApi,
  baseURLApi,
  redirectUrl,
  remote: "https://sing-generator-node.herokuapp.com",
  isBackend: process.env.VUE_APP_BACKEND,
  auth: {
      email: 'admin@flatlogic.com',
      password: 'password'
  },
  app: {
    sidebarTransitionTime: 300, //ms
    sidebarColors: {
      first: '#3D3D3D',
      second: '#4B505F',
      third: '#483CB6',
      fourth: '#EFF2F5',
      fifth: '#20AE8C'
    },
    navbarColors: {
      first: '#ffffff',
      second: '#E2E7EC',
      third: '#C9D1FB',
      fourth: '#C1C3CF',
      fifth: '#0C2236',
      sixth: '#6FB0F9'
    },
    colors: {
      dark: "#002B49",
      light: "#FFFFFF",
      sidebar: "#002B49",
      navbar: "#ffffff",
      sea: "#004472",
      sky: "#E9EBEF",
      wave: "#D1E7F6",
      rain: "#CCDDE9",
      middle: "#D7DFE6",
      black: "#13191D",
      salad: "#21AE8C",
      seaWave: "#483CB6",
      grad: "#4B505F",
      blueSky: "#EFF2F5",
      primary: "#6FB0F9",
      secondary: "#798892",
      success: "#26CD5F",
      info: "#10CFD0",
      warning: "#EBB834",
      danger: "#FF5574",
      inverse: "#30324C",
      textColor: "#495057",
      gray: "#D7DFE6",
      default: "#9083F7"
    },
    themeColors: [
      ['default','#002B49'],
      ['white', '#FFFFFF'],
      ['first','#004472'],
      ['second','#e9ebef'],
      ['third','#d1e7f5'],
      ['fourth','#ccdde9'],
      ['fifth','#d6dfe6'],
      ['sixth','#13191d'],
      ['seventh','#20ae8c'],
    ],
    chartColors: {
      axisColor: '#8EA1AB'
    }
  }
};
