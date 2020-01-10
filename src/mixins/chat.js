import { mapState, mapActions } from 'vuex';
import { MobileChatStates } from '../store/chat';

export const ChatMixin = {
  data() {
    return {
      mobileChatStates: MobileChatStates
    }
  },
  methods: {
    ...mapActions('chat', ['changeMobileState']),
    findInterlocutor(chat) {
      if (!chat || !chat.id) {
        return null;
      }
      let id = chat.users.find(uid => uid !== this.user.id);
      return this.findUser(id);
    },
    findUser(id) {
      return this.users.find(u => u.id === id);
    }
  },
  computed: {
    ...mapState('chat', ['users', 'user', 'mobileState'])
  },
};
