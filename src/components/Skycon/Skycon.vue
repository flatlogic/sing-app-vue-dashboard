<template>
  <canvas
    ref="canvasRef"
    v-bind="options"
  />
</template>

<script setup>
import { ref, onMounted, onBeforeUpdate } from 'vue'
import SkyconsFactory from 'skycons'

const props = defineProps({
  options: { type: Object },
  icon: { type: String },
  color: { type: String },
  autoplay: { type: Boolean, default: true },
})

const canvasRef = ref(null)
let skycons = null
let Skycons = null

onMounted(() => {
  // Initialize Skycons with window object
  Skycons = SkyconsFactory(window || {})
  skycons = new Skycons({ color: props.color })
  skycons.add(canvasRef.value, Skycons[props.icon])

  if (props.autoplay) {
    skycons.play()
  }
})

onBeforeUpdate(() => {
  if (skycons && Skycons && canvasRef.value) {
    skycons.set(canvasRef.value, Skycons[props.icon])
  }
})

function play() {
  if (skycons) skycons.play()
}

function pause() {
  if (skycons) skycons.pause()
}

defineExpose({ play, pause })
</script>
