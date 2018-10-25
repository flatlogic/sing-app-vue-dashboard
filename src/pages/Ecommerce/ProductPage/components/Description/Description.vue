<template>
  <div >
    <div class="productDescription">
      <div v-for="item in description"
        :class="{ [item.extraClass]: true, productDescriptionBlock: true }" :key="item.id">
        <h3>{{item.title}}</h3>
        <div v-html="item.body" />
      </div>
    </div>
    <div class="productDescription productDescriptionMobile">
      <b-card class="panel" v-for="element in description" :key="element.id.toString()" no-body>
        <b-card-header
          :class="{ 'panel-header': true, 'panel-first': element.id === 0 }" role="tab">
          <button class="accordion-toggle" v-b-toggle="'accordion' + element.id.toString()">
            {{element.title}}
            <i class="fa fa-angle-down fa-2x" />
          </button>
        </b-card-header>
        <b-collapse :id="'accordion' + element.id.toString()"
          accordion="accordion" role="tabpanel">
          <b-card-body v-html="element.body" />
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: ['description'],
};
</script>

<style src="./Description.scss" lang="scss" />
