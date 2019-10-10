<template>
  <b-row>
    <b-col lg="9" xs="12">
      <h2>Progress</h2>
      <p class="mb-4">Use our custom progress component for displaying simple or complex progress bars, featuring
        support for horizontally stacked bars, animated backgrounds, and text labels.</p>
      <vue-code-highlight>import { BProgress, BProgressBar } from 'bootstrap-vue';</vue-code-highlight>
      <b-tabs nav-class="bg-transparent" class="mb-5">
        <b-tab title="Example" active>
          <div class="text-center">0%</div>
          <b-progress></b-progress>
          <div class="text-center">25%</div>
          <b-progress :value="25"></b-progress>
          <div class="text-center">50%</div>
          <b-progress :value="50"></b-progress>
          <div class="text-center">75%</div>
          <b-progress striped :value="75"></b-progress>
          <div class="text-center">100%</div>
          <b-progress animated :value="100"></b-progress>
          <div class="text-center">Multiple bars</div>
          <b-progress multi>
            <b-progress-bar :value="15"></b-progress-bar>
            <b-progress-bar variant="success" :value="30"></b-progress-bar>
            <b-progress-bar variant="info" :value="25"></b-progress-bar>
            <b-progress-bar variant="warning" :value="20"></b-progress-bar>
            <b-progress-bar variant="danger" :value="5"></b-progress-bar>
          </b-progress>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>{{decodeHtml(progressCode)}}</vue-code-highlight>
        </b-tab>
      </b-tabs>
    </b-col>
    <p class="p-4">For more examples please refer to <a href="https://bootstrap-vue.js.org/docs/components/progress/"
                                                        target="_blank"
                                                        rel="noopener noreferrer">Bootstrap Vue Progress</a></p>
  </b-row>
</template>
<script>


  export default {
    name: 'DocNavbar',
    data() {
      return {
        progressCode: '<div class="text-center">0%</div>\n' +
          '<b-progress></b-progress>\n' +
          '<div class="text-center">25%</div>\n' +
          '<b-progress :value="25"></b-progress>\n' +
          '<div class="text-center">50%</div>\n' +
          '<b-progress :value="50"></b-progress>\n' +
          '<div class="text-center">75%</div>\n' +
          '<b-progress striped :value="75"></b-progress>\n' +
          '<div class="text-center">100%</div>\n' +
          '<b-progress animated :value="100"></b-progress>\n' +
          '<div class="text-center">Multiple bars</div>\n' +
          '<b-progress multi>\n' +
          '  <b-progress-bar :value="15"></b-progress-bar>\n' +
          '  <b-progress-bar variant="success" :value="30"></b-progress-bar>\n' +
          '  <b-progress-bar variant="info" :value="25"></b-progress-bar>\n' +
          '  <b-progress-bar variant="warning" :value="20"></b-progress-bar>\n' +
          '  <b-progress-bar variant="danger" :value="5"></b-progress-bar>\n' +
          '</b-progress>',
      }
    }
  }
</script>
