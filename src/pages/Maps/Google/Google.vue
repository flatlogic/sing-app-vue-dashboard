<template>
  <div class="mapPage">
    <h1 class="mapTitle page-title">
      Google <span class="fw-semi-bold">Maps</span>
    </h1>
    <div class="mapContainer">
      <GoogleMap
        :api-key="apiKey"
        :center="center"
        :zoom="12"
        style="width: 100%; height: 100%"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
    </div>
  </div>
</template>

<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'

// Use environment variable or fallback to demo key
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg'
const center = { lat: -37.813179, lng: 144.950259 }
</script>

<style src="./Google.scss" lang="scss" scoped />
