<template>
  <div>
    <p>
      The carousel is a slideshow for cycling through a series of content, built with
      CSS 3D transforms and a bit of JavaScript. It works with a series of images, text,
      or custom markup. It also includes support for previous/next controls and indicators.
    </p>
    <div class="row">
      <div class="col">
        <div
          id="carousel1"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel1"
              data-bs-slide-to="0"
              class="active"
            />
            <button
              type="button"
              data-bs-target="#carousel1"
              data-bs-slide-to="1"
            />
            <button
              type="button"
              data-bs-target="#carousel1"
              data-bs-slide-to="2"
            />
          </div>
          <div class="carousel-inner">
            <div
              v-for="(img, index) in slides"
              :key="img"
              :class="['carousel-item', { active: index === 0 }]"
            >
              <img
                :src="img"
                class="d-block w-100"
                alt="Slide"
              >
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carousel1"
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
            data-bs-target="#carousel1"
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
    </div>
  </div>
</template>

<script setup>
import slide1 from '../../../assets/slides/slide-1.jpg';
import slide2 from '../../../assets/slides/slide-2.jpg';
import slide3 from '../../../assets/slides/slide-3.jpg';

const slides = [slide1, slide2, slide3];
</script>
