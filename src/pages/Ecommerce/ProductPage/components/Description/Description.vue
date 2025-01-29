<template>
  <div >
    <div class="product-description">
      <div class="product-description-info product-description-block">
        <h3>PRODUCT DESCRIPTION</h3>
        <p class="dot-before">{{data.description_1}}</p>
        <p class="dot-before">{{data.description_2}}</p>
      </div>
      <div class="product-description-block">
        <h3>PRODUCT CODE</h3>
        <div>{{data.code}}</div>
      </div>
      <div class="product-description-block">
        <h3>SHARE</h3>
        <div>
          Share photo with a tag <a href="#">#{{data.hashtag}}</a>
          <div class="social-list">
            <div><i class="fa fa-facebook"></i></div>
            <div><i class="fa fa-instagram"></i></div>
            <div><i class="fa fa-twitter"></i></div>
          </div>
        </div>
      </div>
      <div class="product-description-block">
        <h3>TECHNOLOGY</h3>
        <ul>
          <li v-for="t in data.technology" :key="t" class="dot-before">{{t}}</li>
        </ul>
      </div>
      <div class="product-description-block">
        <h3>RATING & REVIEWS</h3>
        <div class="reviews">
          <Rating :rating="data.rating"></Rating>
            32 Reviews
            <a href="#">Read all</a>
        </div>
      </div>
    </div>
    <div class="product-description product-description-mobile">
      <b-card class="panel" no-body>
        <b-card-header class='panel-header panel-first' role="button">
          <button class="accordion-toggle" v-b-toggle="'accordion-0'">
            PRODUCT DESCRIPTION
            <i class="fa fa-angle-down fa-2x"></i>
          </button>
        </b-card-header>
        <b-collapse id="accordion-0">
          <b-card-body>
            <p class="dot-before">{{data.description_1}}</p>
            <p class="dot-before">{{data.description_2}}</p>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card class="panel" no-body>
        <b-card-header class='panel-header' role="button">
          <button class="accordion-toggle" v-b-toggle="'accordion-1'">
            PRODUCT CODE
            <i class="fa fa-angle-down fa-2x"></i>
          </button>
        </b-card-header>
        <b-collapse id="accordion-1">
          <b-card-body>
            {{data.code}}
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card class="panel" no-body>
        <b-card-header class='panel-header' role="button">
          <button class="accordion-toggle" v-b-toggle="'accordion-2'">
            SHARE
            <i class="fa fa-angle-down fa-2x"></i>
          </button>
        </b-card-header>
        <b-collapse id="accordion-2">
          <b-card-body>
            Share photo with a tag <a href="#">#{{data.hashtag}}</a>
            <div class="social-list">
              <div><i class="fa fa-facebook"></i></div>
              <div><i class="fa fa-instagram"></i></div>
              <div><i class="fa fa-twitter"></i></div>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card class="panel" no-body>
        <b-card-header class='panel-header' role="button">
          <button class="accordion-toggle" v-b-toggle="'accordion-3'">
            TECHNOLOGY
            <i class="fa fa-angle-down fa-2x"></i>
          </button>
        </b-card-header>
        <b-collapse id="accordion-3">
          <b-card-body>
            <ul>
              <li v-for="t in data.technology" :key="t" class="dot-before">{{t}}</li>
            </ul>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card class="panel" no-body>
        <b-card-header class='panel-header' role="button">
          <button class="accordion-toggle" v-b-toggle="'accordion-4'">
            RATING & REVIEWS
            <i class="fa fa-angle-down fa-2x"></i>
          </button>
        </b-card-header>
        <b-collapse id="accordion-4">
          <b-card-body>
            <div class="reviews">
              <Rating :rating="data.rating"></Rating>
                32 Reviews
                <a href="#">Read all</a>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
import Rating from '../Rating/Rating';

export default {
  name: 'Description',
  components: {Rating},
  props: {
    data: {type: Object, default: () => ({})}
  },
};
</script>

<style src="./Description.scss" lang="scss" />
