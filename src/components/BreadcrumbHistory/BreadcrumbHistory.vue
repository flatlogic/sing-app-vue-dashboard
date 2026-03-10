<template>
  <div v-if="!excluded">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li
          v-for="(item, index) in tree"
          :key="index"
          class="breadcrumb-item"
          :class="{ active: index === tree.length - 1 }"
        >
          <a
            v-if="index !== tree.length - 1"
            href="#"
          >{{ item }}</a>
          <template v-else>
            {{ item }}
          </template>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  exclude: { type: Array, default: () => [] }
})

const route = useRoute()

const excluded = computed(() => {
  return props.exclude.indexOf(route.path.split('/').pop()) > -1
})

const tree = computed(() => {
  return ['YOU ARE HERE']
    .concat(route.path
      .split('/')
      .slice(1)
      .map(route => route
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
      )
    )
})
</script>
