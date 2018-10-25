<template>
  <div class="pagination mb">
    <span class="paginationText">Showing 1 - 10 of 96 messages</span>
    <div class="paginationPages">
      <button class="button buttonDisabled"><i class="fa fa-chevron-left" /></button>
      <button class="button buttonActive">1</button>
      <button class="button">2</button>
      <button class="button"><i class="fa fa-chevron-right" /></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
};
</script>

<style src="./Pagination.scss" lang="scss" scoped />
