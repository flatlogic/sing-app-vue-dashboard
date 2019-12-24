<template>
  <div>
    <section class="chat-section chat-search">
      <b-input placeholder="Search" v-model="search"></b-input>
      <i class="la la-search"></i>
    </section>
    <section class="chat-section">
      <h6>Personal Chats</h6>
      <ul class="chat-list">

      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ChatList',
    props: {
      user: {},
      users: [],
      groups: []
    },
    data() {
      return {
        search: ''
      }
    },
    computed: {
      personalChats() {

      }
    }
  }
</script>

<style src="./ChatList.scss" lang="scss" scoped></style>
