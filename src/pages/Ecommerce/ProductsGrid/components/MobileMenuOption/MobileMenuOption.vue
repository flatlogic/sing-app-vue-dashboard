<template>
  <li
    :class="{ option: true, active: active }"
    @click="onClick()"
  >
    <span>
      <img
        src="../../../../../assets/check.svg"
        alt="check"
      >
    </span>
    {{ option }}
  </li>
</template>

<script setup>
defineProps({
  option: [String, Number],
  active: Boolean,
  onClick: Function
})
</script>

<style src="./MobileMenuOption.scss" lang="scss" scoped />
