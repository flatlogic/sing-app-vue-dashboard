<template>
  <Widget>
    <MessageHeader
      :title="message.theme"
      :name="message.from"
      :email="message.fromEmail"
      :to="message.to"
      :date="message.date"
      :changeCompose="() => changeCompose(true, { from: message.from, theme: message.theme })"
    />
    <div v-html="message.content"></div>
    <MessageAttachments v-if="message.attachments" :attachments="message.attachments" />
  </Widget>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import MessageHeader from '../MessageHeader/MessageHeader';
import MessageAttachments from '../MessageAttachments/MessageAttachments';

export default {
  name: 'Message',
  components: { Widget, MessageHeader, MessageAttachments },
  props: ['message', 'changeCompose'],
};
</script>
