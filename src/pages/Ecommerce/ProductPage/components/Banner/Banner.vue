<template>
  <div class="productDetailsBanner">
    <div class="productPhoto" :style="{ 'background-image': 'url(' + image + ')' }" />
    <div class="productInfo">
      <General :rating="4.8" title="Trainers" subtitle="trainers in white" :price="76" />
      <a href="#" class="productGuide">Size Guide</a>
      <Selects :sizes="[1, 2, 3, 4, 5]" :quantity="[1, 2, 3, 4, 5, 6, 7]" />
      <Bag />
      <div class="payments">
        <div v-for="payment in payments" :key="payment"
          :style="{ 'background-image': 'url(' + payment + ')' }" />
      </div>
      <span class="delivery">FREE Delivery & Returns</span>
    </div>
  </div >
</template>

<script>
import bannerImage from '@/assets/products/img1.jpg';
import visa from '@/assets/payments/visa.svg';
import mastercard from '@/assets/payments/mastercard.svg';
import aexpress from '@/assets/payments/aexpress.svg';
import paypal from '@/assets/payments/paypal.svg';

import General from '../General/General';
import Selects from '../Selects/Selects';
import Bag from '../Bag/Bag';

export default {
  name: 'Banner',
  components: { General, Selects, Bag },
  data() {
    return {
      image: bannerImage,
      payments: [visa, mastercard, aexpress, paypal],
    };
  },
};
</script>

<style src="./Banner.scss" lang="scss" scoped />
