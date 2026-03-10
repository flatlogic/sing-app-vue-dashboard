<template>
  <div class="row">
    <div class="col-lg-9 col-12">
      <h2>Navbar</h2>
      <p class="mb-4">
        Documentation and examples for Bootstrap's powerful, responsive navigation header, the navbar.
        Includes support for branding, navigation, and more, including support for our collapse plugin.
      </p>
      <pre><code>// Bootstrap 5 native navbar
&lt;nav class="navbar navbar-expand-lg"&gt;
  &lt;a class="navbar-brand" href="#"&gt;Brand&lt;/a&gt;
  &lt;button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav"&gt;
    &lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;div class="collapse navbar-collapse" id="navbarNav"&gt;...&lt;/div&gt;
&lt;/nav&gt;</code></pre>

      <!-- Example -->
      <div>
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#navbar-example"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#navbar-code"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="navbar-example"
            class="tab-pane fade show active"
          >
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <a
                  class="navbar-brand"
                  href="#"
                >Sing</a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarExample"
                >
                  <span class="navbar-toggler-icon" />
                </button>
                <div
                  id="navbarExample"
                  class="collapse navbar-collapse"
                >
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#"
                      >Components</a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#"
                      >Documentation</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        Options
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                          >Option 1</a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                          >Option 2</a>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                          >Reset</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div
            id="navbar-code"
            class="tab-pane fade"
          >
            <pre><code>&lt;nav class="navbar navbar-expand-lg navbar-light bg-light"&gt;
  &lt;div class="container-fluid"&gt;
    &lt;a class="navbar-brand" href="#"&gt;Sing&lt;/a&gt;
    &lt;button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarExample"&gt;
      &lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
    &lt;/button&gt;
    &lt;div class="collapse navbar-collapse" id="navbarExample"&gt;
      &lt;ul class="navbar-nav ms-auto mb-2 mb-lg-0"&gt;
        &lt;li class="nav-item"&gt;
          &lt;a class="nav-link" href="#"&gt;Components&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="nav-item"&gt;
          &lt;a class="nav-link" href="#"&gt;Documentation&lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="nav-item dropdown"&gt;
          &lt;a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"&gt;
            Options
          &lt;/a&gt;
          &lt;ul class="dropdown-menu dropdown-menu-end"&gt;
            &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Option 1&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Option 2&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;Reset&lt;/a&gt;&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
    <p class="p-4">
      For more examples please refer to <a
        href="https://getbootstrap.com/docs/5.3/components/navbar/"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap 5 Navbar</a>
    </p>
  </div>
</template>

<script setup>
</script>
