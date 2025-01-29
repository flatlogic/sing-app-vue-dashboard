<template>
  <b-navbar toggleable="lg" class="header d-print-none">
    <b-navbar-brand href="/#/documentation" class="px-4">
      <span class="fw-semi-bold d-sm-down-none">Sing App Vue</span> &nbsp; Documentation
    </b-navbar-brand>
    <b-navbar-nav class="ms-auto d-md-down-none">
      <b-nav-item href="https://twitter.com/flatlogic" class="me-1">
        <img src="../assets/documentation/twitter-logo.svg" alt="twitter"/>
      </b-nav-item>
      <b-nav-item href="https://dribbble.com/flatlogic" class="me-1">
        <img src="../assets/documentation/dribble-logo.svg" alt="dribble"/>
      </b-nav-item>
      <b-nav-item href="https://dribbble.com/flatlogic" class="me-1">
        <img src="../assets/documentation/facebook-logo.svg" alt="facebook"/>
      </b-nav-item>
      <b-nav-item href="https://instagram.com/flatlogiccom/" class="me-1">
        <img src="../assets/documentation/instagram-logo.svg" alt="instagram"/>
      </b-nav-item>
      <b-nav-item href="https://www.linkedin.com/company/flatlogic/" class="me-1">
        <img src="../assets/documentation/linkedin-logo.svg" alt="linkedin"/>
      </b-nav-item>
      <b-nav-item href="https://github.com/flatlogic" class="me-3">
        <img src="../assets/documentation/github-logo.svg" alt="github"/>
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ms-auto ms-lg-0 flex-row">
      <b-nav-item href="https://demo.flatlogic.com/sing-app-vue" class="d-sm-down-none me-md-3 me-lg-0">
        <b-button variant="default">
          Live Preview
        </b-button>
      </b-nav-item>
      <b-nav-item href="https://flatlogic.com/templates/sing-app-vue" target="_blank" class="me-4">
        <b-button variant="warning" class="text-gray fw-semi-bold">
          Buy Now
        </b-button>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
  export default {
    name: 'DocHeader'
  }
</script>
