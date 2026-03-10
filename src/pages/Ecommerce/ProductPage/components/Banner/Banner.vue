<template>
  <div class="productDetailsBanner">
    <div
      class="productPhoto"
      :style="{ 'background-image': 'url(' + data.img + ')' }"
    />
    <div class="productInfo">
      <General
        :rating="data.rating"
        :title="data.title"
        :subtitle="data.subtitle"
        :price="data.price"
      />
      <a
        href="#"
        class="productGuide"
      >Size Guide</a>
      <Selects
        :sizes="[1, 2, 3, 4, 5]"
        :quantity="[1, 2, 3, 4, 5, 6, 7]"
      />
      <Bag />
      <div class="payments">
        <div
          v-for="payment in payments"
          :key="payment"
          :style="{ 'background-image': 'url(' + payment + ')' }"
        />
      </div>
      <span class="delivery">FREE Delivery & Returns</span>
    </div>
  </div>
</template>

<script setup>
import visa from '@/assets/payments/visa.svg?url'
import mastercard from '@/assets/payments/mastercard.svg?url'
import aexpress from '@/assets/payments/aexpress.svg?url'
import paypal from '@/assets/payments/paypal.svg?url'

import General from '../General/General.vue'
import Selects from '../Selects/Selects.vue'
import Bag from '../Bag/Bag.vue'

defineProps({
  data: { type: Object, default: () => ({}) }
})

const payments = [visa, mastercard, aexpress, paypal]
</script>

<style src="./Banner.scss" lang="scss" scoped />
