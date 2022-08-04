<template>
  <b-row>
    <b-col lg="9" xs="12">
      <h2>Navbar</h2>
      <p class="mb-4">Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar.
        Includes support for branding, navigation, and more, including support for our collapse plugin.</p>
      <vue-code-highlight>import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
  BDropdown,
  BDropdownItem,
  BDropdownDivider
} from 'bootstrap-vue';</vue-code-highlight>
      <b-tabs nav-class="bg-transparent" class="mb-5">
        <b-tab title="Example" active>
          <b-navbar toggleable="lg">
            <b-navbar-brand href="#">Sing</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ms-auto">
                <b-nav-item href="#">Components</b-nav-item>
                <b-nav-item href="#">Documentation</b-nav-item>
                <b-nav-item-dropdown text="Options" right>
                  <b-dropdown-item href="#">Option 1</b-dropdown-item>
                  <b-dropdown-item href="#">Option 2</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="#">Reset</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>{{decodeHtml(navbarCode)}}</vue-code-highlight>
        </b-tab>
      </b-tabs>
    </b-col>
    <p class="p-4">For more examples please refer to <a href="https://bootstrap-vue.js.org/docs/components/navbar/"
                                                        target="_blank"
                                                        rel="noopener noreferrer">Bootstrap Vue Navbar</a></p>
  </b-row>
</template>
<script>


  export default {
    name: 'DocNavbar',
    data() {
      return {
        navbarCode: '<b-navbar toggleable="lg">\n' +
          '  <b-navbar-brand href="#">Sing</b-navbar-brand>\n' +
          '  <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>\n' +
          '  <b-collapse id="nav-collapse" is-nav>\n' +
          '    <b-navbar-nav class="ms-auto">\n' +
          '      <b-nav-item href="#">Components</b-nav-item>\n' +
          '      <b-nav-item href="#">Documentation</b-nav-item>\n' +
          '      <b-nav-item-dropdown text="Options" right>\n' +
          '        <b-dropdown-item href="#">Option 1</b-dropdown-item>\n' +
          '        <b-dropdown-item href="#">Option 2</b-dropdown-item>\n' +
          '        <b-dropdown-divider></b-dropdown-divider>\n' +
          '        <b-dropdown-item href="#">Reset</b-dropdown-item>\n' +
          '      </b-nav-item-dropdown>\n' +
          '    </b-navbar-nav>\n' +
          '  </b-collapse>\n' +
          '</b-navbar>'
      }
    }
  }
</script>
