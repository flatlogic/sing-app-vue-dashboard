<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6">
        <Widget
          title="<h5>Base <span class='fw-semi-bold'>Nav</span></h5>"
          close
          collapse
          custom-header
        >
          <p>
            Navigation available in Bootstrap share general markup and styles,
            from the base .nav class to the active and disabled states. Swap
            modifier classes to switch between each style.
          </p>
          <div class="bg-light p-3">
            <ul class="nav">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >Link</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >Link</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >Another Link</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                >Disabled Link</a>
              </li>
            </ul>
            <pre class="bg-light border-0 w-100 h-100">
              <code class="text-danger">{{ '&lt;ul class="nav"&gt;' }}</code>
              <code class="text-info">{{ '  &lt;li class="nav-item"&gt;&lt;a class="nav-link" href="#"&gt;' }}</code>
              <code>{{ '    Link' }}</code>
              <code class="text-info">{{ '  &lt;/a&gt;&lt;/li&gt;' }}</code>
              <code class="text-info">{{ '  &lt;li class="nav-item"&gt;&lt;a class="nav-link" href="#"&gt;' }}</code>
              <code>{{ '    Link' }}</code>
              <code class="text-info">{{ '  &lt;/a&gt;&lt;/li&gt;' }}</code>
              <code class="text-info">{{ '  &lt;li class="nav-item"&gt;&lt;a class="nav-link" href="#"&gt;' }}</code>
              <code>{{ '    Another Link' }}</code>
              <code class="text-info">{{ '  &lt;/a&gt;&lt;/li&gt;' }}</code>
              <code class="text-info">{{ '  &lt;li class="nav-item"&gt;&lt;a class="nav-link disabled" href="#"&gt;' }}</code>
              <code>{{ '    Disabled Link' }}</code>
              <code class="text-info">{{ '  &lt;/a&gt;&lt;/li&gt;' }}</code>
              <code class="text-danger">{{ '&lt;/ul&gt;' }}</code>
            </pre>
          </div>
          <h5 class="mt">
            With dropdown
          </h5>
          <ul class="nav bg-light p-2">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
              >Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >Dropdown</a>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                  >Action</a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                  >Another action</a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                  >Something else here</a>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#"
                  >Separated link</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
              >Another Link</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
              >Disabled Link</a>
            </li>
          </ul>
        </Widget>
      </div>
      <div class="col-12 col-md-6">
        <Widget
          title="<h5>Tabs & Pills</h5>"
          close
          collapse
          custom-header
        >
          <p>
            Takes the basic <code>&lt;ul class="nav"&gt;</code> from above
            and adds the <code>nav-tabs</code> class to generate a
            tabbed interface. Use them to create tabbable regions with our tab
            JavaScript plugin.
          </p>
          <div class="bg-light p-3">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#"
                >Link</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >Link</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >Another Link</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                >Disabled Link</a>
              </li>
            </ul>
            <pre class="bg-light border-0 w-100 h-100">
              <code class="text-danger">{{ '&lt;ul class="nav nav-tabs"&gt;' }}</code>
              <code class="text-info">{{ '  &lt;li class="nav-item"&gt;&lt;a class="nav-link active" href="#"&gt;' }}</code>
              <code>{{ '    Link' }}</code>
              <code class="text-info">{{ '  &lt;/a&gt;&lt;/li&gt;' }}</code>
              <code class="text-info">{{ '  &lt;li class="nav-item"&gt;&lt;a class="nav-link" href="#"&gt;' }}</code>
              <code>{{ '    Link' }}</code>
              <code class="text-info">{{ '  &lt;/a&gt;&lt;/li&gt;' }}</code>
              <code class="text-info">{{ '  &lt;li class="nav-item"&gt;&lt;a class="nav-link" href="#"&gt;' }}</code>
              <code>{{ '    Another Link' }}</code>
              <code class="text-info">{{ '  &lt;/a&gt;&lt;/li&gt;' }}</code>
              <code class="text-info">{{ '  &lt;li class="nav-item"&gt;&lt;a class="nav-link disabled" href="#"&gt;' }}</code>
              <code>{{ '    Disabled Link' }}</code>
              <code class="text-info">{{ '  &lt;/a&gt;&lt;/li&gt;' }}</code>
              <code class="text-danger">{{ '&lt;/ul&gt;' }}</code>
            </pre>
          </div>
          <p class="mt">
            Do the same thing with the <code>nav-pills</code> class.
          </p>
          <div class="bg-light p-3">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#"
                >Link</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >Link</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >Another Link</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                >Disabled Link</a>
              </li>
            </ul>
          </div>
        </Widget>
      </div>
    </div>
  </div>
</template>

<script setup>
import Widget from '@/components/Widget/Widget.vue';
</script>

<style>

</style>
