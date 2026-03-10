<template>
  <div>
    <div class="product-description">
      <div class="product-description-info product-description-block">
        <h3>PRODUCT DESCRIPTION</h3>
        <p class="dot-before">
          {{ data.description_1 }}
        </p>
        <p class="dot-before">
          {{ data.description_2 }}
        </p>
      </div>
      <div class="product-description-block">
        <h3>PRODUCT CODE</h3>
        <div>{{ data.code }}</div>
      </div>
      <div class="product-description-block">
        <h3>SHARE</h3>
        <div>
          Share photo with a tag <a href="#">#{{ data.hashtag }}</a>
          <div class="social-list">
            <div><i class="fa fa-facebook" /></div>
            <div><i class="fa fa-instagram" /></div>
            <div><i class="fa fa-twitter" /></div>
          </div>
        </div>
      </div>
      <div class="product-description-block">
        <h3>TECHNOLOGY</h3>
        <ul>
          <li
            v-for="t in data.technology"
            :key="t"
            class="dot-before"
          >
            {{ t }}
          </li>
        </ul>
      </div>
      <div class="product-description-block">
        <h3>RATING & REVIEWS</h3>
        <div class="reviews">
          <Rating :rating="data.rating" />
          32 Reviews
          <a href="#">Read all</a>
        </div>
      </div>
    </div>
    <div class="product-description product-description-mobile">
      <div
        id="product-accordion"
        class="accordion"
      >
        <div class="card panel">
          <div
            class="card-header panel-header panel-first"
            role="button"
          >
            <button
              class="accordion-toggle"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion-0"
            >
              PRODUCT DESCRIPTION
              <i class="fa fa-angle-down fa-2x" />
            </button>
          </div>
          <div
            id="accordion-0"
            class="collapse"
            data-bs-parent="#product-accordion"
          >
            <div class="card-body">
              <p class="dot-before">
                {{ data.description_1 }}
              </p>
              <p class="dot-before">
                {{ data.description_2 }}
              </p>
            </div>
          </div>
        </div>
        <div class="card panel">
          <div
            class="card-header panel-header"
            role="button"
          >
            <button
              class="accordion-toggle"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion-1"
            >
              PRODUCT CODE
              <i class="fa fa-angle-down fa-2x" />
            </button>
          </div>
          <div
            id="accordion-1"
            class="collapse"
            data-bs-parent="#product-accordion"
          >
            <div class="card-body">
              {{ data.code }}
            </div>
          </div>
        </div>
        <div class="card panel">
          <div
            class="card-header panel-header"
            role="button"
          >
            <button
              class="accordion-toggle"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion-2"
            >
              SHARE
              <i class="fa fa-angle-down fa-2x" />
            </button>
          </div>
          <div
            id="accordion-2"
            class="collapse"
            data-bs-parent="#product-accordion"
          >
            <div class="card-body">
              Share photo with a tag <a href="#">#{{ data.hashtag }}</a>
              <div class="social-list">
                <div><i class="fa fa-facebook" /></div>
                <div><i class="fa fa-instagram" /></div>
                <div><i class="fa fa-twitter" /></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card panel">
          <div
            class="card-header panel-header"
            role="button"
          >
            <button
              class="accordion-toggle"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion-3"
            >
              TECHNOLOGY
              <i class="fa fa-angle-down fa-2x" />
            </button>
          </div>
          <div
            id="accordion-3"
            class="collapse"
            data-bs-parent="#product-accordion"
          >
            <div class="card-body">
              <ul>
                <li
                  v-for="t in data.technology"
                  :key="t"
                  class="dot-before"
                >
                  {{ t }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card panel">
          <div
            class="card-header panel-header"
            role="button"
          >
            <button
              class="accordion-toggle"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion-4"
            >
              RATING & REVIEWS
              <i class="fa fa-angle-down fa-2x" />
            </button>
          </div>
          <div
            id="accordion-4"
            class="collapse"
            data-bs-parent="#product-accordion"
          >
            <div class="card-body">
              <div class="reviews">
                <Rating :rating="data.rating" />
                32 Reviews
                <a href="#">Read all</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Rating from '../Rating/Rating.vue'

defineProps({
  data: { type: Object, default: () => ({}) }
})
</script>

<style src="./Description.scss" lang="scss" />
