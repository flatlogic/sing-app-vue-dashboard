<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>UI Navbar</b-breadcrumb-item>
    </b-breadcrumb>
    <b-row>
      <b-col xs='12' md='9'>
        <Widget
          title="<h5>Navbar <span className='fw-semi-bold'>Example</span></h5>"
          close collapse customHeader
        >
          <p>Here’s what you need to know before getting started with the navbar:</p>
          <ul>
            <li>Navbars require a wrapping <code>&lt;b-navbar&gt;</code>
              with <code>toggleable=&quot;*&quot;</code> for
              responsive collapsing and color scheme classes.</li>
            <li>Navbars and their contents are fluid by default. Use optional containers
              to limit their horizontal width.</li>
            <li>Use our spacing and flex utility classes for controlling
              spacing and alignment within navbars.</li>
            <li>Navbars are responsive by default, but you can
              easily modify them to change that. Responsive
              behavior depends on our Collapse JavaScript plugin.</li>
            <li>Navbars are hidden by default when printing. Force
              them to be printed by adding <code>.d-print</code>
            to the <code>.navbar</code>. See the display utility class.</li>
          </ul>
          <b-navbar class="mt px-2" toggleable="md" type="light" variant="light">
            <b-navbar-brand href="#">Navbar</b-navbar-brand>
            <b-navbar-toggle class="ml-auto" target="nav_collapse1"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse1">
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">Home</b-nav-item>
                <b-nav-item href="#">Features</b-nav-item>
                <b-nav-item href="#">Pricing</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </Widget>
      </b-col>
      <b-col xs='12' md='9'>
        <Widget
          title="<h5>Navbar <span className='fw-semi-bold'>Example</span></h5>"
          close collapse customHeader
        >
          <p>Theming the navbar has never been easier thanks to the combination of
            theming classes and background-color utilities.
            Choose from <code>color=&quot;light&quot;</code>
            for use with light background colors, or
            <code>color=&quot;dark&quot;</code> for dark background
            colors. Then, customize with <code>.bg-*</code> utilities.</p>
          <b-navbar class="mt px-2" toggleable="md" type="dark" variant="dark">
            <b-navbar-brand href="#">Navbar</b-navbar-brand>
            <b-navbar-toggle class="ml-auto" target="nav_collapse2"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse2">
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">Home</b-nav-item>
                <b-nav-item href="#">Features</b-nav-item>
                <b-nav-item href="#">Pricing</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <b-navbar class="mt px-2" toggleable="md" type="dark" variant="primary">
            <b-navbar-brand href="#">Navbar</b-navbar-brand>
            <b-navbar-toggle class="ml-auto" target="nav_collapse3"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse3">
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">Home</b-nav-item>
                <b-nav-item href="#">Features</b-nav-item>
                <b-nav-item href="#">Pricing</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <b-navbar class="mt px-2" toggleable="md" type="light" variant="light">
            <b-navbar-brand href="#">Navbar</b-navbar-brand>
            <b-navbar-toggle class="ml-auto" target="nav_collapse4"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse4">
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">Home</b-nav-item>
                <b-nav-item href="#">Features</b-nav-item>
                <b-nav-item href="#">Pricing</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'NavbarPage',
  components: { Widget },
};
</script>
