import { mapState } from 'vuex';

export const ChatMixin = {
  methods: {
    findInterlocutor(chat) {
      let id = chat.users.find(uid => uid !== this.user.id);
      return this.findUser(id);
    },
    findUser(id) {
      return this.users.find(u => u.id === id);
    }
  },
  computed: {
    ...mapState('chat', ['users', 'user'])
  },
};
