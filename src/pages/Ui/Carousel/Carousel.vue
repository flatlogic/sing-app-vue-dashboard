<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>UI Carousel</b-breadcrumb-item>
    </b-breadcrumb>
    <p>
      The carousel is a slideshow for cycling through a series of content, built with
      CSS 3D transforms and a bit of JavaScript. It works with a series of images, text,
      or custom markup. It also includes support for previous/next controls and indicators.
    </p>
    <b-row>
      <b-col>
        <b-carousel id="carousel1" indicators controls :interval="4000">
          <b-carousel-slide v-for="img in slides" :key="img" :img-src="img" />
        </b-carousel>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import slide1 from '../../../assets/slides/1.jpg';
import slide2 from '../../../assets/slides/2.jpg';
import slide3 from '../../../assets/slides/3.jpg';

export default {
  name: 'Carousel',
  data() {
    return {
      slides: [slide1, slide2, slide3],
    };
  },
};
</script>
