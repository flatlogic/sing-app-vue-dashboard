<template>
  <div class="gallery-page">
    <div class="d-flex justify-content-between align-items-center">
      <b-button-group class="mb-lg">
        <b-button variant="default" @click="changeCategory(null)"
          :class="{ active: activeCategory === null }"
        >All</b-button>
        <b-button variant="default" @click="changeCategory('nature')"
          :class="{ active: activeCategory === 'nature' }"
        >Nature</b-button>
        <b-button variant="default" @click="changeCategory('people')"
          :class="{ active: activeCategory === 'people' }"
        >People</b-button>
        <b-button variant="default" @click="changeCategory('space')"
          :class="{ active: activeCategory === 'space' }"
        >Space</b-button>
      </b-button-group>
      <b-button-group class="mb-lg">
        <b-button variant="default" @click="desc = false"
          :class="{ active: desc === false }"
        ><i class="fa fa-sort-numeric-asc"></i></b-button>
        <b-button variant="default" @click="desc = true"
          :class="{ active: desc }"
        ><i class="fa fa-sort-numeric-desc"></i></b-button>
      </b-button-group>
    </div>
    <gallery :images="images.map(img => img.src)" :index="index" @close="index = null" />
    <transition-group name="flip-list" class="gallery" tag="ul">
      <li
        v-for="(image, imageIndex) in getImages()"
        :key="image.id"
        @click="index = imageIndex"
        class="picture card"
      >
        <div class="img-wrapper">
          <img class="figure-img width-200" :src="image.src" alt="..." />
        </div>
        <div class="description">
          <h6 class="mt-0 mb-xs">{{image.name}}</h6>
          <ul class="post-links">
            <li><a href="#">{{image.date}}</a></li>
            <li><a href="#"><span class="text-danger">
              <i :class="`fa ${image.like ? 'fa-heart' : 'fa-heart-o'}`" /> Like
            </span></a></li>
            <li><a href="#">Details</a></li>
          </ul>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import Gallery from 'vue-gallery';

export default {
  name: 'GalleryPage',
  components: { Gallery, Widget },
  data() {
    return {
      activeCategory: null,
      images: [
        {
          id: 0,
          name: 'Mountains',
          groups: [
            'nature',
          ],
          src: require('../../../assets/pictures/1.jpg'), // eslint-disable-line
          date: '10 mins',
        },
        {
          id: 1,
          name: 'Empire State Pigeon',
          groups: [
            'people',
          ],
          src: require('../../../assets/pictures/2.jpg'), // eslint-disable-line
          date: '1 hour',
          like: true,
        },
        {
          id: 2,
          name: 'Big Lake',
          groups: [
            'nature',
          ],
          src: require('../../../assets/pictures/3.jpg'), // eslint-disable-line
          date: '2 mins',
          like: true,
        },
        {
          id: 3,
          name: 'Forest',
          groups: [
            'nature',
          ],
          src: require('../../../assets/pictures/4.jpg'), // eslint-disable-line
          date: '2 mins',
          like: true,
        },
        {
          id: 4,
          name: 'Smile',
          groups: [
            'people',
          ],
          src: require('../../../assets/pictures/5.jpg'), // eslint-disable-line
          date: '2 mins',
        },
        {
          id: 5,
          name: 'Smile',
          groups: [
            'people',
          ],
          src: require('../../../assets/pictures/6.jpg'), // eslint-disable-line
          date: '1 hour',
          like: true,
        },
        {
          id: 6,
          name: 'Fog',
          groups: [
            'nature',
          ],
          src: require('../../../assets/pictures/7.jpg'), // eslint-disable-line
          date: '2 mins',
          like: true,
        },
        {
          id: 7,
          name: 'Beach',
          groups: [
            'people',
          ],
          src: require('../../../assets/pictures/8.jpg'), // eslint-disable-line
          date: '2 mins',
        },
        {
          id: 8,
          name: 'Pause',
          groups: [
            'people',
          ],
          src:  require('../../../assets/pictures/9.jpg'), // eslint-disable-line
          date: '3 hour',
          like: true,
        },
        {
          id: 9,
          name: 'Space',
          groups: [
            'space',
          ],
          src: require('../../../assets/pictures/10.jpg'), // eslint-disable-line
          date: '3 hour',
          like: true,
        },
        {
          id: 10,
          name: 'Shuttle',
          groups: [
            'space',
          ],
          src: require('../../../assets/pictures/11.jpg'), // eslint-disable-line
          date: '35 mins',
          like: true,
        },
        {
          id: 11,
          name: 'Sky',
          groups: [
            'space',
          ],
          src:  require('../../../assets/pictures/13.jpg'), // eslint-disable-line
          date: '2 mins',
        },
      ],
      index: null,
      desc: null,
    };
  },
  methods: {
    changeCategory(category) {
      this.activeCategory = category;
    },
    getImages() {
      const images = this.images.slice();
      images.sort((a, b) => {
        /* eslint-disable */ 
        if (this.desc !== null) {
          if (a.name < b.name) {
            return this.desc ? 1 : -1;
          } else if (a.name > b.name) {
            return this.desc ? -1 : 1;
          } else {
            return 0;
          }
        }
         /* eslint-enable */

        return false;
      });

      if (this.activeCategory) {
        return images
          .filter(img => img.groups.indexOf(this.activeCategory) !== -1);
      }

      return images;
    },
  },
};
</script>

<style src="./Gallery.scss" lang="scss" scoped />
