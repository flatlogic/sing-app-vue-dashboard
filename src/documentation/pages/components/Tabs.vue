<template>
  <div class="row">
    <div class="col-lg-9 col-12">
      <h2>Tabs</h2>
      <p class="mb-4">
        Activates a tab element and content container.
      </p>
      <pre><code>// Bootstrap 5 native tabs
&lt;ul class="nav nav-tabs" role="tablist"&gt;
  &lt;li class="nav-item"&gt;
    &lt;button class="nav-link active" data-bs-toggle="tab" data-bs-target="#tab1"&gt;Tab 1&lt;/button&gt;
  &lt;/li&gt;
&lt;/ul&gt;
&lt;div class="tab-content"&gt;
  &lt;div class="tab-pane fade show active" id="tab1"&gt;Content&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <h4 class="mt-5">
        Example
      </h4>
      <div class="mb-5">
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#tab-demo-1"
              type="button"
            >
              Tab 1
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#tab-demo-2"
              type="button"
            >
              Tab 2
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="tab-demo-1"
            class="tab-pane fade show active"
          >
            First tab content
          </div>
          <div
            id="tab-demo-2"
            class="tab-pane fade"
          >
            Second tab content
          </div>
        </div>
      </div>

      <h4>Code</h4>
      <pre><code>&lt;ul class="nav nav-tabs" role="tablist"&gt;
  &lt;li class="nav-item"&gt;
    &lt;button class="nav-link active" data-bs-toggle="tab" data-bs-target="#tab1"&gt;Tab 1&lt;/button&gt;
  &lt;/li&gt;
  &lt;li class="nav-item"&gt;
    &lt;button class="nav-link" data-bs-toggle="tab" data-bs-target="#tab2"&gt;Tab 2&lt;/button&gt;
  &lt;/li&gt;
&lt;/ul&gt;
&lt;div class="tab-content"&gt;
  &lt;div class="tab-pane fade show active" id="tab1"&gt;First tab content&lt;/div&gt;
  &lt;div class="tab-pane fade" id="tab2"&gt;Second tab content&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <p class="py-4">
        For more examples please refer to <a
          href="https://getbootstrap.com/docs/5.3/components/navs-tabs/"
          target="_blank"
          rel="noopener noreferrer"
        >Bootstrap 5 Tabs</a>
      </p>

      <h2 class="mt-5">
        Accordion
      </h2>
      <p class="mb-4">
        Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
      </p>
      <pre><code>// Bootstrap 5 native accordion
&lt;div class="accordion" id="accordionExample"&gt;
  &lt;div class="accordion-item"&gt;
    &lt;h2 class="accordion-header"&gt;
      &lt;button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne"&gt;
        Accordion Item
      &lt;/button&gt;
    &lt;/h2&gt;
    &lt;div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample"&gt;
      &lt;div class="accordion-body"&gt;Content&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      <h4 class="mt-5">
        Example
      </h4>
      <div
        id="accordionDemo"
        class="accordion"
      >
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-1"
            >
              Collapsible Group Item
            </button>
          </h2>
          <div
            id="collapse-1"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionDemo"
          >
            <div class="accordion-body">
              <p>
                Get base styles and flexible support for collapsible components like accordions and navigation.
                Using the collapse plugin, we built a simple accordion by extending the panel component.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-2"
            >
              Normal Text Insertion
            </button>
          </h2>
          <div
            id="collapse-2"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionDemo"
          >
            <div class="accordion-body">
              <p>
                Why don't use Lorem Ipsum? I think if someone says don't use lorem ipsum it's very controversial point. I
                think the opposite actually.
              </p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-3"
            >
              Random from the Web
            </button>
          </h2>
          <div
            id="collapse-3"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionDemo"
          >
            <div class="accordion-body">
              <p>
                <span class="fw-semi-bold">Light Blue</span> - is a next generation admin template based
                on the latest Metro design. There are few reasons we want to tell you, why we have created it:
                We didn't like the darkness of most of admin templates, so we created this light one.
                We didn't like the high contrast of most of admin templates, so we created this unobtrusive one.
                We searched for a solution of how to make widgets look like real widgets, so we decided that
                deep background - is what makes widgets look real.
              </p>
              <p class="m-0 text-muted">
                <em>- Some One</em>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h4 class="mt-5">
        Code
      </h4>
      <pre><code>&lt;div class="accordion" id="accordionExample"&gt;
  &lt;div class="accordion-item"&gt;
    &lt;h2 class="accordion-header"&gt;
      &lt;button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne"&gt;
        Collapsible Group Item
      &lt;/button&gt;
    &lt;/h2&gt;
    &lt;div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample"&gt;
      &lt;div class="accordion-body"&gt;
        &lt;p&gt;Content here...&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="accordion-item"&gt;
    &lt;h2 class="accordion-header"&gt;
      &lt;button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo"&gt;
        Normal Text Insertion
      &lt;/button&gt;
    &lt;/h2&gt;
    &lt;div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample"&gt;
      &lt;div class="accordion-body"&gt;
        &lt;p&gt;Content here...&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
    <p class="py-4">
      For more examples please refer to <a
        href="https://getbootstrap.com/docs/5.3/components/accordion/"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap 5 Accordion</a>
    </p>
  </div>
</template>

<script setup>
</script>
