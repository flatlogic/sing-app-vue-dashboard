<template>
  <div>
    <section class="chat-info-header chat-section bg-info">
      <div class="d-flex mb-3">
        <header>
          <h3 class="mb-3 fw-semi-bold">{{info.name}} {{info.surname}}</h3>
          <h5>{{info.company}}</h5>
          <h6>{{info.position}}</h6>
        </header>
        <Avatar class="ml-auto mr-3" :user="info" :size="70" :showStatus="false"></Avatar>
      </div>
      <footer class="d-flex align-items-center justify-content-between">
        <a :href="'mailto:' + info.email" class="text-white mt-2">{{info.email}}</a>
        <ul class="social-links mt-2" v-if="info.social">
          <li class="social-link">
            <a :href="info.social.facebook"><i class="fa fa-facebook"></i></a>
          </li>
          <li class="social-link">
            <a :href="info.social.twitter"><i class="fa fa-twitter"></i></a>
          </li>
          <li class="social-link">
            <a :href="info.social.linkedin"><i class="fa fa-linkedin"></i></a>
          </li>
        </ul>
      </footer>
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Avatar from '../Avatar/Avatar';
  import { ChatMixin } from '../../../../mixins/chat';

  export default {
    name: 'ChatInfo',
    components: {Avatar},
    mixins: [ChatMixin],
    computed: {
      ...mapState('chat', ['activeChatId', 'chats']),
      info() {
        let chat = this.chats.find(chat => chat.id === this.activeChatId);
        if (chat.isGroup) {
          return {}
        }
        return this.findInterlocutor(chat);
      }
    }
  }
</script>

<style src="./ChatInfo.scss" lang="scss" scoped></style>
