<template>
  <div class="row">
    <div class="col-lg-9 col-12">
      <h2>Modal</h2>
      <p class="mb-4">
        Use Bootstrap's JavaScript modal plugin to add dialogs to your site for lightboxes, user
        notifications, or completely custom content.
      </p>
      <pre><code>// Bootstrap 5 native modal
&lt;button data-bs-toggle="modal" data-bs-target="#myModal"&gt;Open&lt;/button&gt;
&lt;div class="modal fade" id="myModal"&gt;
  &lt;div class="modal-dialog"&gt;
    &lt;div class="modal-content"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      <!-- Example 1: Default Modal -->
      <div class="mb-5">
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#modal-example-1"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#modal-code-1"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="modal-example-1"
            class="tab-pane fade show active"
          >
            <button
              class="btn btn-lg btn-primary"
              @click="openModal('modal-default')"
            >
              Default modal
            </button>

            <Teleport to="body">
              <div
                id="modal-default"
                class="modal fade"
                tabindex="-1"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">
                        Modal Title
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        aria-label="Close"
                        @click="closeModal('modal-default')"
                      />
                    </div>
                    <div class="modal-body bg-white">
                      <p>Modal body content goes here...</p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        @click="closeModal('modal-default')"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Teleport>
          </div>
          <div
            id="modal-code-1"
            class="tab-pane fade"
          >
            <pre><code>&lt;button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-default"&gt;
  Default modal
&lt;/button&gt;

&lt;div class="modal fade" id="modal-default" tabindex="-1"&gt;
  &lt;div class="modal-dialog"&gt;
    &lt;div class="modal-content"&gt;
      &lt;div class="modal-header"&gt;
        &lt;h5 class="modal-title"&gt;Modal Title&lt;/h5&gt;
        &lt;button type="button" class="btn-close" data-bs-dismiss="modal"&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div class="modal-body bg-white"&gt;
        &lt;p&gt;Modal body content...&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="modal-footer"&gt;
        &lt;button class="btn btn-secondary" data-bs-dismiss="modal"&gt;Close&lt;/button&gt;
        &lt;button class="btn btn-primary"&gt;Save changes&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Example 2: Variations -->
      <div>
        <ul
          class="nav nav-tabs bg-transparent"
          role="tablist"
        >
          <li class="nav-item">
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#modal-example-2"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#modal-code-2"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="modal-example-2"
            class="tab-pane fade show active"
          >
            <h3>Variations</h3>
            <button
              class="btn btn-lg btn-danger me-3"
              @click="openModal('modal-long')"
            >
              Long modal
            </button>
            <button
              class="btn btn-lg btn-success"
              @click="openModal('modal-large')"
            >
              Large modal
            </button>

            <!-- Long Modal -->
            <Teleport to="body">
              <div
                id="modal-long"
                class="modal fade"
                tabindex="-1"
              >
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">
                        Long content
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        aria-label="Close"
                        @click="closeModal('modal-long')"
                      />
                    </div>
                    <div
                      class="modal-body bg-white"
                      v-html="longText"
                    />
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        @click="closeModal('modal-long')"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Teleport>

            <!-- Large Modal -->
            <Teleport to="body">
              <div
                id="modal-large"
                class="modal fade"
                tabindex="-1"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">
                        Large modal
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        aria-label="Close"
                        @click="closeModal('modal-large')"
                      />
                    </div>
                    <div class="modal-body bg-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum harum?
                      Quidem, quisquam, natus repellat debitis veniam quia facilis magni tempora
                      cupiditate odio vitae? Eligendi nisi consequuntur vero tenetur nemo!
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        @click="closeModal('modal-large')"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Teleport>
          </div>
          <div
            id="modal-code-2"
            class="tab-pane fade"
          >
            <pre><code>&lt;!-- Long scrollable modal --&gt;
&lt;div class="modal fade" id="modal-long"&gt;
  &lt;div class="modal-dialog modal-dialog-scrollable"&gt;
    &lt;div class="modal-content"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Large modal --&gt;
&lt;div class="modal fade" id="modal-large"&gt;
  &lt;div class="modal-dialog modal-lg"&gt;
    &lt;div class="modal-content"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
    <p class="p-4">
      For more examples please refer to <a
        href="https://getbootstrap.com/docs/5.3/components/modal/"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap 5 Modal</a>
    </p>
  </div>
</template>

<script setup>
import { Modal } from 'bootstrap'

function openModal(id) {
  const modalEl = document.getElementById(id)
  const modal = Modal.getOrCreateInstance(modalEl)
  modal.show()
}

function closeModal(id) {
  const modalEl = document.getElementById(id)
  const modal = Modal.getInstance(modalEl)
  if (modal) {
    // Move focus out of modal before hiding to avoid aria-hidden warning
    const activeElement = document.activeElement
    if (modalEl.contains(activeElement)) {
      activeElement.blur()
    }
    modal.hide()
  }
}

const longText = `<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but also the leap
  into electronic typesetting, remaining essentially unchanged. It was popularised
  in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus PageMaker including
  versions of Lorem Ipsum.
</p>
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but also the leap
  into electronic typesetting, remaining essentially unchanged.
</p>
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book.
</p>
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries.
</p>
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
</p>`
</script>
