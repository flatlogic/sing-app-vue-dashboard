<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>UI Nav</b-breadcrumb-item>
    </b-breadcrumb>
    <b-row>
      <b-col xs='12' md='6'>
        <Widget
          title="<h5>Base <span class='fw-semi-bold'>Nav</span></h5>"
          close collapse customHeader
        >
          <p>
            Navigation available in Bootstrap share general markup and styles,
            from the base .nav class to the active and disabled states. Swap
            modifier classes to switch between each style.
          </p>
          <div class="bg-light p-3">
            <b-nav>
              <b-nav-item href="#">
                Link
              </b-nav-item>
              <b-nav-item href="#">
                Link
              </b-nav-item>
              <b-nav-item href="#">
                Another Link
              </b-nav-item>
              <b-nav-item href="#" disabled>
                Disabled Link
              </b-nav-item>
            </b-nav>
            <pre class="bg-light border-0 w-100 h-100">
              <code class="text-danger">{{'&lt;b-nav&gt;'}}</code>
              <code class="text-info">{{'  &lt;b-nav-item href="#"&gt;'}}</code>
              <code>{{'    Link'}}</code>
              <code class="text-info">{{'  &lt;/b-nav-item&gt;'}}</code>
              <code class="text-info">{{'  &lt;b-nav-item href="#"&gt;'}}</code>
              <code>{{'    Link'}}</code>
              <code class="text-info">{{'  &lt;/b-nav-item&gt;'}}</code>
              <code class="text-info">{{'  &lt;b-nav-item href="#"&gt;'}}</code>
              <code>{{'    Another Link'}}</code>
              <code class="text-info">{{'  &lt;/b-nav-item&gt;'}}</code>
              <code class="text-info">{{'  &lt;b-nav-item isabled href="#"&gt;'}}</code>
              <code>{{'    Disabled Link'}}</code>
              <code class="text-info">{{'  &lt;/b-nav-item&gt;'}}</code>
              <code class="text-danger">{{'&lt;/b-nav&gt;'}}</code>
            </pre>
          </div>
          <h5 class="mt">With dropdown</h5>
          <b-nav class="bg-light p-2">
            <b-nav-item href="#">
              Link
            </b-nav-item>
            <b-nav-item-dropdown text="Dropdown">
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here</b-dropdown-item>
              <b-dropdown-divider />
              <b-dropdown-item>Separated link</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#">
              Another Link
            </b-nav-item>
            <b-nav-item disabled href="#">
              Disabled Link
            </b-nav-item>
          </b-nav>
        </Widget>
      </b-col>
      <b-col xs='12' md='6'>
        <Widget
          title="<h5>Tabs & Pills</h5>"
          close collapse customHeader
        >
          <p>
            Takes the basic <code>&lt;b-nav&gt;</code> from above
            and adds the <code>tabs</code> property to generate a
            tabbed interface. Use them to create tabbable regions with our tab
            JavaScript plugin.
          </p>
          <div class="bg-light p-3">
            <b-nav tabs>
              <b-nav-item href="#" active>
                Link
              </b-nav-item>
              <b-nav-item href="#">
                Link
              </b-nav-item>
              <b-nav-item href="#">
                Another Link
              </b-nav-item>
              <b-nav-item href="#" disabled>
                Disabled Link
              </b-nav-item>
            </b-nav>
            <pre class="bg-light border-0 w-100 h-100">
              <code class="text-danger">{{'&lt;b-nav tabs&gt;'}}</code>
              <code class="text-info">{{'  &lt;b-nav-item href="#"&gt;'}}</code>
              <code>{{'    Link'}}</code>
              <code class="text-info">{{'  &lt;/b-nav-item&gt;'}}</code>
              <code class="text-info">{{'  &lt;b-nav-item href="#"&gt;'}}</code>
              <code>{{'    Link'}}</code>
              <code class="text-info">{{'  &lt;/b-nav-item&gt;'}}</code>
              <code class="text-info">{{'  &lt;b-nav-item href="#"&gt;'}}</code>
              <code>{{'    Another Link'}}</code>
              <code class="text-info">{{'  &lt;/b-nav-item&gt;'}}</code>
              <code class="text-info">{{'  &lt;b-nav-item isabled href="#"&gt;'}}</code>
              <code>{{'    Disabled Link'}}</code>
              <code class="text-info">{{'  &lt;/b-nav-item&gt;'}}</code>
              <code class="text-danger">{{'&lt;/b-nav&gt;'}}</code>
            </pre>
          </div>
          <p class="mt">Do the same thing with the <code>pills</code> property.</p>
          <div class="bg-light p-3">
            <b-nav pills>
              <b-nav-item href="#" active>
                Link
              </b-nav-item>
              <b-nav-item href="#">
                Link
              </b-nav-item>
              <b-nav-item href="#">
                Another Link
              </b-nav-item>
              <b-nav-item href="#" disabled>
                Disabled Link
              </b-nav-item>
            </b-nav>
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'NavPage',
  components: { Widget },
};
</script>

<style>

</style>
