<template>
  <div>
    <div class="row">
      <div class="col-12">
        <Widget
          title="<h5>Navbar <span className='fw-semi-bold'>Example</span></h5>"
          close
          collapse
          custom-header
        >
          <p>Here's what you need to know before getting started with the navbar:</p>
          <ul>
            <li>
              Navbars require a wrapping <code>&lt;nav class="navbar"&gt;</code>
              with <code>navbar-expand-*</code> for
              responsive collapsing and color scheme classes.
            </li>
            <li>
              Navbars and their contents are fluid by default. Use optional containers
              to limit their horizontal width.
            </li>
            <li>
              Use our spacing and flex utility classes for controlling
              spacing and alignment within navbars.
            </li>
            <li>
              Navbars are responsive by default, but you can
              easily modify them to change that. Responsive
              behavior depends on our Collapse JavaScript plugin.
            </li>
            <li>
              Navbars are hidden by default when printing. Force
              them to be printed by adding <code>.d-print</code>
              to the <code>.navbar</code>. See the display utility class.
            </li>
          </ul>
          <nav
            class="navbar navbar-expand-md navbar-light bg-light mt px-3"
            style="height: 60px"
          >
            <a
              class="navbar-brand"
              href="#"
            >Navbar</a>
            <button
              class="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nav_collapse1"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div
              id="nav_collapse1"
              class="collapse navbar-collapse"
            >
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                  >Home</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                  >Features</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                  >Pricing</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                  >Disabled</a>
                </li>
              </ul>
            </div>
          </nav>
        </Widget>
      </div>
      <div class="col-12">
        <Widget
          title="<h5>Navbar <span className='fw-semi-bold'>Example</span></h5>"
          close
          collapse
          custom-header
        >
          <p>
            Theming the navbar has never been easier thanks to the combination of
            theming classes and background-color utilities.
            Choose from <code>navbar-light</code>
            for use with light background colors, or
            <code>navbar-dark</code> for dark background
            colors. Then, customize with <code>.bg-*</code> utilities.
          </p>
          <nav
            class="navbar navbar-expand-md navbar-dark bg-dark mt px-3"
            style="height: 60px;"
          >
            <a
              class="navbar-brand"
              href="#"
            >Navbar</a>
            <button
              class="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nav_collapse2"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div
              id="nav_collapse2"
              class="collapse navbar-collapse"
            >
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                  >Home</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                  >Features</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                  >Pricing</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                  >Disabled</a>
                </li>
              </ul>
            </div>
          </nav>
          <nav
            class="navbar navbar-expand-md navbar-dark bg-primary mt px-3"
            style="height: 60px;"
          >
            <a
              class="navbar-brand"
              href="#"
            >Navbar</a>
            <button
              class="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nav_collapse3"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div
              id="nav_collapse3"
              class="collapse navbar-collapse"
            >
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                  >Home</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                  >Features</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                  >Pricing</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                  >Disabled</a>
                </li>
              </ul>
            </div>
          </nav>
          <nav
            class="navbar navbar-expand-md navbar-light bg-light mt px-3"
            style="height: 60px;"
          >
            <a
              class="navbar-brand"
              href="#"
            >Navbar</a>
            <button
              class="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nav_collapse4"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div
              id="nav_collapse4"
              class="collapse navbar-collapse"
            >
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                  >Home</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                  >Features</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                  >Pricing</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                  >Disabled</a>
                </li>
              </ul>
            </div>
          </nav>
        </Widget>
      </div>
    </div>
  </div>
</template>

<script setup>
import Widget from '@/components/Widget/Widget.vue';
</script>
