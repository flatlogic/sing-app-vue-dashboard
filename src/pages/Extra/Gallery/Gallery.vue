<template>
  <div class="gallery-page">
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group mb-lg">
        <button
          class="btn btn-gray-default"
          :class="{ active: activeCategory === null }"
          @click="changeCategory(null)"
        >
          All
        </button>
        <button
          class="btn btn-gray-default"
          :class="{ active: activeCategory === 'nature' }"
          @click="changeCategory('nature')"
        >
          Nature
        </button>
        <button
          class="btn btn-gray-default"
          :class="{ active: activeCategory === 'people' }"
          @click="changeCategory('people')"
        >
          People
        </button>
        <button
          class="btn btn-gray-default"
          :class="{ active: activeCategory === 'space' }"
          @click="changeCategory('space')"
        >
          Space
        </button>
      </div>
      <div class="btn-group mb-lg">
        <button
          class="btn btn-gray-default"
          :class="{ active: desc === false }"
          @click="desc = false"
        >
          <i class="fa fa-sort-numeric-asc" />
        </button>
        <button
          class="btn btn-gray-default"
          :class="{ active: desc }"
          @click="desc = true"
        >
          <i class="fa fa-sort-numeric-desc" />
        </button>
      </div>
    </div>
    <transition-group
      name="flip-list"
      class="gallery"
      tag="ul"
    >
      <li
        v-for="(image, imageIndex) in filteredImages"
        :key="image.id"
        class="picture card"
        @click="openLightbox(imageIndex)"
      >
        <div class="img-wrapper">
          <img
            class="figure-img width-200"
            :src="image.src"
            :alt="image.name || 'image'"
          >
        </div>
        <div class="description">
          <h6 class="mt-0 mb-xs">
            {{ image.name }}
          </h6>
          <ul class="post-links">
            <li><a href="#">{{ image.date }}</a></li>
            <li>
              <a href="#"><span class="text-danger">
                <i :class="`fa ${image.like ? 'fa-heart' : 'fa-heart-o'}`" /> Like
              </span></a>
            </li>
            <li><a href="#">Details</a></li>
          </ul>
        </div>
      </li>
    </transition-group>
    <div
      ref="pswpElement"
      class="pswp"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="pswp__bg" />
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item" />
          <div class="pswp__item" />
          <div class="pswp__item" />
        </div>
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <div class="pswp__counter" />
            <button
              class="pswp__button pswp__button--close"
              title="Close (Esc)"
            />
            <button
              class="pswp__button pswp__button--zoom"
              title="Zoom in/out"
            />
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut" />
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip" />
          </div>
          <button
            class="pswp__button pswp__button--arrow--left"
            title="Previous (arrow left)"
          />
          <button
            class="pswp__button pswp__button--arrow--right"
            title="Next (arrow right)"
          />
          <div class="pswp__caption">
            <div class="pswp__caption__center" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import PhotoSwipe from 'photoswipe'
import 'photoswipe/style.css'

import img1 from '@/assets/pictures/1.jpg'
import img2 from '@/assets/pictures/2.jpg'
import img3 from '@/assets/pictures/3.jpg'
import img4 from '@/assets/pictures/4.jpg'
import img5 from '@/assets/pictures/5.jpg'
import img6 from '@/assets/pictures/6.jpg'
import img7 from '@/assets/pictures/7.jpg'
import img8 from '@/assets/pictures/8.jpg'
import img9 from '@/assets/pictures/9.jpg'
import img10 from '@/assets/pictures/10.jpg'
import img11 from '@/assets/pictures/11.jpg'
import img13 from '@/assets/pictures/13.jpg'

const activeCategory = ref(null)
const desc = ref(null)
let pswpInstance = null

const images = ref([
  {
    id: 0,
    name: 'Mountains',
    groups: ['nature'],
    src: img1,
    date: '10 mins',
  },
  {
    id: 1,
    name: 'Empire State Pigeon',
    groups: ['people'],
    src: img2,
    date: '1 hour',
    like: true,
  },
  {
    id: 2,
    name: 'Big Lake',
    groups: ['nature'],
    src: img3,
    date: '2 mins',
    like: true,
  },
  {
    id: 3,
    name: 'Forest',
    groups: ['nature'],
    src: img4,
    date: '2 mins',
    like: true,
  },
  {
    id: 4,
    name: 'Smile',
    groups: ['people'],
    src: img5,
    date: '2 mins',
  },
  {
    id: 5,
    name: 'Smile',
    groups: ['people'],
    src: img6,
    date: '1 hour',
    like: true,
  },
  {
    id: 6,
    name: 'Fog',
    groups: ['nature'],
    src: img7,
    date: '2 mins',
    like: true,
  },
  {
    id: 7,
    name: 'Beach',
    groups: ['people'],
    src: img8,
    date: '2 mins',
  },
  {
    id: 8,
    name: 'Pause',
    groups: ['people'],
    src: img9,
    date: '3 hour',
    like: true,
  },
  {
    id: 9,
    name: 'Space',
    groups: ['space'],
    src: img10,
    date: '3 hour',
    like: true,
  },
  {
    id: 10,
    name: 'Shuttle',
    groups: ['space'],
    src: img11,
    date: '35 mins',
    like: true,
  },
  {
    id: 11,
    name: 'Sky',
    groups: ['space'],
    src: img13,
    date: '2 mins',
  },
])

const filteredImages = computed(() => {
  const imgs = images.value.slice()
  imgs.sort((a, b) => {
    if (desc.value !== null) {
      if (a.name < b.name) {
        return desc.value ? 1 : -1
      } else if (a.name > b.name) {
        return desc.value ? -1 : 1
      } else {
        return 0
      }
    }
    return 0
  })

  if (activeCategory.value) {
    return imgs.filter(img => img.groups.indexOf(activeCategory.value) !== -1)
  }

  return imgs
})

function changeCategory(category) {
  activeCategory.value = category
}

function openLightbox(index) {
  const dataSource = filteredImages.value.map(img => ({
    src: img.src,
    width: 1200,
    height: 800,
    alt: img.name
  }))

  pswpInstance = new PhotoSwipe({
    dataSource,
    index,
    bgOpacity: 0.9,
    showHideAnimationType: 'zoom'
  })
  pswpInstance.init()
}

onUnmounted(() => {
  if (pswpInstance) {
    pswpInstance.destroy()
    pswpInstance = null
  }
})
</script>

<style src="./Gallery.scss" lang="scss" scoped />
