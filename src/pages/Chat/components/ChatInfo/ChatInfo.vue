<template>
  <div>
    <section class="chat-info-header chat-section bg-info">
      <div class="d-flex mb-3">
        <header>
          <h3 class="mb-3 fw-semi-bold">{{activeChatUser.name}} {{activeChatUser.surname}}</h3>
          <h5>{{activeChatUser.company}}</h5>
          <h6>{{activeChatUser.position}}</h6>
        </header>
        <Avatar class="ml-auto mr-3" :user="activeChatUser" :size="70" :showStatus="false"></Avatar>
      </div>
      <footer class="d-flex align-items-center justify-content-between">
        <a :href="'mailto:' + activeChatUser.email" class="text-white mt-2">{{activeChatUser.email}}</a>
        <ul class="social-links mt-2" v-if="activeChatUser.social">
          <li class="social-link">
            <a :href="activeChatUser.social.facebook"><i class="fa fa-facebook"></i></a>
          </li>
          <li class="social-link">
            <a :href="activeChatUser.social.twitter"><i class="fa fa-twitter"></i></a>
          </li>
          <li class="social-link">
            <a :href="activeChatUser.social.linkedin"><i class="fa fa-linkedin"></i></a>
          </li>
        </ul>
      </footer>
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Avatar from '../Avatar/Avatar';

  export default {
    name: 'ChatInfo',
    components: {Avatar},
    props: {

    },
    computed: {
      ...mapState('chat', ['activeChatUser'])
    }
  }
</script>

<style src="./ChatInfo.scss" lang="scss" scoped></style>
