<template>
  <div class="border-start ps-4 d-md-down-none scrollspy">
    <h6 class="fw-semi-bold text-uppercase">
      {{ title }}
    </h6>
    <ul class="list-group list-group-flush">
      <li
        v-for="id in ids"
        :key="id"
        class="list-group-item list-group-item-action"
        @click="scrollToId(id)"
      >
        {{ id.split('-').join(' ') }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String },
  ids: { type: Array }
})

function scrollToId(id) {
  const el = id ? document.getElementById(id) : null
  if (el) {
    window.scrollTo({
      top: el.offsetTop,
      behavior: 'smooth'
    })
  }
}
</script>
