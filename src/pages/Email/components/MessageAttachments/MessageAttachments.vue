<template>
  <div class="messageAttachments">
    <hr />
    <div class="attachmentsInfo">
      <strong>{{attachments.length}} attachments</strong> -
      <a class="ml-xs" href="#">Download all attachments</a>
      <a class="ml-xs" href="#">View all attachments</a>
    </div>
      <div v-for="attachment in attachments" class="attachment" :key="attachment.id">
        <img class="img-fluid" :src="attachment.photo" alt="attachment" />
        <h5 class="fw-semi-bold">{{attachment.photoName}}</h5>
        <div class="attachmentButtons">
          {{attachment.weight}}
          <a class="ml-sm" href="#">View</a>
          <a class="ml-sm" href="#">Download</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MessageAttachments',
  props: ['attachments'],
};
</script>

<style src="./MessageAttachments.scss" lang="scss" scoped />
