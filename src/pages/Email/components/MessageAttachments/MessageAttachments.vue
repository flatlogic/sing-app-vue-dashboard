<template>
  <div class="messageAttachments">
    <hr>
    <div class="attachmentsInfo">
      <strong>{{ attachments.length }} attachments</strong> -
      <a
        class="ms-sm-1"
        href="#"
      >Download all attachments</a>
      <a
        class="ms-sm-1"
        href="#"
      >View all attachments</a>
    </div>
    <div
      v-for="attachment in attachments"
      :key="attachment.id"
      class="attachment"
    >
      <img
        class="img-fluid"
        :src="attachment.photo"
        alt="attachment"
      >
      <h5 class="fw-semi-bold">
        {{ attachment.photoName }}
      </h5>
      <div class="attachmentButtons">
        {{ attachment.weight }}
        <a
          class="ms-sm-1"
          href="#"
        >View</a>
        <a
          class="ms-sm-1"
          href="#"
        >Download</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  attachments: Array
})
</script>

<style src="./MessageAttachments.scss" lang="scss" scoped />
