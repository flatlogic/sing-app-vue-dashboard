<template>
    <div :class="{ 'theme-helper': true, 'theme-helper-opened': opened }">
        <section class="widget theme-helper-content">
            <header class="theme-helper-header d-flex p-0">
                <div class="theme-helper-toggler" @click="toggle">
                    <div class="theme-helper-spinner bg-warning text-white">
                        <i class="la la-cog"></i>
                        <i class="la la-cog fs-smaller"></i>
                    </div>
                </div>
                <h6>Theme</h6>
            </header>
            <div class="widget-body mt-3">
                <div class="theme-switcher">
                    <div class="theme mb-3">
                        <input :checked="dashboardTheme === dashboardThemes.LIGHT"
                               v-on:click="changeTheme(dashboardThemes.LIGHT)"
                               type="radio"
                               id="css-light"
                               :value="dashboardThemes.LIGHT"
                               name="theme-variant"
                               aria-label="Sing Light"
                        />
                        <label for="css-light">
                            <img class="theme-image" src="../../assets/theme-light.png" alt="light theme"/>
                        </label>
                    </div>
                    <div class="theme mb-3">
                        <input :checked="dashboardTheme === dashboardThemes.DARK"
                               v-on:click="changeTheme(dashboardThemes.DARK)"
                               type="radio"
                               id="css-dark"
                               :value="dashboardThemes.DARK"
                               name="theme-variant"
                               aria-label="Sing Dark"
                        />
                        <label for="css-dark">
                            <img class="theme-image" src="../../assets/theme-dark.png" alt="dark theme"/>
                        </label>
                    </div>
                </div>
                <div class="mt-4">
                    <a href="https://flatlogic.com/admin-dashboards/sing-app-vue"
                    target="_blank"
                    role="button"
                    class="btn btn-warning btn-rounded-f btn-block fs-mini text-white">
                        Purchase
                    </a>
                    <a href="http://demo.flatlogic.com/sing-app/documentation/"
                    target="_blank"
                    role="button"
                    class="btn btn-inverse btn-rounded-f btn-block fs-mini">
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
                    href="https://github.com/flatlogic/sing-app"
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
const { mapState, mapActions } = createNamespacedHelpers('layout');

export default {
    name: 'Helper',
    data() {
        return {
            opened: false
        }
    },
    computed: {
        ...mapState(['dashboardTheme'])
    },
    methods: {
        toggle() {
            this.opened = !this.opened;
        },
        ...mapActions(['changeTheme'])
    }
};
</script>

<style src="./Helper.scss" lang="scss" scoped />
