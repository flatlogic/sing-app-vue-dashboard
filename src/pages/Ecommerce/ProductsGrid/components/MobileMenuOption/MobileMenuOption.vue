<template>
  <li
    :class="{ option: true, active: active }"
    @click="onClick()"
  >
    <span>
      <img src='../../../../../assets/check.svg' alt="check" />
    </span>
    {{option}}
  </li>
</template>

<script>
export default {
  name: 'MobileMenuOption',
  props: ['option', 'active', 'onClick'],

};
</script>

<style src="./MobileMenuOption.scss" lang="scss" scoped />
