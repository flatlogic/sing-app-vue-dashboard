<template>
  <div class="row">
    <div class="col-lg-9 col-12">
      <h2>Carousel</h2>
      <p class="mb-4">
        A slideshow component for cycling through elements—images or slides of text—like a carousel.
      </p>
      <pre><code>// Bootstrap 5 native carousel
&lt;div id="carousel" class="carousel slide" data-bs-ride="carousel"&gt;
  &lt;div class="carousel-inner"&gt;
    &lt;div class="carousel-item active"&gt;
      &lt;img src="..." class="d-block w-100" alt="..."&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

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
              data-bs-target="#carousel-example"
              type="button"
            >
              Example
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#carousel-code"
              type="button"
            >
              Code
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            id="carousel-example"
            class="tab-pane fade show active p-0"
          >
            <div
              id="carouselFade"
              class="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselFade"
                  data-bs-slide-to="0"
                  class="active"
                />
                <button
                  type="button"
                  data-bs-target="#carouselFade"
                  data-bs-slide-to="1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselFade"
                  data-bs-slide-to="2"
                />
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    :src="p1"
                    class="d-block w-100"
                    alt="Slide 1"
                  >
                </div>
                <div class="carousel-item">
                  <img
                    :src="p2"
                    class="d-block w-100"
                    alt="Slide 2"
                  >
                </div>
                <div class="carousel-item">
                  <img
                    :src="p3"
                    class="d-block w-100"
                    alt="Slide 3"
                  >
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselFade"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselFade"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div
            id="carousel-code"
            class="tab-pane fade p-3"
          >
            <pre><code>&lt;div id="carouselFade" class="carousel slide carousel-fade" data-bs-ride="carousel"&gt;
  &lt;div class="carousel-indicators"&gt;
    &lt;button type="button" data-bs-target="#carouselFade" data-bs-slide-to="0" class="active"&gt;&lt;/button&gt;
    &lt;button type="button" data-bs-target="#carouselFade" data-bs-slide-to="1"&gt;&lt;/button&gt;
    &lt;button type="button" data-bs-target="#carouselFade" data-bs-slide-to="2"&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="carousel-inner"&gt;
    &lt;div class="carousel-item active"&gt;
      &lt;img :src="slide1" class="d-block w-100" alt="Slide 1"&gt;
    &lt;/div&gt;
    &lt;div class="carousel-item"&gt;
      &lt;img :src="slide2" class="d-block w-100" alt="Slide 2"&gt;
    &lt;/div&gt;
    &lt;div class="carousel-item"&gt;
      &lt;img :src="slide3" class="d-block w-100" alt="Slide 3"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;button class="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev"&gt;
    &lt;span class="carousel-control-prev-icon"&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;button class="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next"&gt;
    &lt;span class="carousel-control-next-icon"&gt;&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
    <p class="p-4">
      For more examples please refer to <a
        href="https://getbootstrap.com/docs/5.3/components/carousel/"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap 5 Carousel</a>
    </p>
  </div>
</template>

<script setup>
import p1 from '../../../assets/slides/slide-1.jpg'
import p2 from '../../../assets/slides/slide-2.jpg'
import p3 from '../../../assets/slides/slide-3.jpg'
</script>
