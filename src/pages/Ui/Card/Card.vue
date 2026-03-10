<template>
  <div>
    <h1 class="page-title">
      Cards - <span class="fw-semi-bold">Examples</span>
    </h1>
    <p>
      A card is a flexible and extensible content container.
      It includes options for headers and footers,
      a wide variety of content, contextual background colors,
      and powerful display options. If you're
      familiar with Bootstrap 3, cards replace its old panels,
      wells, and thumbnails. Similar functionality
      to those components is available as modifier classes for cards.
    </p>
    <div class="row">
      <div class="col">
        <div
          class="card border-0 mb-xlg background-cover text-white"
          :style="{ backgroundImage: `url(${lifestyle})` }"
        >
          <div class="card-body">
            <span>13 Mar</span>
            <h3 class="mt-lg">
              Lifestyle brand
            </h3>
            <p class="w-75">
              A lifestyle brand is a company that markets its products or services to embody the
              interests, attitudes, and opinions of a group or a culture. Lifestyle brands
              seek to inspire, guide, and motivate people, with the goal of their products
              contributing to the definition of the consumer&apos;s way of life.
            </p>
            <button class="btn btn-danger btn-rounded-f mt-lg text-white">
              Full Article
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card border-0 mb-xlg">
          <img
            :src="isometric"
            class="card-img-top"
            alt="Image"
          >
          <div class="card-body">
            <h5 class="card-title">
              Isometric design
            </h5>
            <p class="card-text">
              Isometric projection is a method for visually representing three-dimensional in two
              dimensions in technical and engineering drawings.
            </p>
            <div class="w-100 text-center">
              <button class="btn btn-primary btn-rounded-f text-white">
                Full Article
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card mb-xlg border-0">
          <div class="card-body">
            <a
              href="#"
              class="fw-semi-bold text-success"
            >Avg Rating</a>
            <a
              href="#"
              class="fw-semi-bold text-muted ms-sm-1"
            >All Time</a>
            <hr>
            <div class="d-flex justify-content-between mb-lg">
              <div class="text-warning">
                <i class="fa fa-star me-sm-1" />
                <i class="fa fa-star me-sm-1" />
                <i class="fa fa-star me-sm-1" />
                <i class="fa fa-star me-sm-1" />
                <i class="fa fa-star" />
              </div>
              <span class="text-muted"><small>342 REVIEWS</small></span>
            </div>
            <div class="mb-lg">
              <h3 class="text-success mb-0">
                69%
              </h3>
              of customers recomend this product
            </div>
            <button class="btn btn-success btn-rounded-f">
              Write a Review
            </button>
          </div>
        </div>
        <div
          class="card mb-xlg border-0"
          style="position: relative"
        >
          <img
            :src="mountains"
            class="card-img-top"
            alt="Mountains"
          >
          <span
            class="badge bg-success mt-lg fw-thin rounded-0"
            style="position: absolute; top: 0; left: 0"
          >New</span>
          <div class="card-body">
            <h5 class="card-title">
              Weekly Inspiration
            </h5>
            <hr>
            <p>
              There are at least 109 mountains on Earts with elevations greeter than 7,200 meters
            </p>
            <button class="btn btn-default border-0">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card border-0">
          <img
            :src="rns"
            class="card-img-top"
            alt="RNS"
          >
          <div class="card-body">
            <small>Technology</small><br>
            <h4 class="mb mt-xs">
              React Native Starter
            </h4>
            <hr>
            <div class="w-100 d-flex justify-content-between align-items-center">
              <span class="text-muted fw-semi-bold">from $49.95</span>
              <button class="btn btn-info">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import isometric from '../../../assets/cards/isometric.jpg';
import lifestyle from '../../../assets/cards/lifestyle.jpg';
import mountains from '../../../assets/cards/mountains.jpeg';
import rns from '../../../assets/cards/rns.png';
</script>
