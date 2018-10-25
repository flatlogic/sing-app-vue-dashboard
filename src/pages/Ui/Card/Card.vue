<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>UI Card</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">Cards - <span class="fw-semi-bold">Examples</span></h1>
    <p>
      A card is a flexible and extensible content container.
      It includes options for headers and footers,
      a wide variety of content, contextual background colors,
      and powerful display options. If you’re
      familiar with Bootstrap 3, cards replace its old panels,
      wells, and thumbnails. Similar functionality
      to those components is available as modifier classes for cards.
    </p>
    <b-row>
      <b-col>
        <b-card
          class="border-0 mb-xlg background-cover text-white"
          :style="{ backgroundImage: `url(${lifestyle})` }"
        >
            <span>13 Mar</span>
            <h3 class="mt-lg">Lifestyle brand</h3>
            <p class="w-75">
              A lifestyle brand is a company that markets its products or services to embody the
              interests, attitudes, and opinions of a group or a culture. Lifestyle brands
              seek to inspire, guide, and motivate people, with the goal of their products
              contributing to the definition of the consumer&apos;s way of life.</p>
            <b-button class="btn-rounded-f mt-lg" variant="danger">Full Article</b-button>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col xs='12' sm='6' md='4'>
        <b-card title="Isometric design"
          :img-src="isometric"
          img-alt="Image"
          img-top
          class="border-0 mb-xlg"
        >
          <p class="card-text">
            Isometric projection is a method for visually representing three-dimensional in two
              dimensions in technical and engineering drawings.
          </p>
          <div class="w-100 text-center">
              <b-button class="btn-rounded-f" variant="primary">Full Article</b-button>
            </div>
        </b-card>
      </b-col>
      <b-col xs='12' sm='6' md='4'>
        <b-card class="mb-xlg border-0">
          <a href="#" class="fw-semi-bold text-success">Avg Rating</a>
          <a href="#" class="fw-semi-bold text-muted ml-sm">All Time</a>
          <hr />
          <div class="d-flex justify-content-between mb-lg">
            <div class="text-warning">
              <i class="fa fa-star mr-xs" />
              <i class="fa fa-star mr-xs" />
              <i class="fa fa-star mr-xs" />
              <i class="fa fa-star mr-xs" />
              <i class="fa fa-star" />
            </div>
            <span class="text-muted"><small>342 REVIEWS</small></span>
          </div>
          <div class="mb-lg">
            <h3 class="text-success mb-0">69%</h3>
            of customers recomend this product
          </div>
          <b-button class="btn-rounded-f" variant="success">Write a Review</b-button>
        </b-card>
        <b-card class="mb-xlg border-0" :style="{ position: 'relative' }"
          :img-src="mountains" title="Weekly Inspiration">
            <b-badge class="mt-lg fw-thin rounded-0" variant="success"
              :style="{ position: 'absolute', top: 0, left: 0 }">New</b-badge>
            <hr />
            <p>
              There are at least 109 mountains on Earts with elevations greeter than 7,200 meters
            </p>
            <b-button class="border-0" variant="default">Read More</b-button>
        </b-card>
      </b-col>
      <b-col xs='12' sm='6' md='4'>
        <b-card class="border-0" :img-src="rns">
          <small>Technology</small><br />
          <h4 class="mb mt-xs">
            React Native Starter
          </h4>
          <hr />
          <div class="w-100 d-flex justify-content-between align-items-center">
            <span class="text-muted fw-semi-bold">from $49.95</span>
            <b-button variant="info">Read more</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

import isometric from '../../../assets/cards/isometric.jpg';
import lifestyle from '../../../assets/cards/lifestyle.jpg';
import mountains from '../../../assets/cards/mountains.jpeg';
import rns from '../../../assets/cards/rns.png';

export default {
  name: 'Card',
  components: { Widget },
  data() {
    return {
      isometric,
      lifestyle,
      mountains,
      rns,
    };
  },
};
</script>
