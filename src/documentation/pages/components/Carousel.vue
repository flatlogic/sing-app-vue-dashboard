<template>
  <b-row>
    <b-col lg="9" xs="12">
      <h2>Carousel</h2>
      <p class="mb-4">A slideshow component for cycling through elements—images or slides of text—like a carousel.</p>
      <vue-code-highlight>import { BCarousel, BCarouselSlide } from 'bootstrap-vue';</vue-code-highlight>
      <b-tabs nav-class="bg-transparent" class="mb-5">
        <b-tab title="Example" active class="p-0">
          <b-carousel
              id="carousel-fade"
              fade
              indicators
              controls
              img-width="1024"
              img-height="480"
          >
            <b-carousel-slide :img-src="p1"></b-carousel-slide>
            <b-carousel-slide :img-src="p2"></b-carousel-slide>
            <b-carousel-slide :img-src="p3"></b-carousel-slide>
          </b-carousel>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>&lt;b-carousel
  id=&quot;carousel-fade&quot;
  fade
  indicators
  controls
  img-width=&quot;1024&quot;
  img-height=&quot;480&quot;
&gt;
  &lt;b-carousel-slide :img-src=&quot;p1&quot;&gt;&lt;/b-carousel-slide&gt;
  &lt;b-carousel-slide :img-src=&quot;p2&quot;&gt;&lt;/b-carousel-slide&gt;
  &lt;b-carousel-slide :img-src=&quot;p3&quot;&gt;&lt;/b-carousel-slide&gt;
&lt;/b-carousel&gt;</vue-code-highlight>
        </b-tab>
      </b-tabs>
    </b-col>
    <p class="p-4">For more examples please refer to <a href="https://bootstrap-vue.js.org/docs/components/carousel/"
                                                        target="_blank"
                                                        rel="noopener noreferrer">Bootstrap Vue Carousel</a></p>
  </b-row>
</template>
<script>
  import p1 from '../../../assets/slides/1.jpg';
  import p2 from '../../../assets/slides/2.jpg';
  import p3 from '../../../assets/slides/3.jpg';

  export default {
    name: 'DocCarousel',
    data() {
      return {
        p1, p2, p3
      }
    }
  }
</script>
