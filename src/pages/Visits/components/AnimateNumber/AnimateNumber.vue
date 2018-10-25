<template>
  <span ref="number">{{number}}</span>
</template>

<script>
export default {
  name: 'AnimateNumber',
  props: ['number'],
  mounted() {
    /* eslint-disable */
    const $ = require('jquery');
    const animate = require('jquery.animate-number');
    /* eslint-enable */
    const el = $(this.$refs.number);
    el.animateNumber({
      number: el.text().replace(/ /gi, ''),
      numberStep: $.animateNumber.numberStepFactories.separator(' '),
      easing: 'easeInQuad',
    }, 1000);
  },
};
</script>
