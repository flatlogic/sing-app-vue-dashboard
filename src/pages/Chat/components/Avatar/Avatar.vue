<template>
  <div class="avatar" :style="{
      height: size + 'px',
      width: size + 'px',
      minWidth: size + 'px',
    }"
  >
    <div class="image-wrapper" :class="{stroke: stroke}" :style="{
      fontSize: size / 3 + 'px'
    }">
      <img v-if="user.avatar" :src="user.avatar" alt="avatar">
      <span v-else>{{initials}}</span>
    </div>

    <span v-if="user.isOnline && showStatus" class="status bg-success"></span>
  </div>
</template>

<script>
  export default {
    name: 'Avatar',
    props: {
      user: Object,
      size: Number,
      showStatus: {type: Boolean, default: true},
      stroke: {type: Boolean, default: false}
    },
    computed: {
      initials() {
        return this.user?.name?.charAt(0).toUpperCase() + this.user?.surname?.charAt(0).toUpperCase();
      }
    }
  }
</script>

<style src="./Avatar.scss" lang="scss" scoped></style>
