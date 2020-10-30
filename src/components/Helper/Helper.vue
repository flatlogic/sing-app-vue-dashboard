<template>
    <div :class="{ 'theme-helper': true, 'theme-helper-opened': opened }">
        <div class="theme-helper-toggler" @click="toggle">
            <div class="theme-helper-spinner bg-primary text-white">
                <i class="la la-cog"></i>
                <i class="la la-cog fs-smaller"></i>
            </div>
        </div>
      <section class="widget theme-helper-content">
            <div class="widget-body mt-3">
              <h6>Configuration</h6>
                <div class="mt-4">
                    <a href="https://flatlogic.com/templates/sing-app-vue"
                    target="_blank"
                    role="button"
                    class="btn btn-success btn-rounded-f btn-block fs-mini text-white">
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
export default {
    name: 'Helper',
    data() {
        return {
            opened: false,
        }
    },
    methods: {
        toggle() {
            this.opened = !this.opened;
        }
    }
};
</script>

<style src="./Helper.scss" lang="scss"></style>
