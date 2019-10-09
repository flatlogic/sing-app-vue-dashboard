<template>
  <div class="border-left pl-4 d-md-down-none scrollspy">
    <h6 class="fw-semi-bold text-uppercase">{{title}}</h6>
    <b-list-group v-b-scrollspy="150">
      <b-list-group-item @click="scrollToId(id)" v-for="id in ids" :key="id" :to="'#' + id">{{id.split('-').join(' ')}}</b-list-group-item>
    </b-list-group>
  </div>

</template>
<script>
  export default {
    name: 'Scrollspy',
    props: {
      title: {type: String},
      ids: {type: Array}
    },
    methods: {
      scrollToId(id) {
        // debugger;
        const el = id ? document.getElementById(id) : null;
        if (el) {
          window.scrollTo({
            top: el.offsetTop
          });
        }
      }
    }
  }
</script>
