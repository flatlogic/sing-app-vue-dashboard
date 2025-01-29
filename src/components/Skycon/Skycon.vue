<template>
  <canvas ref="canvas" v-bind="options" />
</template>

<script>
const Skycons = require('skycons')(window || {});

export default {
  name: 'Skycon',
  props: {
    options: { type: Object },
    icon: { type: String },
    color: { type: String },
    autoplay: { type: Boolean, default: true },
  },
  data() {
    return {
      skycons: new Skycons({ color: this.color }),
    };
  },
  methods: {
    play() {
      this.skycons.play();
    },
    pause() {
      this.skycons.pause();
    },
  },
  mounted() {
    const { skycons } = this;
    skycons.add(this.$refs.canvas, Skycons[this.icon]); // eslint-disable-line

    if (this.autoplay) {
      skycons.play();
    }
  },
  beforeUpdate() {
     this.skycons.set(this.$refs.canvas, Skycons[this.icon]); // eslint-disable-line
  },
};
</script>
