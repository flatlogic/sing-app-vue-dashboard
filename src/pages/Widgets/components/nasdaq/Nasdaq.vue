<template>
  <Sparklines :data="data" type="line" :width="width" :height="height" :options="options" />
</template>

<script>
import Sparklines from '@/components/Sparklines/Sparklines';

export default {
  name: 'Nasdaq',
  components: { Sparklines },
  data() {
    return {
      data: [{
        data: [4, 6, 5, 7, 5],
      }],
      width: '100%',
      height: 70,
      options: {
        stroke: {
          width: 1
        },
        markers: {
          size: 4,
          colors: '#666',
          shape: "circle",
          strokeWidth: 0,
          hover: {
            size: 5,
            colors: '#fff',
          }
        },
        colors: [
          '#666'
        ],
        grid: {
          padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
          }
        }
      }
    };
  },
};
</script>
