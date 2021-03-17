<template>
    <div :class="{ 'theme-helper': true, 'theme-helper-opened': helperOpened }">
        <div class="theme-helper-toggler" @click="toggleHelper(!helperOpened)" id="v-step-3">
            <div class="theme-helper-spinner bg-primary text-white">
                <i class="la la-cog"></i>
                <i class="la la-cog fs-smaller"></i>
            </div>
        </div>
        <section class="widget theme-helper-content">
            <div class="widget-body mt-3">
                <h3 class="mb-3">Theme</h3>
                <div class="theme-settings">
                    <h5 style="position: static" id="v-step-4">Navbar Type</h5>
                    <div class="form-group row">
                      <div class="abc-radio">
                        <input type="radio" name="navbar-type" :value="navbarTypes.STATIC" id="navbar_static"
                               :checked="navbarType === navbarTypes.STATIC" @change="updateLayoutComponentType({component: layoutComponents.NAVBAR, type: navbarTypes.STATIC})">
                        <label for="navbar_static">Static</label>
                      </div>
                      <div class="abc-radio">
                        <input type="radio" name="navbar-type" :value="navbarTypes.FLOATING" id="navbar_floating"
                               :checked="navbarType === navbarTypes.FLOATING" @change="updateLayoutComponentType({component: layoutComponents.NAVBAR, type: navbarTypes.FLOATING})">
                        <label for="navbar_floating">Floating</label>
                      </div>
                    </div>

                    <h5 id="v-step-5">Navbar Color</h5>
                    <colorpicker
                        :colors="appConfig.themeColors"
                        :activeColor="navbarColorName"
                        @change="updateLayoutComponentColor({component: layoutComponents.NAVBAR, color: $event})"
                    ></colorpicker>

                    <h5 id="v-step-6">Sidebar Type</h5>
                    <div class="form-group row">
                      <div class="abc-radio">
                        <input type="radio" name="sidebar-type" :value="sidebarTypes.TRANSPARENT" id="sidebar_transparent"
                               :checked="sidebarType === sidebarTypes.TRANSPARENT"
                               @change="updateLayoutComponentType({component: layoutComponents.SIDEBAR, type: sidebarTypes.TRANSPARENT})">
                        <label for="sidebar_transparent">Transparent</label>
                      </div>
                      <div class="abc-radio">
                        <input type="radio" name="sidebar-type" :value="sidebarTypes.SOLID" id="sidebar_solid"
                               :checked="sidebarType === sidebarTypes.SOLID"
                               @change="updateLayoutComponentType({component: layoutComponents.SIDEBAR, type: sidebarTypes.SOLID})">
                        <label for="sidebar_solid">Solid</label>
                      </div>
                    </div>

                    <h5 id="v-step-7">Sidebar Color</h5>
                    <colorpicker
                        :colors="appConfig.themeColors"
                        :activeColor="sidebarColorName"
                        @change="updateLayoutComponentColor({component: layoutComponents.SIDEBAR, color: $event})"
                    ></colorpicker>
                </div>
                <div class="mt-4">
                    <a href="https://flatlogic.com/templates/sing-app-vue"
                    id="v-step-8"
                    target="_blank"
                    role="button"
                    class="btn btn-info btn-rounded-f btn-block fs-mini text-white">
                        Purchase
                    </a>
                    <a href="http://demo.flatlogic.com/sing-app-vue/#/documentation/"
                    target="_blank"
                    role="button"
                    class="btn btn-primary btn-rounded-f btn-block fs-mini">
                        Documentation
                    </a>
                </div>
                <div class="d-flex justify-content-between mt-lg">
                    <a role="button"
                    target="_blank"
                    href="https://flatlogic.com/contact"
                    class="btn btn-outline-default btn-rounded-f fs-mini text-muted d-flex align-items-center">
                        <i class="glyphicon glyphicon-headphones mr-xs"></i>
                        Support
                    </a>
                    <a role="button"
                    target="_blank"
                    href="https://github.com/flatlogic/sing-app-vue-dashboard"
                    class="btn btn-outline-default btn-rounded-f fs-mini text-muted d-flex align-items-center">
                        <i class="fa fa-github mr-xs"></i>
                        Github
                    </a>
                </div>
                <div class="mt-lg d-flex flex-column align-items-center theme-sharing">
                    <span class="fs-sm">
                        Thank you for sharing!
                    </span>
                    <div class="d-flexjustify-content-center text-light mt-2">
                        <a target="_blank"
                        href="https://twitter.com/intent/tweet?text=Admin%20dashboard%20template%20built%20with%20NodeJS,%20React%20and%20Bootstrap%204!&url=https://demo.flatlogic.com/sing-app/html-bs4/&via=flatlogic">
                            <i class="fa fa-twitter pr-1"></i>
                        </a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https://demo.flatlogic.com/sing-app/html-bs4/"
                        target="_blank">
                            <i class="fa fa-facebook pl-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Colorpicker from '../Colorpicker/Colorpicker';
const { mapState, mapActions } = createNamespacedHelpers('layout');

export default {
  name: 'Helper',
  components: {Colorpicker},
  computed: {
      ...mapState(['navbarColorName', 'sidebarColorName', 'navbarType', 'sidebarType', 'helperOpened'])
  },
  methods: {
      ...mapActions(['changeTheme', 'updateLayoutComponentType', 'updateLayoutComponentColor', 'toggleHelper'])
  }
};
</script>

<style src="./Helper.scss" lang="scss"></style>
